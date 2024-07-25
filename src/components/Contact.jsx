import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name) newErrors.name = "Name is required";
    if (!form.email) newErrors.email = "Email is required";
    if (!form.message) newErrors.message = "Message is required";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    setErrors({});

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "SpectoV",
          from_email: form.email,
          to_email: import.meta.env.VITE_EMAILJS_TO_EMAIL,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert(
            "Thank you for reaching out to us. We will get back to you as soon as possible😊."
          );

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div id='contact' className="flex flex-col xl:flex-row gap-10 overflow-hidden rounded-2xl bg-white p-8 xl:mt-12">
      

      <div className="flex flex-col xl:flex-1 xl:w-1/2">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="mb-4 font-medium text-black">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="rounded-lg border-none bg-tertiary px-6 py-4 font-medium text-white outline-none placeholder:text-white"
            />
            {errors.name && <span className="text-red-500">{errors.name}</span>}
          </label>
          <label className="flex flex-col">
            <span className="mb-4 font-medium text-black">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className="rounded-lg border-none bg-tertiary px-6 py-4 font-medium text-white outline-none placeholder:text-white"
            />
            {errors.email && (
              <span className="text-red-500">{errors.email}</span>
            )}
          </label>
          <label className="flex flex-col">
            <span className="mb-4 font-medium text-black">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="rounded-lg border-none bg-tertiary px-6 py-4 font-medium text-white outline-none placeholder:text-white"
            />
            {errors.message && (
              <span className="text-red-500">{errors.message}</span>
            )}
          </label>

          <button
            type="submit"
            className="w-fit rounded-xl bg-tertiary px-8 py-3 font-bold text-white shadow-md shadow-primary outline-none"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
      <div className="w-full xl:w-1/2 flex justify-center xl:justify-end">
        <div className="w-full max-w-md xl:max-w-none xl:w-full">
          <img
            src="/c2.png"
            alt="Contact"
            className="w-full h-auto rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
