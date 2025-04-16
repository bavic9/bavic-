import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

 

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Jagadeesh Koyya",
          from_email: form.email,
          to_email: "jagadeesh10th@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert(
            "Thank you for your message. I will get back to you as soon as possible."
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
    <div
      className={`lg:my-12 flex lg:flex-row flex-col-reverse justify-around m-auto gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] p-8 pb-16 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-4 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-text font-medium mb-1">_name:</span>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              // placeholder="What's your good name?"
              className="bg-deepBlue border border-text py-4 px-6 placeholder:text-secondary text-text rounded-lg outline-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-text font-medium mb-1">_email:</span>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              // placeholder="What's your web address?"
              className="bg-deepBlue border border-text py-4 px-6 placeholder:text-secondary text-text rounded-lg outline-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-text font-medium mb-1">_message:</span>
            <textarea
              rows={5}
              name="message"
              required
              value={form.message}
              onChange={handleChange}
              // placeholder="What you want to say?"
              className="bg-deepBlue border border-text py-4 px-6 placeholder:text-secondary text-text rounded-lg outline-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-text border border-text transition ease-in-out duration-500 hover:bg-deepBlue hover:text-text py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="lg:flex-1 lg:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");