import PageBanner from "@/components/PageBanner";
import Layout from "@/layout";
import JeenaAccordion from "@/src/components/JeenaAccordion";
import { Nav, Tab } from "react-bootstrap";
const Faq = () => {
  return (
    <Layout>
      <PageBanner pageName={"FAQs"} />
      <section className="faq-page-area pt-130 rpt-100 rel z-1">
        <div className="container">
          <div className="section-title mb-45">
            <span className="sub-title mb-15">Faqs</span>
            <h2>Frequently Asked Questions</h2>
          </div>
          <Tab.Container defaultActiveKey={"faq-tab1"}>
            <Nav as="ul" className="nav tab-style-one mb-35">
              <li className="nav-item">
                <Nav.Link
                  as="a"
                  className="nav-link"
                  data-bs-toggle="tab"
                  href="#faq-tab1"
                  eventKey="faq-tab1"
                >
                  General
                </Nav.Link>
              </li>
              <li className="nav-item">
                <Nav.Link
                  as="a"
                  className="nav-link"
                  data-bs-toggle="tab"
                  href="#faq-tab2"
                  eventKey="faq-tab2"
                >
                  IT Consulting
                </Nav.Link>
              </li>
              <li className="nav-item">
                <Nav.Link
                  as="a"
                  className="nav-link"
                  data-bs-toggle="tab"
                  href="#faq-tab3"
                  eventKey="faq-tab3"
                >
                  Package
                </Nav.Link>
              </li>
              <li className="nav-item">
                <Nav.Link
                  as="a"
                  className="nav-link"
                  data-bs-toggle="tab"
                  href="#faq-tab4"
                  eventKey="faq-tab4"
                >
                  Services
                </Nav.Link>
              </li>
              <li className="nav-item">
                <Nav.Link
                  as="a"
                  className="nav-link"
                  data-bs-toggle="tab"
                  href="#faq-tab5"
                  eventKey="faq-tab5"
                >
                  Privacy
                </Nav.Link>
              </li>
              <li className="nav-item">
                <Nav.Link
                  as="a"
                  className="nav-link"
                  data-bs-toggle="tab"
                  href="#faq-tab6"
                  eventKey="faq-tab6"
                >
                  Customer
                </Nav.Link>
              </li>
              <li className="nav-item">
                <Nav.Link
                  as="a"
                  className="nav-link"
                  data-bs-toggle="tab"
                  href="#faq-tab7"
                  eventKey="faq-tab7"
                >
                  Shop
                </Nav.Link>
              </li>
              <li className="nav-item">
                <Nav.Link
                  as="a"
                  className="nav-link"
                  data-bs-toggle="tab"
                  href="#faq-tab8"
                  eventKey="faq-tab8"
                >
                  Payments
                </Nav.Link>
              </li>
            </Nav>
            <Tab.Content
              className="tab-content faq-accordion style-three"
              id="faq-accordion"
            >
              <Tab.Pane className="tab-pane fade" eventKey="faq-tab1">
                <JeenaAccordion
                  accordions={[1, 2, 3, 4, 5, 6, 7, 8]}
                  defaultActive={2}
                />
              </Tab.Pane>
              <Tab.Pane className="tab-pane fade" eventKey="faq-tab2">
                <JeenaAccordion accordions={[1, 7, 8]} defaultActive={2} />
              </Tab.Pane>
              <Tab.Pane className="tab-pane fade" eventKey="faq-tab3">
                <JeenaAccordion accordions={[1, 2, 3]} defaultActive={2} />
              </Tab.Pane>
              <Tab.Pane className="tab-pane fade" eventKey="faq-tab4">
                <JeenaAccordion accordions={[6, 7, 8]} defaultActive={6} />
              </Tab.Pane>
              <Tab.Pane className="tab-pane fade" eventKey="faq-tab5">
                <JeenaAccordion accordions={[1, 2, 8]} defaultActive={8} />
              </Tab.Pane>
              <Tab.Pane className="tab-pane fade" eventKey="faq-tab6">
                <JeenaAccordion accordions={[1, 2, 3]} defaultActive={3} />
              </Tab.Pane>
              <Tab.Pane className="tab-pane fade" eventKey="faq-tab7">
                <JeenaAccordion accordions={[1, 7, 8]} defaultActive={1} />
              </Tab.Pane>
              <Tab.Pane className="tab-pane fade" eventKey="faq-tab8">
                <JeenaAccordion accordions={[6, 7, 8]} defaultActive={6} />
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </section>
      {/* FAQs Area end */}
      {/* Contact Form Section Start */}
      <section className="contact-form-area py-130 rpy-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="contact-form bg-white p-80 rmb-55 wow fadeInRight delay-0-2s">
                <div className="section-title mb-30">
                  <h3>Get In Touch With Us</h3>
                </div>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="form-style-one"
                  action="#"
                  name="contact-form"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="form-control"
                          defaultValue=""
                          placeholder="Full name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="phone"
                          name="phone"
                          className="form-control"
                          defaultValue=""
                          placeholder="Phone Number"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          type="email"
                          id="emailid"
                          name="email"
                          className="form-control"
                          defaultValue=""
                          placeholder="Email"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <textarea
                          name="message"
                          id="message"
                          className="form-control"
                          rows={3}
                          placeholder="Message"
                          required
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="form-group mb-0">
                        <button
                          type="submit"
                          className="theme-btn style-two mt-15 w-100"
                        >
                          send message <i className="far fa-long-arrow-right" />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-right-image wow fadeInLeft delay-0-2s">
                <img src="assets/images/about/faq-page.png" alt="FAQs" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Faq;
