import { Link } from "react-scroll";

function Navbar(props) {
  return (
    <nav
      className={`navbar-scrollspy navbar navbar-default navbar-fixed white bootsnav on no-full ${
        props.isScrolled ? "" : "navbar-transparent"
      }`}
      data-minus-value-desktop={70}
      data-minus-value-mobile={55}
      data-speed={1000}
    >
      <div className="container">
        <div className="attr-nav">
          <ul className="social-media-dark social-top">
            <li>
              <a href="#" className="fa fa-facebook" />
            </li>
            <li>
              <a href="#" className="fa fa-twitter" />
            </li>
            <li>
              <a href="#" className="fa fa-linkedin-square" />
            </li>
          </ul>
        </div>
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target="#navbar-menu"
          >
            <i className="fa fa-bars" />
          </button>
          <div className="logo nav-link">
            <Link to="home" smooth={true} duration={500}>
              <img
                className="logo logo-display"
                src="assets/images/logo-white.png"
                alt=""
              />
              <img
                className="logo logo-scrolled"
                src="assets/images/logo-black.png"
                alt=""
              />
            </Link>
          </div>
        </div>
        <div
          className="navbar-collapse collapse"
          id="navbar-menu"
          aria-expanded="false"
        >
          <ul
            className="nav navbar-nav navbar-right nav-scrollspy-onepage"
            data-in="fadeInLeft"
          >
            <li
              className={
                props.activeSection === "home"
                  ? "nav-link scroll active"
                  : "nav-link scroll"
              }
            >
              <Link to="home" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li
              className={
                props.activeSection === "about"
                  ? "nav-link scroll active"
                  : "nav-link scroll"
              }
            >
              <Link to="about" smooth={true} duration={500}>
                About
              </Link>
            </li>
            <li
              className={
                props.activeSection === "service"
                  ? "nav-link scroll active"
                  : "nav-link scroll"
              }
            >
              <Link to="service" smooth={true} duration={500}>
                Services
              </Link>
            </li>
            <li
              className={
                props.activeSection === "team"
                  ? "nav-link scroll active"
                  : "nav-link scroll"
              }
            >
              <Link to="team" smooth={true} duration={500}>
                Team
              </Link>
            </li>
            <li
              className={
                props.activeSection === "work"
                  ? "nav-link scroll active"
                  : "nav-link scroll"
              }
            >
              <Link to="work" smooth={true} duration={500}>
                Work
              </Link>
            </li>
            <li
              className={
                props.activeSection === "pricing"
                  ? "nav-link scroll active"
                  : "nav-link scroll"
              }
            >
              <Link to="pricing" smooth={true} duration={500}>
                Pricing
              </Link>
            </li>
            <li
              className={
                props.activeSection === "contact"
                  ? "nav-link scroll active"
                  : "nav-link scroll"
              }
            >
              <Link to="contact" smooth={true} duration={500}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
