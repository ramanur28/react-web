import "../style/jumbotron.css";

const Jumbotron = () => {
  return (
    <div className=" container-fluid jumbotron p-4 mb-4" id="home">
      <h1 className="title">
        Pouring heart, soul, and code into a complete website
      </h1>
      <p className="lead">
        My name is Ramadhani, I'm a full-stack web developer specialize in
        javascript and MERN stack technology.
      </p>
      <a href="/contacts" className="btn btn-outline-light">
        Contact Me
      </a>
    </div>
  );
};

export default Jumbotron;
