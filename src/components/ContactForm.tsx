import { useState, ChangeEvent, FormEvent } from "react";
import { saveUserQuery } from "../services/QueryServices";
import GenericModal, { ModalAction } from "./GenericModel";

interface ContactFormInterface {
  name: string;
  email: string;
  message: string;
  number?: string;
}

function ContactForm() {
  const [form, setFormField] = useState<ContactFormInterface>({
    name: "",
    email: "",
    message: "",
  });

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
    setFormField({ email: "", message: "", name: "" });
    setIsModalOpen({
      show: false,
      modelAction: undefined,
      content: null,
      title: null,
    });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Show loader.
    setSubmitting(true);

    setTimeout(async () => {
      try {
        const { message } = await saveUserQuery({ queryData: form });

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
        console.log(error);

        setIsModalOpen({
          show: true,
          content: `${error}`,
          title: "Something went wrong!",
          modelAction: [
            {
              label: "Retry",
              type: "secondary",
              onClick: () => {
                // TODO: implement retry.
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
      } finally {
        setSubmitting(false);
      }
    }, 2000);
  }

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target;
    setFormField((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <div className="align-middle justify-center flex m-10">
      <form
        onSubmit={handleSubmit}
        className="space-y-6 text-left w-100 p-10 ide-border transition-colors"
        id="contact-form"
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
            className="w-full bg-ide-bg border border-ide-border px-4 py-3 text-ide-text focus:border-ide-primary focus:ring-0 rounded-none transition-colors font-sans text-sm focus:outline-none"
            placeholder="John Doe"
            required
            id="form-sender-name"
          />
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
            className="w-full bg-ide-bg border border-ide-border px-4 py-3 text-ide-text focus:border-ide-primary focus:ring-0 rounded-none transition-colors font-sans text-sm focus:outline-none"
            placeholder="john@example.com"
            required
            id="form-sender-email"
          />
        </div>

        <div>
          <label className="block font-mono text-[11px] text-ide-text-variant mb-2 font-bold tracking-wider">
            MOBILE_NUMBER
          </label>
          <input
            type="tel"
            name="number"
            value={form.number}
            onChange={handleChange}
            className="w-full bg-ide-bg border border-ide-border px-4 py-3 text-ide-text focus:border-ide-primary focus:ring-0 rounded-none transition-colors font-sans text-sm focus:outline-none"
            placeholder="+91 9876543210"
            required
            id="form-sender-phone"
          />
        </div>

        <div>
          <label className="block font-mono text-[11px] text-ide-text-variant mb-2 font-bold tracking-wider">
            MESSAGE_BODY
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            className="w-full bg-ide-bg border border-ide-border px-4 py-3 text-ide-text focus:border-ide-primary focus:ring-0 rounded-none transition-colors font-sans text-sm pb-10 focus:outline-none"
            placeholder="Hello, I have a project..."
            rows={4}
            required
            id="form-message-body"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#8B5CF6] text-white font-mono text-[12px] font-bold py-4 hover:bg-[#7c3aed] hover:text-white transition-all duration-300 tracking-wider rounded-none"
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
