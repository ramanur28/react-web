import "../style/footer.css";

const Footer = () => {
  return (
    <div className="container-fluid footer">
      <div className="brand">
        <h2 className="title">Ramadhani</h2>
      </div>
      <div className="links">
        <a href="#" className="link">
          Home
        </a>
        <a href="#" className="link">
          About
        </a>
        <a href="#" className="link">
          Contact
        </a>
      </div>
      <hr />
      <p className="text-center">copyright by @ramadhani | 2023 Indonesia</p>
    </div>
  );
};

export default Footer;
