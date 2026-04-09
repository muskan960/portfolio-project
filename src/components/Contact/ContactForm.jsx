import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        "service_l4kctne", "template_rm65lid", formRef.current, "jg2CjGZhE-AEhztwY"
      )
      .then(
        () => {
          alert("Message sent successfully 💛");
          formRef.current.reset();
        },
        (error) => {
          alert("Failed to send message ❌");
          console.error(error);
        }
      );
  };

  return (
    <section className="w-full py-28 px-6 bg-gradient-to-br from-[#0b0b16] via-[#0f0f24] to-[#05050c] text-white">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <p className="text-center text-sm tracking-widest text-[#e9c46b]/80 mb-3 uppercase">
          Let’s Work Together
        </p>

        <h2 className="text-5xl font-bold text-center mb-16 text-[#e9c46b]">
          Contact Me
        </h2>

        {/* Form */}
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="bg-gradient-to-br from-[#1f1f25] to-[#0b0b12] border border-[#e9c46b]/30 rounded-3xl p-10 shadow-[0_15px_35px_rgba(233,196,107,0.2)] space-y-6 transition-transform duration-300 hover:scale-[1.02]"
        >

          {/* Name */}
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full bg-transparent border border-[#e9c46b]/40 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#e9c46b] text-white placeholder:text-[#e9c46b]/70 transition-all"
          />

          {/* Email */}
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full bg-transparent border border-[#e9c46b]/40 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#e9c46b] text-white placeholder:text-[#e9c46b]/70 transition-all"
          />

          {/* Message */}
          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            required
            className="w-full bg-transparent border border-[#e9c46b]/40 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#e9c46b] text-white placeholder:text-[#e9c46b]/70 transition-all"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#e9c46b] text-black font-semibold py-4 rounded-xl hover:scale-[1.03] transition-all duration-300 shadow-lg"
          >
            Send Message
          </button>

        </form>
      </div>
    </section>
  );
};

export default ContactForm;