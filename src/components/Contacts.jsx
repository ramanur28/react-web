import "../style/contact.css";

const Contact = () => {
  return (
    <div className="container-fluid contact mb-4" id="contact">
      <h2 className="title">Contacts</h2>
      <div className="contacts">
        <a
          href="https://instagram.com/ramadhani.28_"
          className="contact-icon"
          target="_blank"
        >
          <i className="bi bi-instagram"></i>
        </a>
        <a
          href="https://twitter.com/Ramanur28"
          className="contact-icon"
          target="_blank"
        >
          <i className="bi bi-twitter"></i>
        </a>
        <a
          href="https://github.com/ramanur28"
          className="contact-icon"
          target="_blank"
        >
          <i className="bi bi-github"></i>
        </a>
        <a
          href="mailto:ramanur321@gmail.com"
          className="contact-icon"
          target="_blank"
        >
          <i className="bi bi-envelope"></i>
        </a>
        <a
          href="https://wa.me/062895402091035"
          className="contact-icon"
          target="_blank"
        >
          <i className="bi bi-whatsapp"></i>
        </a>
      </div>
    </div>
  );
};

export default Contact;
