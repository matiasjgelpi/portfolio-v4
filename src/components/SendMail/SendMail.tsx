import React, { useState } from "react";

interface Props {
  // Define aquí las propiedades que necesites
}

interface Form {
  name: string;
  mail: string;
  subject: string;
  message: string;
}

const SendMail: React.FC<Props> = (props) => {
  const [form, setForm] = useState<Form>({
    name: "",
    mail: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <>
      <div className="growflex flex-col w-1/2 max-sm:w-full justify-center items-center">
        <form
          className="flex flex-col gap-1 w-100 pr-2 text-xl font-bold"
          onSubmit={(e) => handleSubmit(e)}
        >
          <label className="flex flex-col">
            Nombre:
            <input
              className="rounded-md font-normal p-1 text-sm"
              type="text"
              name="name"
              onChange={(e) => handleChange(e)}
            />
          </label>
          <label className="flex flex-col">
            mail:
            <input
              className="rounded-md font-normal p-1 text-sm"
              type="email"
              name="mail"
              onChange={(e) => handleChange(e)}
            />
          </label>
          <label className="flex flex-col">
            asunto:
            <input
              className="rounded-md font-normal p-1 text-sm"
              type="text"
              name="subject"
              onChange={(e) => handleChange(e)}
            />
          </label>
          <label className="flex flex-col">
            mensaje:
            <textarea
              className="rounded-md font-normal p-1 text-sm"
              name="message"
              onChange={(e) => handleChange(e)}
            ></textarea>
          </label>
          <button className="bg-white rounded-md" type="submit">
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default SendMail;
