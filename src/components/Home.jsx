import { useEffect } from "react";
function Home() {
  useEffect(() => {
    $(".slider-bg").flexslider({
      animation: "fade",
      slideshow: true,
      controlNav: true,
      keyboard: true,
    });
  }, []);
  return (
    <section className="pt-0 pb-0" id="home">
      <div className="slider-bg flexslider">
        <ul className="slides">
          <li>
            <div
              className="slide-img"
              style={{
                background:
                  "url(assets/images/slides/home-bg-26.jpg) center center / cover scroll no-repeat",
              }}
              data-stellar-background-ratio="0.2"
            />
            <div className="hero-text-wrap">
              <div className="hero-text white-color">
                <div className="container text-center">
                  <h2 className="text-uppercase font-400 source-font">
                    Everything is Design
                  </h2>
                  <h1 className="text-uppercase font-700">Everything</h1>
                  <h3 className="font-400">
                    Good design is obvious. Great design is transparent.
                  </h3>
                  <p className="text-center mt-30">
                    <a className="btn btn-color btn-circle btn-animate">
                      <span>
                        Know More <i className="mdi mdi-arrow-right" />
                      </span>
                    </a>
                    <a className="btn btn-outline-white btn-circle">
                      Contact Us
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div
              className="slide-img"
              style={{
                background:
                  "url(assets/images/slides/home-bg-27.jpg) center center / cover scroll no-repeat",
              }}
              data-stellar-background-ratio="0.2"
            />
            <div className="hero-text-wrap">
              <div className="hero-text white-color">
                <div className="container text-center">
                  <h2 className="text-uppercase font-400 source-font">
                    It’s a piece of cake
                  </h2>
                  <h1 className="text-uppercase font-700">Digmatics</h1>
                  <p className="text-center mt-30">
                    <a className="btn btn-color btn-circle btn-animate">
                      <span>
                        Learn More <i className="mdi mdi-arrow-right" />
                      </span>
                    </a>
                    <a className="btn btn-outline-white btn-circle">
                      Our Services
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Home;
