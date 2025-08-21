function Services() {
  return (
    <>
      <section id="service">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 section-heading">
              <h2 className="text-uppercase wow fadeTop" data-wow-delay="0.1s">
                Our Services
              </h2>
              <h4
                className="text-uppercase source-font wow fadeTop"
                data-wow-delay="0.2s"
              >
                - Design your presence -
              </h4>
            </div>
          </div>
          <div className="row mt-50">
            <div
              className="col-md-3 feature-box text-center col-sm-6 wow fadeTop"
              data-wow-delay="0.1s"
            >
              <i className="mdi mdi-emby font-40px dark-icon white-bg-icon circle-icon fade-icon" />
              <h4 className="upper-case">Web Design</h4>
              <p>
                Designing a good website that accommodates a lot of content is a
                tricky balancing act to pull off.
              </p>
            </div>
            <div
              className="col-md-3 feature-box text-center col-sm-6 wow fadeTop"
              data-wow-delay="0.2s"
            >
              <i className="mdi mdi-qrcode font-40px dark-icon white-bg-icon circle-icon fade-icon" />
              <h4 className="upper-case">App Development</h4>
              <p>
                We build mobile apps for the conference, integrating unique
                content and branding to create.
              </p>
            </div>
            <div
              className="col-md-3 feature-box text-center col-sm-6 wow fadeTop"
              data-wow-delay="0.3s"
            >
              <i className="mdi mdi-diamond font-40px dark-icon white-bg-icon circle-icon fade-icon" />
              <h4 className="upper-case">Digital Marketing</h4>
              <p>
                Google has made this important since 1998 when it launched.
                Content became, and still is king since websites.
              </p>
            </div>
            <div
              className="col-md-3 feature-box text-center col-sm-6 wow fadeTop"
              data-wow-delay="0.4s"
            >
              <i className="mdi mdi-cat font-40px dark-icon white-bg-icon circle-icon fade-icon" />
              <h4 className="upper-case">UI / UX Friendly</h4>
              <p>
                UX design refers to the term user experience design, while UI
                design stands for user interface design.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
