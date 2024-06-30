import PageBanner from "@/components/PageBanner";
import Layout from "@/layout";
import { JeenaAccordion2 } from "@/src/components/JeenaAccordion";
import Link from "next/link";

const ServiceDetails = () => {
  const accordionData = [
    { id: 1, title: "Why Get Our IT Services ?" },
    { id: 2, title: "BestTeam Member Provider ?" },
    { id: 3, title: "Leanr About Our Company ?" },
    { id: 4, title: "Payment Method ?" },
  ];
  return (
    <Layout>
      <PageBanner pageName={"Service Details"} />
      <section className="service-details-area pt-130 rpt-100 pb-115 rpb-85">
        <div className="container">
          <div className="row gap-100">
            <div className="col-lg-8">
              <div className="service-details-content">
                <div className="section-title mb-30">
                  <h2>Web Design &amp; Development</h2>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudtium totam rem aperiam, eaque ipsa
                  quae ab illo inventore veritatis quasi architecto beatae vitae
                  dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                  sit aspernatur aut odit au fugit sed quia consequuntur magni
                  dolores eos qui ratione voluptatem sequi nesciunt. Neque
                  quisquam est, qui dolorem ipsum quia dolor sit amet,
                  consectetur, adipisci velit, sed quia non numquam eius modi
                  tempora incidunt ut labore et dolore magnam aliquam quaerat
                  voluptatem. Ut ene minima veniam, quis nostrum exercitationem
                  ullam corporis suscipit laboriosam aliquid exea commodi
                  consequatur
                </p>
                <div className="image my-40 wow fadeInUp delay-0-2s">
                  <img
                    src="assets/images/services/service-details.jpg"
                    alt="Service Details"
                  />
                </div>
                <div className="row">
                  <div className="col-md-6 mb-30 wow fadeInRight delay-0-2s">
                    <h3>We Provide Best IT Services to Growth you Business</h3>
                  </div>
                  <div className="col-md-6 mb-30 wow fadeInLeft delay-0-2s">
                    <ul className="list-style-one">
                      <li>Comprehensive UI/UX Assessment</li>
                      <li>Deep Contextual Research &amp; Planning</li>
                      <li>Wireframing &amp; Prototyping</li>
                    </ul>
                  </div>
                </div>
                <div className="row pb-30">
                  <div className="col-md-6 mb-30 wow fadeInLeft delay-0-2s">
                    <p>
                      Aperiam eaque ipsa quae ab illo inventore veritatis quasi
                      architecto beatae vitae dicta sunt explicabo. Nemo enim
                      ipsam voluptatem quia voluptas sit aspernatur aut odit au
                      fugit sed quia consequuntur magni dolores eos qui ratione
                      voluptatem sequi nesciunt. Neque quisquam est, qui dolorem
                      ipsum quia dolor sit amet, consectetur, adipisci velit,
                      sed quia non numquam eius modi tempora incidunt ut labore
                      et dolore magnam aliquam quaerat voluptatem minima
                      veniamla
                    </p>
                  </div>
                  <div className="col-md-6 mb-30 wow fadeInRight delay-0-2s">
                    <div className="image">
                      <img
                        src="assets/images/services/service-middle.jpg"
                        alt="Service"
                      />
                    </div>
                  </div>
                </div>
                <h3>Service Management</h3>
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit au fugit sed quia consequun tur magni dolores eos qui
                  ratione voluptatem sequi nesciunt. Neque quisquam est, qui
                  dolorem epsum quia dolor sit amet, consectetur, adipisci
                  velit, sed quia non numquam eius modi tempora sncidunt ut
                  labore et dolore magnam aliquam quaerat voluptatem.
                </p>
                <div
                  className="faq-accordion pt-20 wow fadeInUp delay-0-2s"
                  id="faq-accordion"
                >
                  <JeenaAccordion2 accordionsData={accordionData} />
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="service-sidebar">
                <div className="widget widget-category wow fadeInUp delay-0-2s">
                  <h4 className="widget-title">Services Category</h4>
                  <ul>
                    <li>
                      <Link legacyBehavior href="services">
                        IT Consulting
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="services">
                        Product Design
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="services">
                        Web Design
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="services">
                        SEO Optimization
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="services">
                        Web Development
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="services">
                        UI/UX Strategy
                      </Link>
                    </li>
                  </ul>
                </div>
                <div
                  className="widget widget-cta"
                  style={{
                    backgroundImage:
                      "url(assets/images/widgets/cta-widget-bg.jpg)",
                  }}
                >
                  <span className="h5">Let's Work Together</span>
                  <h2>IT Service Agency</h2>
                  <Link legacyBehavior href="/contact">
                    <a className="theme-btn style-four">
                      Contact Us <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                  <br />
                  <a href="callto:+000(123)45688" className="number">
                    <i className="fas fa-phone" /> +000 (123) 456 88
                  </a>
                  <img
                    className="bg-shape"
                    src="assets/images/widgets/cta-bg-lines.png"
                    alt="Shape"
                  />
                </div>
                <div className="widget widget-download wow fadeInUp delay-0-2s">
                  <h4 className="widget-title">Download</h4>
                  <ul>
                    <li>
                      <a href="#">
                        Download pdf <i className="far fa-file-pdf" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Download doc <i className="far fa-file-word" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service Details Area end */}
      {/* Next Prev Service start */}
      <div className="next-prev-service pb-80 rpb-50">
        <div className="container">
          <hr />
          <div className="next-prev-service mt-80">
            <div className="next-prev-item wow fadeInLeft delay-0-2s">
              <div className="image">
                <img
                  src="assets/images/services/service-prev.jpg"
                  alt="Service"
                />
              </div>
              <div className="content">
                <h4>
                  <Link legacyBehavior href="service-details">
                    Product Engineering
                  </Link>
                </h4>
                <Link legacyBehavior href="/service-details">
                  <a className="read-more">
                    Read More <i className="fal fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>
            <Link legacyBehavior href="/services2">
              <a className="show-all" />
            </Link>
            <div className="next-prev-item wow fadeInRight delay-0-2s">
              <div className="content">
                <h4>
                  <Link legacyBehavior href="service-details">
                    Cyber Security
                  </Link>
                </h4>
                <Link legacyBehavior href="/service-details">
                  <a className="read-more">
                    Read More <i className="fal fa-angle-double-right" />
                  </a>
                </Link>
              </div>
              <div className="image">
                <img
                  src="assets/images/services/service-next.jpg"
                  alt="Service"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default ServiceDetails;
