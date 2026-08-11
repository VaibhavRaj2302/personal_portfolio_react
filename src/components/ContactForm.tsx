import { useState, ChangeEvent, FormEvent } from "react";

interface ContactFormInterface {
  name: string;
  email: string;
  message: string;
}

function ContactForm() {
  const [form, setFormField] = useState<ContactFormInterface>({
    name: "",
    email: "",
    message: "",
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // handle form submission
    // TODO: implement firebase real time database
    // and store in query section of the database
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
        >
          EXECUTE_SEND
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
