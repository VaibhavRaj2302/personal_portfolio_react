import { useState, ChangeEvent, FormEvent } from "react";
import { saveUserQuery } from "../services/QueryServices";
import GenericModal, { ModalAction } from "./GenericModel";
import { EmailJSResponseStatus, send } from "@emailjs/browser";
import DOMPurify from "dompurify";

interface ErrorResponse {
  message: string;
}

interface ContactFormInterface {
  name: string;
  title: string;
  email: string;
  message: string;
  number?: string;
}

interface FormErrors {
  name?: string;
  title?: string;
  email?: string;
  number?: string;
  message?: string;
}

function ContactForm() {
  const [form, setFormField] = useState<ContactFormInterface>({
    name: "",
    title: "",
    email: "",
    message: "",
    number: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const [isModalOpen, setIsModalOpen] = useState<{
    show: boolean;
    modelAction: ModalAction[] | undefined;
    title?: string | null;
    content?: React.ReactNode | string | null;
  }>({
    show: false,

    modelAction: [
      {
        label: "Ok",
        type: "primary",
        onClick: () => {
          okAction();
        },
      },
    ],
  });

  const [submitting, setSubmitting] = useState(false);

  function okAction() {
    setFormField({ email: "", message: "", name: "", number: "", title: "" });
    setErrors({});
    setIsModalOpen({
      show: false,
      modelAction: undefined,
      content: null,
      title: null,
    });
  }

  function validateForm(): boolean {
    const newErrors: FormErrors = {};

    // 1. SENDER_NAME validation (minimum 2 characters)
    if (!form.name.trim() || form.name.trim().length < 2) {
      newErrors.name = "Please enter a valid name (at least 2 characters).";
    }

    // 2. EMAIL_ADDRESS validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    // 3. TITLE validation (minimum 10 characters)
    if (!form.title.trim() || form.title.trim().length < 10) {
      newErrors.title = "Please enter a valid title (at least 10 characters).";
    }

    // 3. MOBILE_NUMBER validation (Optional: validates format only if user entered something)
    if (form.number && form.number.trim() !== "") {
      const rawDigits = form.number.replace(/[\s\-\(\)\+]/g, "");
      if (!/^\d{10,15}$/.test(rawDigits)) {
        newErrors.number = "Please enter a valid phone number (10-15 digits).";
      }
    }

    // 4. MESSAGE_BODY validation (minimum 10 characters)
    if (!form.message.trim() || form.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function sendConfirmationEmailToSender(
    sanitizedForm: ContactFormInterface,
  ) {
    // 2. Send Auto-Reply Email
    try {
      await send(
        import.meta.env.VITE_SERVICE_ID_EMAIL_JS,
        import.meta.env.VITE_TEMPLATE_ID_EMAIL_JS,
        {
          name: sanitizedForm.name,
          title: sanitizedForm.title,
          email: sanitizedForm.email,
          from: "Vaibhav raj singh",
        },
        import.meta.env.VITE_PUBLIC_KEY_EMAIL_JS,
      );
    } catch (error) {
      if (error instanceof EmailJSResponseStatus) throw { message: error.text };
      else
        throw {
          message:
            "Oops! Something went wront please train again after some time.",
        };
    }
  }

  // Helper to strip HTML tags and sanitize strings
  const sanitizeInput = (str: string): string => {
    return DOMPurify.sanitize(str.trim(), { ALLOWED_TAGS: [] }); // ALLOWED_TAGS: [] strips ALL HTML
  };

  const isErrorResponse = (error: unknown): error is ErrorResponse => {
    return (
      typeof error === "object" &&
      error !== null &&
      "message" in error &&
      typeof (error as { message?: unknown }).message === "string"
    );
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Prevent submission if validation fails
    if (!validateForm()) return;

    // Show loader.
    setSubmitting(true);

    await storeUserQueriesAndSendConfirmationEmail();
  }

  async function storeUserQueriesAndSendConfirmationEmail() {
    // Clean form payload before processing
    const sanitizedForm: ContactFormInterface = {
      name: sanitizeInput(form.name),
      title: sanitizeInput(form.title),
      email: form.email.trim(), // Email regex already validates structure
      message: sanitizeInput(form.message),
      number: form.number ? sanitizeInput(form.number) : "",
    };

    try {
      const { message } = await saveUserQuery({ queryData: sanitizedForm });

      // send confirmation email.
      await sendConfirmationEmailToSender(sanitizedForm);

      setIsModalOpen({
        show: true,
        content: message,
        title: "Sumbitted Successfully.",
        modelAction: [
          {
            label: "Ok",
            type: "primary",
            onClick: () => {
              okAction();
            },
          },
        ],
      });
    } catch (error) {
      if (isErrorResponse(error)) {
        setIsModalOpen({
          show: true,
          content: `${error.message}`,
          title: "Something went wrong!",
          modelAction: [
            {
              label: "Retry",
              type: "secondary",
              onClick: async () => {
                await storeUserQueriesAndSendConfirmationEmail();
              },
            },
            {
              label: "Ok",
              type: "danger",
              onClick: () => {
                setIsModalOpen({
                  show: false,
                  modelAction: undefined,
                  content: null,
                });
              },
            },
          ],
        });
      }
    } finally {
      setSubmitting(false);
    }
  }

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target;
    setFormField((prev) => ({ ...prev, [name]: value }));

    // Clear error for the current field as user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  return (
    <div className="align-middle justify-center flex m-10">
      <form
        onSubmit={handleSubmit}
        className="space-y-6 text-left w-100 p-10 ide-border transition-colors"
        id="contact-form"
        noValidate
      >
        <div>
          <label className="block font-mono text-[11px] text-ide-text-variant mb-2 font-bold tracking-wider">
            SENDER_NAME
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className={`w-full bg-ide-bg border px-4 py-3 text-ide-text focus:ring-0 rounded-none transition-colors font-sans text-sm focus:outline-none ${
              errors.name
                ? "border-red-500 focus:border-red-500"
                : "border-ide-border focus:border-ide-primary"
            }`}
            placeholder="John Doe"
            required
            id="form-sender-name"
          />
          {errors.name && (
            <p className="mt-2 text-xs font-mono text-red-500 tracking-wide">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label className="block font-mono text-[11px] text-ide-text-variant mb-2 font-bold tracking-wider">
            EMAIL_ADDRESS
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className={`w-full bg-ide-bg border px-4 py-3 text-ide-text focus:ring-0 rounded-none transition-colors font-sans text-sm focus:outline-none ${
              errors.email
                ? "border-red-500 focus:border-red-500"
                : "border-ide-border focus:border-ide-primary"
            }`}
            placeholder="john@example.com"
            required
            id="form-sender-email"
          />
          {errors.email && (
            <p className="mt-2 text-xs font-mono text-red-500 tracking-wide">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label className="block font-mono text-[11px] text-ide-text-variant mb-2 font-bold tracking-wider">
            TITLE
          </label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            className={`w-full bg-ide-bg border px-4 py-3 text-ide-text focus:ring-0 rounded-none transition-colors font-sans text-sm focus:outline-none ${
              errors.title
                ? "border-red-500 focus:border-red-500"
                : "border-ide-border focus:border-ide-primary"
            }`}
            placeholder="Reason to contact"
            required
            id="form-sender-name"
          />
          {errors.title && (
            <p className="mt-2 text-xs font-mono text-red-500 tracking-wide">
              {errors.title}
            </p>
          )}
        </div>

        <div>
          <label className="block font-mono text-[11px] text-ide-text-variant mb-2 font-bold tracking-wider">
            MOBILE_NUMBER{" "}
            <span className="text-gray-400 font-normal">(OPTIONAL)</span>
          </label>
          <input
            type="tel"
            name="number"
            value={form.number || ""}
            onChange={handleChange}
            className={`w-full bg-ide-bg border px-4 py-3 text-ide-text focus:ring-0 rounded-none transition-colors font-sans text-sm focus:outline-none ${
              errors.number
                ? "border-red-500 focus:border-red-500"
                : "border-ide-border focus:border-ide-primary"
            }`}
            placeholder="+91 9876543210"
            id="form-sender-phone"
          />
          {errors.number && (
            <p className="mt-2 text-xs font-mono text-red-500 tracking-wide">
              {errors.number}
            </p>
          )}
        </div>

        <div>
          <label className="block font-mono text-[11px] text-ide-text-variant mb-2 font-bold tracking-wider">
            MESSAGE_BODY
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            className={`w-full bg-ide-bg border px-4 py-3 text-ide-text focus:ring-0 rounded-none transition-colors font-sans text-sm pb-10 focus:outline-none ${
              errors.message
                ? "border-red-500 focus:border-red-500"
                : "border-ide-border focus:border-ide-primary"
            }`}
            placeholder="Hello, I have a project..."
            rows={4}
            required
            id="form-message-body"
          />
          {errors.message && (
            <p className="mt-2 text-xs font-mono text-red-500 tracking-wide">
              {errors.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-[#8B5CF6] text-white font-mono text-[12px] font-bold py-4 hover:bg-[#7c3aed] hover:text-white transition-all duration-300 tracking-wider rounded-none disabled:opacity-50"
          id="btn-execute-send"
          disabled={submitting}
        >
          {submitting ? <span className="loader"></span> : "EXECUTE_SEND"}
        </button>
      </form>
      <GenericModal
        isOpen={isModalOpen.show}
        onClose={() => {
          okAction();
        }}
        title={isModalOpen.title ?? "Alert"}
        content={isModalOpen.content}
        actions={isModalOpen.modelAction}
      />
    </div>
  );
}

export default ContactForm;
