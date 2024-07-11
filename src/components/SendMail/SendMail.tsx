import React, { useRef, useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";

const SendMail: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [sendStatus, setSendStatus] = useState<"error" | "success" | null>(
    null
  );

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    console.log(form);
    console.log(import.meta.env);
    setSendStatus(null);
    e.preventDefault();

    const {
      PUBLIC_EMAILJS_PUBLIC_KEY: publicKey,
      PUBLIC_EMAILJS_SERVICE_ID: serviceId,
      PUBLIC_EMAILJS_TEMPLATE_ID: templateId,
    } = import.meta.env;

    if (form.current) {
      emailjs
        .sendForm(serviceId, templateId, form.current, {
          publicKey,
        })
        .then(
          () => {
            setSendStatus("success");
            if (form.current) form.current.reset();
          },
          () => {
            setSendStatus("error");
          }
        );
    }
  };

  return (
    <>
      <div className="growflex flex-col w-1/2 max-sm:w-full justify-center items-center">
        {sendStatus === "success" && (
          <p
            className="animate-jump-in p-1 rounded-xl bg-green-200 text-center"
            style={{ color: "green" }}
          >
            El mensaje se envío correctamente! 😊
          </p>
        )}
        {sendStatus === "error" && (
          <p
            className="animate-jump-in p-1 rounded-xl bg-light-red text-center"
            style={{ color: "red" }}
          >
            Hubo un error al enviar el mensaje. 🥲{" "}
          </p>
        )}
        <form
          ref={form}
          className="flex flex-col gap-1 w-100 pr-2 text-xl font-bold"
          onSubmit={sendEmail}
        >
          <label className="flex flex-col">
            Nombre:
            <input
              className="rounded-md font-normal p-1 text-sm"
              type="text"
              name="from_name"
              id="from_name"
              required
            />
          </label>
          <label className="flex flex-col">
            mail:
            <input
              className="rounded-md font-normal p-1 text-sm"
              type="email"
              name="email_id"
              id="email_id"
              required
            />
          </label>
          <label className="flex flex-col">
            mensaje:
            <textarea
              className="rounded-md font-normal p-1 text-sm"
              name="message"
              id="message"
              required
              minLength={6}
            ></textarea>
          </label>
          <button className="bg-white rounded-md" type="submit">
            Enviar
          </button>
        </form>
      </div>
    </>
  );
};

export default SendMail;
