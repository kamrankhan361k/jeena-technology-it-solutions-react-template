import PageBanner from "@/components/PageBanner";
import Layout from "@/layout";
import { JeenaAccordion2 } from "@/src/components/JeenaAccordion";
import ProgressBar from "@/src/components/ProgressBar";
import Link from "next/link";

const Team = () => {
  const accordionData = [
    { id: 1, title: "UX Principles Embedded Systems ?" },
    { id: 2, title: "Charity Conference Future Of Tech?" },
    { id: 3, title: "Simplify Your Color Palette With CSS ?" },
    { id: 4, title: "Build A Group Chat App With Vanilla JS ?" },
  ];
  return (
    <Layout>
      <PageBanner pageName={"Team Member"} pageTitle="Amazing Team" />
      <section className="team-top-area pt-75 rpt-45 rel z-2">
        <div className="container">
          <div className="row gap-80 align-items-center">
            <div className="col-xl-7 col-lg-6">
              <div className="team-top-video mt-55 wow fadeInRight delay-0-2s">
                <img src="assets/images/team/team-page.jpg" alt="Team Page" />
                <a
                  href="https://www.youtube.com/watch?v=9Y7ma241N8k"
                  className="mfp-iframe video-play"
                >
                  <i className="fas fa-play" />
                </a>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="team-top-content mt-55 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-30">
                  <span className="sub-title mb-15">Dedicated Team Member</span>
                  <h2>Our Team is Driven for your Success</h2>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error voluptatem
                  accue antium doloremque laudantium totam rem aperiam eaque
                  epsaus inventore veritatis architecto beatae dicta explicabo.
                </p>
                <div className="team-circle-progress mt-35">
                  <div className="circle-progress-counter">
                    <ProgressBar
                      value={89}
                      color="#674df3"
                      emptyFill={"#e8e4fd"}
                      withoutCounter
                    />
                  </div>
                  <div className="content">
                    <h4>Clients Satisfaction</h4>
                    <p>
                      On the other hand denounce with righteous indig nation and
                      dislike men beguiled demoralize
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Team Top Area end */}
      {/* Team Area start */}
      <section className="team-page-area py-130 rpy-100 rel z-1">
        <div className="container">
          <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
            <span className="sub-title mb-15">Team Member</span>
            <h2>Amazing Team Members</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="team-member style-two wow fadeInUp delay-0-2s">
                <img src="assets/images/team/member1.jpg" alt="Team" />
                <h4>Johnathan P. Bailey</h4>
                <span className="designation">UX/UI Designer</span>
                <div className="social-style-two">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="team-member style-two wow fadeInUp delay-0-4s">
                <img src="assets/images/team/member2.jpg" alt="Team" />
                <h4>Mark M. Hughes</h4>
                <span className="designation">Web Developer</span>
                <div className="social-style-two">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="team-member style-two wow fadeInUp delay-0-6s">
                <img src="assets/images/team/member3.jpg" alt="Team" />
                <h4>Donald B. Mitchell</h4>
                <span className="designation">Software Engineer</span>
                <div className="social-style-two">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="team-member style-two wow fadeInUp delay-0-8s">
                <img src="assets/images/team/member4.jpg" alt="Team" />
                <h4>Bennie N. Bannister</h4>
                <span className="designation">Senior Consultant</span>
                <div className="social-style-two">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="team-member style-two wow fadeInUp delay-0-2s">
                <img src="assets/images/team/member5.jpg" alt="Team" />
                <h4>Federico M. Upton</h4>
                <span className="designation">UX/UI Designer</span>
                <div className="social-style-two">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="team-member style-two wow fadeInUp delay-0-4s">
                <img src="assets/images/team/member6.jpg" alt="Team" />
                <h4>Julio M. McDowell</h4>
                <span className="designation">Web Developer</span>
                <div className="social-style-two">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="team-member style-two wow fadeInUp delay-0-6s">
                <img src="assets/images/team/member7.jpg" alt="Team" />
                <h4>Michael S. Pearson</h4>
                <span className="designation">Software Engineer</span>
                <div className="social-style-two">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="team-member style-two wow fadeInUp delay-0-8s">
                <img src="assets/images/team/member8.jpg" alt="Team" />
                <h4>Kenneth L. Booth</h4>
                <span className="designation">Senior Consultant</span>
                <div className="social-style-two">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="view-all-btn pt-30 text-center">
                <Link legacyBehavior href="/team">
                  <a className="theme-btn style-two">
                    View All Member <i className="fas fa-long-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="team-shapes">
          <img
            className="shape one"
            src="assets/images/team/team-shape-one.png"
            alt="Shape"
          />
          <img
            className="shape two"
            src="assets/images/team/team-shape-two.png"
            alt="Shape"
          />
        </div>
      </section>
      {/* Team Area end */}
      {/* FAQs Area start */}
      <section className="faq-area pb-130 rpb-100 rel z-1">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-5 col-lg-6">
              <div className="faq-content rmb-65 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-30">
                  <span className="sub-title mb-15">Faqs</span>
                  <h2>Frequently Asked Questions</h2>
                </div>
                <div
                  className="faq-accordion style-two pt-20"
                  id="faq-accordion"
                >
                  <JeenaAccordion2 accordionsData={accordionData} />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="faq-images wow fadeInRight delay-0-2s">
                <div className="logo">
                  <Link legacyBehavior href="/index">
                    <a>
                      <img
                        src="assets/images/logos/logo-one2.png"
                        alt="Logo"
                        title="Logo"
                      />
                    </a>
                  </Link>
                </div>
                <img src="assets/images/about/faq-right.jpg" alt="FAQs" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Team;
