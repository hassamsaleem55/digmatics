import Slider from "react-slick";

function Work() {
  const settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "0",
  };
  return (
    <>
      <section className="pt-0 pb-0 white-bg" id="work">
        <div className="container-fluid">
          <div className="row">
            <div className="portfolio-container text-center">
              <ul
                id="portfolio-filter"
                className="list-inline wow fadeTop"
                data-wow-delay="0.1s"
              >
                <li className="active" data-group="all">
                  All
                </li>
                <li data-group="design">Design</li>
                <li data-group="web">Web</li>
                <li data-group="branding">Branding</li>
                <li data-group="print">Print</li>
              </ul>
              <ul id="portfolio-grid" className="three-column hover-two">
                <li
                  className="portfolio-item wow fadeIn"
                  data-wow-delay="0.1s"
                  data-groups='["all", "print", "branding"]'
                >
                  <div className="portfolio gallery-image-hover">
                    <div className="dark-overlay" />
                    <img src="assets/images/portfolio/grid/1.jpg" alt="" />
                    <div className="portfolio-wrap">
                      <div className="portfolio-description">
                        <h3 className="portfolio-title">Business Cards</h3>
                        <a href="single-portfolio.html" className="links">
                          Print Design
                        </a>
                      </div>
                      {/*=== /.project-info ===*/}
                      <ul className="portfolio-details">
                        <li>
                          <a
                            className="alpha-lightbox"
                            href="assets/images/portfolio/grid/1.jpg"
                          >
                            <i className="fa fa-search" />
                          </a>
                        </li>
                        <li>
                          <a href="single-portfolio.html">
                            <i className="fa fa-link" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/*=== /.portfolio ===*/}
                </li>
                <li
                  className="portfolio-item wow fadeIn"
                  data-wow-delay="0.2s"
                  data-groups='["all", "branding", "web"]'
                >
                  <div className="portfolio gallery-image-hover">
                    <div className="dark-overlay" />
                    <img src="assets/images/portfolio/grid/2.jpg" alt="" />
                    <div className="portfolio-wrap">
                      <div className="portfolio-description">
                        <h3 className="portfolio-title">Magazine</h3>
                        <a href="single-portfolio.html" className="links">
                          Branding
                        </a>
                      </div>
                      {/*=== /.project-info ===*/}
                      <ul className="portfolio-details">
                        <li>
                          <a
                            className="alpha-lightbox"
                            href="assets/images/portfolio/grid/2.jpg"
                          >
                            <i className="fa fa-search" />
                          </a>
                        </li>
                        <li>
                          <a href="single-portfolio.html">
                            <i className="fa fa-link" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/*=== /.portfolio ===*/}
                </li>
                <li
                  className="portfolio-item wow fadeIn"
                  data-wow-delay="0.3s"
                  data-groups='["all", "branding"]'
                >
                  <div className="portfolio gallery-image-hover">
                    <div className="dark-overlay" />
                    <img src="assets/images/portfolio/grid/3.jpg" alt="" />
                    <div className="portfolio-wrap">
                      <div className="portfolio-description">
                        <h3 className="portfolio-title">Rabycad CD Design</h3>
                        <a href="single-portfolio.html" className="links">
                          Branding
                        </a>
                      </div>
                      {/*=== /.project-info ===*/}
                      <ul className="portfolio-details">
                        <li>
                          <a
                            className="alpha-lightbox"
                            href="assets/images/portfolio/grid/3.jpg"
                          >
                            <i className="fa fa-search" />
                          </a>
                        </li>
                        <li>
                          <a href="single-portfolio.html">
                            <i className="fa fa-link" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/*=== /.portfolio ===*/}
                </li>
                <li
                  className="portfolio-item wow fadeIn"
                  data-wow-delay="0.4s"
                  data-groups='["all", "print", "design"]'
                >
                  <div className="portfolio gallery-image-hover">
                    <div className="dark-overlay" />
                    <img src="assets/images/portfolio/grid/4.jpg" alt="" />
                    <div className="portfolio-wrap">
                      <div className="portfolio-description">
                        <h3 className="portfolio-title">Micro Chips</h3>
                        <a href="single-portfolio.html" className="links">
                          Web Design
                        </a>
                      </div>
                      {/*=== /.project-info ===*/}
                      <ul className="portfolio-details">
                        <li>
                          <a
                            className="alpha-lightbox"
                            href="assets/images/portfolio/grid/4.jpg"
                          >
                            <i className="fa fa-search" />
                          </a>
                        </li>
                        <li>
                          <a href="single-portfolio.html">
                            <i className="fa fa-link" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/*=== /.portfolio ===*/}
                </li>
                <li
                  className="portfolio-item wow fadeIn"
                  data-wow-delay="0.5s"
                  data-groups='["all", "design"]'
                >
                  <div className="portfolio gallery-image-hover">
                    <div className="dark-overlay" />
                    <img src="assets/images/portfolio/grid/5.jpg" alt="" />
                    <div className="portfolio-wrap">
                      <div className="portfolio-description">
                        <h3 className="portfolio-title">Flyer</h3>
                        <a href="single-portfolio.html" className="links">
                          Print Design
                        </a>
                      </div>
                      {/*=== /.project-info ===*/}
                      <ul className="portfolio-details">
                        <li>
                          <a
                            className="alpha-lightbox"
                            href="assets/images/portfolio/grid/5.jpg"
                          >
                            <i className="fa fa-search" />
                          </a>
                        </li>
                        <li>
                          <a href="single-portfolio.html">
                            <i className="fa fa-link" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/*=== /.portfolio ===*/}
                </li>
                <li
                  className="portfolio-item wow fadeIn"
                  data-wow-delay="0.6s"
                  data-groups='["all", "design", "web"]'
                >
                  <div className="portfolio gallery-image-hover">
                    <div className="dark-overlay" />
                    <img src="assets/images/portfolio/grid/6.jpg" alt="" />
                    <div className="portfolio-wrap">
                      <div className="portfolio-description">
                        <h3 className="portfolio-title">Flat Web Design</h3>
                        <a href="single-portfolio.html" className="links">
                          Web Design
                        </a>
                      </div>
                      {/*=== /.project-info ===*/}
                      <ul className="portfolio-details">
                        <li>
                          <a
                            className="alpha-lightbox"
                            href="assets/images/portfolio/grid/6.jpg"
                          >
                            <i className="fa fa-search" />
                          </a>
                        </li>
                        <li>
                          <a href="single-portfolio.html">
                            <i className="fa fa-link" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/*=== /.portfolio ===*/}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="dark-bg pt-80 pb-80">
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-md-3 counter text-center col-sm-6 wow fadeTop"
              data-wow-delay="0.1s"
            >
              <i className="mdi mdi-clock blue-icon font-30px" />
              <h2 className="count white-color font-700">5600</h2>
              <h3>Working Hours</h3>
            </div>
            <div
              className="col-md-3 counter text-center col-sm-6 wow fadeTop"
              data-wow-delay="0.2s"
            >
              <i className="mdi mdi-emoticon blue-icon font-30px" />
              <h2 className="count white-color font-700">220</h2>
              <h3>Happy Clients</h3>
            </div>
            <div
              className="col-md-3 counter text-center col-sm-6 wow fadeTop"
              data-wow-delay="0.3s"
            >
              <i className="mdi mdi-trophy-variant blue-icon font-30px" />
              <h2 className="count white-color font-700">108</h2>
              <h3>Awwwards</h3>
            </div>
            <div
              className="col-md-3 counter text-center col-sm-6 wow fadeTop"
              data-wow-delay="0.4s"
            >
              <i className="mdi mdi-cup blue-icon font-30px" />
              <h2 className="count white-color font-700">650</h2>
              <h3>Projects a Year</h3>
            </div>
          </div>
        </div>
      </section>
      <section className="grey-bg">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 section-heading">
              <h2 className="text-uppercase wow fadeTop" data-wow-delay="0.1s">
                Testimonials
              </h2>
              <h4
                className="text-uppercase source-font wow fadeTop"
                data-wow-delay="0.2s"
              >
                - Statisfy Clients -
              </h4>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="slick testimonial">
                <Slider {...settings}>
                  {/*=== Slide ===*/}
                  <div className="testimonial-item">
                    <div className="testimonial-content">
                      <img
                        className="img-responsive img-circle"
                        src="assets/images/team/avatar-1.jpg"
                        alt="avatar-1"
                      />
                      <h5>Hank Dano</h5>
                      <p>Founder &amp; CEO of Arcon </p>
                      <h4>
                        Quisque hendrerit turpis sit amet tortor condimentum,
                        nec commodo lorem condimentum. Sed id diam efficitur,
                        mattis tellus ac, malesuada purus. In ultrices nisl sed
                        eleifend consequat.
                      </h4>
                    </div>
                  </div>
                  {/*=== Slide ===*/}
                  <div className="testimonial-item">
                    <div className="testimonial-content">
                      <img
                        className="img-responsive img-circle"
                        src="assets/images/team/avatar-2.jpg"
                        alt="avatar-1"
                      />
                      <h5>Julia Banks</h5>
                      <p>CEO of Arcon</p>
                      <h4>
                        Quisque hendrerit turpis sit amet tortor condimentum,
                        nec commodo lorem condimentum. Sed id diam efficitur,
                        mattis tellus ac, malesuada purus. In ultrices nisl sed
                        eleifend consequat.
                      </h4>
                    </div>
                  </div>
                  {/*=== Slide ===*/}
                  <div className="testimonial-item">
                    <div className="testimonial-content">
                      <img
                        className="img-responsive img-circle"
                        src="assets/images/team/avatar-3.jpg"
                        alt="avatar-1"
                      />
                      <h5>Mark Smith</h5>
                      <p>CEO of Arcon</p>
                      <h4>
                        Quisque hendrerit turpis sit amet tortor condimentum,
                        nec commodo lorem condimentum. Sed id diam efficitur,
                        mattis tellus ac, malesuada purus. In ultrices nisl sed
                        eleifend consequat.
                      </h4>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Work;
