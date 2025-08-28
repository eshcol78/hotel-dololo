import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-title">
          <h2>Contact Us</h2>
          <p>Get in touch with us for reservations and inquiries</p>
        </div>
        <div className="contact-container">
          <div className="contact-info">
            <h3>Hotel Dololo</h3>
            <div className="contact-details">
              <p>📍 Menahriya Bocho Bore, Jimma, Ethiopia</p>
              <p>📞 +251 XXX XXX XXX</p>
              <p>✉️ info@hoteldololo.com</p>
            </div>
          </div>
          <div className="contact-form">
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" required></textarea>
              </div>
              <button type="submit" className="btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
