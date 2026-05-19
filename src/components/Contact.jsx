import { useState } from "react";
import "../styles/Contact.css";

export default function Contact() {
  const [form, setFrom] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      alert(
        `Message sent succesfully!\n\nThank you, ${form.name}! I'will get back to you at ${form.email} within 24 hours`,
      );
      setFrom({ name: "", email: "", message: "" });
      setSending(false);
    }, 1500);
  };

  return (
    <section className="section" id="contact">
      <div className="section-header">
        <span className="section-tag">Get In Touch</span>
        <h2 className="section-title">let's work together</h2>
        <div className="section-line"></div>
      </div>

      {/* Contact info */}
      <div className="contact-wrapper">
        <div className="contact-info">
          <h3>Have an opportunity for me?</h3>
          <p>
            I’m actively looking for internship or entry-level job opportunities
            where I can learn, grow, and apply my skills in real-world projects.
          </p>
          <p>
            If you think I’d be a good fit for your team, feel free to reach out
            through the form or any of the channels below.
          </p>
          <div className="contact-detail">
            <div className="contact-icon">📧</div>{" "}
            mohammadalamansari00@gmail.com
          </div>
          <div className="contact-detail">
            <div className="contact-icon">📍</div>Sultanpur, Uttar Pradesh,
            India.
          </div>
          <div className="contact-detail">
            <div className="contact-icon">💼</div> Available for freelance
          </div>
        </div>

        <form action="" className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Enter Full Name</label>
            <input
              type="text"
              name=""
              id="name"
              placeholder="Ex- Alam Ansari"
              required
              value={form.name}
              onChange={(e) => setFrom({ ...form, name: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Enter your Email Address</label>
            <input
              type="email"
              name=""
              id="email"
              placeholder="alam@example.com"
              required
              value={form.email}
              onChange={(e) => setFrom({ ...form, email: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              placeholder="Have an opportunity for me?"
              required
              value={form.message}
              onChange={(e) => setFrom({ ...form, message: e.target.value })}
            />
          </div>
          <button type="submit" className="form-submit" disabled={sending}>
            {sending ? "⏳ Sending..." : "📨 Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
