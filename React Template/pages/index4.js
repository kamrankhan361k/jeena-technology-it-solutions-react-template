import Layout from "@/layout";
import ProgressBar from "@/src/components/ProgressBar";
import Hero4Slider from "@/src/components/slider/Hero4Slider";
import { projectThreeActive, servicesFiveActive } from "@/src/sliderProps";
import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
import Slider from "react-slick";

const Index4 = () => {
  return (
    <Layout header={4}>
      {/* Slider Section Start */}
      <Hero4Slider />
      {/* Slider Section End */}
      {/* Feature Area Start */}
      <section className="feature-area-two rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="feature-item style-three mt-25 wow fadeInUp delay-0-2s">
                <div className="icon">
                  <i className="flaticon-trust" />
                </div>
                <h4>
                  <Link legacyBehavior href="service-details">
                    Trusted Partner
                  </Link>
                </h4>
                <p>With over 20 year of experience 850+ employees flexion</p>
                <Link legacyBehavior href="/service-details">
                  <a className="more-btn">
                    <i className="far fa-angle-right" />
                  </a>
                </Link>
                <div
                  className="bg-image"
                  style={{
                    backgroundImage:
                      "url(assets/images/services/features-bg.jpg)",
                  }}
                />
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="feature-item style-three wow fadeInDown delay-0-2s">
                <div className="icon">
                  <i className="flaticon-technical-support" />
                </div>
                <h4>
                  <Link legacyBehavior href="service-details">
                    Technical Support
                  </Link>
                </h4>
                <p>With over 20 year of experience 850+ employees flexion</p>
                <Link legacyBehavior href="/service-details">
                  <a className="more-btn">
                    <i className="far fa-angle-right" />
                  </a>
                </Link>
                <div
                  className="bg-image"
                  style={{
                    backgroundImage:
                      "url(assets/images/services/features-bg.jpg)",
                  }}
                />
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="feature-item style-three mt-45 wow fadeInUp delay-0-2s">
                <div className="icon">
                  <i className="flaticon-social-media" />
                </div>
                <h4>
                  <Link legacyBehavior href="service-details">
                    Digital Marketing
                  </Link>
                </h4>
                <p>With over 20 year of experience 850+ employees flexion</p>
                <Link legacyBehavior href="/service-details">
                  <a className="more-btn">
                    <i className="far fa-angle-right" />
                  </a>
                </Link>
                <div
                  className="bg-image"
                  style={{
                    backgroundImage:
                      "url(assets/images/services/features-bg.jpg)",
                  }}
                />
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="feature-item style-three mt-25 wow fadeInDown delay-0-2s">
                <div className="icon">
                  <i className="flaticon-brainstorming" />
                </div>
                <h4>
                  <Link legacyBehavior href="service-details">
                    IT Consulting
                  </Link>
                </h4>
                <p>With over 20 year of experience 850+ employees flexion</p>
                <Link legacyBehavior href="/service-details">
                  <a className="more-btn">
                    <i className="far fa-angle-right" />
                  </a>
                </Link>
                <div
                  className="bg-image"
                  style={{
                    backgroundImage:
                      "url(assets/images/services/features-bg.jpg)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Feature Area End */}
      {/* About Area start */}
      <section className="about-area-four pt-25 rpt-0 rel z-2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6">
              <div className="about-four-image rel z-1 mb-65 wow fadeInRight delay-0-2s">
                <div className="about-circle">
                  <img
                    src="assets/images/about/about-circle.png"
                    alt="Circle"
                  />
                  <img
                    className="text"
                    src="assets/images/about/about-circle-text.png"
                    alt="Circle Text"
                  />
                </div>
                <div className="image">
                  <img src="assets/images/about/about-four.jpg" alt="About" />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-10">
              <div className="about-four-content mb-65 rel z-1 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-50">
                  <span className="sub-title mb-15">About Company</span>
                  <h2>Best Talent, Competitive Cost, Incredible IT Service</h2>
                  <span className="bg-text">About</span>
                </div>
                <Tab.Container defaultActiveKey={"about-tap1"}>
                  <Nav as={"ul"} className="nav nav-pills nav-fill mb-35">
                    <li className="nav-item">
                      <Nav.Link
                        as={"a"}
                        className="nav-link"
                        data-bs-toggle="tab"
                        href="#about-tap1"
                        eventKey="about-tap1"
                      >
                        Business Goals
                      </Nav.Link>
                    </li>
                    <li className="nav-item">
                      <Nav.Link
                        as={"a"}
                        className="nav-link"
                        data-bs-toggle="tab"
                        href="#about-tap2"
                        eventKey="about-tap2"
                      >
                        Awards Winning
                      </Nav.Link>
                    </li>
                    <li className="nav-item">
                      <Nav.Link
                        as={"a"}
                        className="nav-link"
                        data-bs-toggle="tab"
                        href="#about-tap3"
                        eventKey="about-tap3"
                      >
                        Company History
                      </Nav.Link>
                    </li>
                  </Nav>
                  <Tab.Content className="tab-content">
                    <Tab.Pane className="tab-pane fade" eventKey="about-tap1">
                      <p>
                        Sed ut perspiciatis unde omnis iste natus errsit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam eaque quae abillo inventore veritatis et quasi
                        architecto beatae vitae dicta sunt explicabo. Nemo enim
                        ipsam voluptatem quia voluptas sit aspe aut odit aut
                        fugit sed quia consequuntur magni dolores eos qui
                        ratione
                      </p>
                      <ul className="list-style-one my-30">
                        <li>Comprehensive UI/UX Assessment</li>
                        <li>Deep Contextual Research and 360° Planning</li>
                        <li>Wireframing &amp; Prototyping</li>
                      </ul>
                      <Link legacyBehavior href="/about">
                        <a className="theme-btn mt-10">
                          Learn About Us{" "}
                          <i className="fas fa-long-arrow-right" />
                        </a>
                      </Link>
                    </Tab.Pane>
                    <Tab.Pane className="tab-pane fade" eventKey="about-tap2">
                      <ul className="list-style-one my-30">
                        <li>Comprehensive UI/UX Assessment</li>
                        <li>Deep Contextual Research and 360° Planning</li>
                        <li>Wireframing &amp; Prototyping</li>
                      </ul>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus errsit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam eaque quae abillo inventore veritatis et quasi
                        architecto beatae vitae dicta sunt explicabo. Nemo enim
                        ipsam voluptatem quia voluptas sit aspe aut odit aut
                        fugit sed quia consequuntur magni dolores eos qui
                        ratione
                      </p>
                      <Link legacyBehavior href="/about">
                        <a className="theme-btn mt-10">
                          Learn About Us{" "}
                          <i className="fas fa-long-arrow-right" />
                        </a>
                      </Link>
                    </Tab.Pane>
                    <Tab.Pane className="tab-pane fade" eventKey="about-tap3">
                      <p>
                        Sed ut perspiciatis unde omnis iste natus errsit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam eaque quae abillo inventore veritatis et quasi
                        architecto beatae vitae dicta sunt explicabo. Nemo enim
                        ipsam voluptatem quia voluptas sit aspe aut odit aut
                        fugit sed quia consequuntur magni dolores eos qui
                        ratione
                      </p>
                      <ul className="list-style-one my-30">
                        <li>Comprehensive UI/UX Assessment</li>
                        <li>Deep Contextual Research and 360° Planning</li>
                        <li>Wireframing &amp; Prototyping</li>
                      </ul>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Area end */}
      {/* Services Area Five Start */}
      <section className="services-area-five pt-65 rpt-35 pb-130 rpb-100 rel z-2">
        <div className="container-fluid">
          <div className="section-title text-center mb-55 wow fadeInUp delay-0-2s">
            <span className="sub-title mb-10">What We Provides</span>
            <h2>Digital Core Services</h2>
            <span className="bg-text">Service</span>
          </div>
          <Slider {...servicesFiveActive} className="services-five-active">
            <div className="service-item-five wow fadeInUp delay-0-2s">
              <img
                src="assets/images/services/service-five1.jpg"
                alt="Services"
              />
              <div className="content">
                <div className="icon-title">
                  <div className="icon">
                    <i className="flaticon-coding-1" />
                  </div>
                  <h4>
                    <Link legacyBehavior href="service-details">
                      Software Development
                    </Link>
                  </h4>
                </div>
                <div className="bottom-part">
                  <p>
                    Sed ut perspiciat unde omnis estatusrror voluptatem
                    accusantium dolore
                  </p>
                  <Link legacyBehavior href="/service-details">
                    <a className="read-more">
                      Read More <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
              <span className="bg-text">Service</span>
            </div>
            <div className="service-item-five wow fadeInUp delay-0-4s">
              <img
                src="assets/images/services/service-five2.jpg"
                alt="Services"
              />
              <div className="content">
                <div className="icon-title">
                  <div className="icon">
                    <i className="flaticon-cyber-security-1" />
                  </div>
                  <h4>
                    <Link legacyBehavior href="service-details">
                      Quality Cyber Security
                    </Link>
                  </h4>
                </div>
                <div className="bottom-part">
                  <p>
                    Sed ut perspiciat unde omnis estatusrror voluptatem
                    accusantium dolore
                  </p>
                  <Link legacyBehavior href="/service-details">
                    <a className="read-more">
                      Read More <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
              <span className="bg-text">Service</span>
            </div>
            <div className="service-item-five wow fadeInUp delay-0-6s">
              <img
                src="assets/images/services/service-five3.jpg"
                alt="Services"
              />
              <div className="content">
                <div className="icon-title">
                  <div className="icon">
                    <i className="flaticon-layers" />
                  </div>
                  <h4>
                    <Link legacyBehavior href="service-details">
                      Best UI/UX Strategy
                    </Link>
                  </h4>
                </div>
                <div className="bottom-part">
                  <p>
                    Sed ut perspiciat unde omnis estatusrror voluptatem
                    accusantium dolore
                  </p>
                  <Link legacyBehavior href="/service-details">
                    <a className="read-more">
                      Read More <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
              <span className="bg-text">Service</span>
            </div>
            <div className="service-item-five wow fadeInUp delay-0-8s">
              <img
                src="assets/images/services/service-five4.jpg"
                alt="Services"
              />
              <div className="content">
                <div className="icon-title">
                  <div className="icon">
                    <i className="flaticon-seo" />
                  </div>
                  <h4>
                    <Link legacyBehavior href="service-details">
                      SEO Optimizations
                    </Link>
                  </h4>
                </div>
                <div className="bottom-part">
                  <p>
                    Sed ut perspiciat unde omnis estatusrror voluptatem
                    accusantium dolore
                  </p>
                  <Link legacyBehavior href="/service-details">
                    <a className="read-more">
                      Read More <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
              <span className="bg-text">Service</span>
            </div>
            <div className="service-item-five wow fadeInUp delay-0-2s">
              <img
                src="assets/images/services/service-five2.jpg"
                alt="Services"
              />
              <div className="content">
                <div className="icon-title">
                  <div className="icon">
                    <i className="flaticon-coding-1" />
                  </div>
                  <h4>
                    <Link legacyBehavior href="service-details">
                      Cyber Security
                    </Link>
                  </h4>
                </div>
                <div className="bottom-part">
                  <p>
                    Sed ut perspiciat unde omnis estatusrror voluptatem
                    accusantium dolore
                  </p>
                  <Link legacyBehavior href="/service-details">
                    <a className="read-more">
                      Read More <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
              <span className="bg-text">Service</span>
            </div>
          </Slider>
        </div>
      </section>
      {/* Services Area Five End */}
      {/* Skills Area start */}
      <section className="skills-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-9">
              <div className="skills-content mt-60 mb-70 rmt-0 rel z-1 wow fadeInLeft delay-0-2s">
                <div className="row">
                  <div className="col-lg-7">
                    <div className="section-title mb-55">
                      <span className="sub-title mb-15">
                        Skills &amp; Experience
                      </span>
                      <h2>Small Enough to Care Big Enough to Success</h2>
                      <span className="bg-text">Skills</span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4 col-md-6">
                    <div className="circle-progress-item bgc-secondary text-white">
                      <div className="progress-content one">
                        <ProgressBar value={89} color="#ffff" />
                      </div>
                      <h4>IT Consultations</h4>
                      <p>
                        Sed eius tempor incididunt ut labore et dolore magna
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="circle-progress-item bgc-black text-white">
                      <div className="progress-content two">
                        <ProgressBar
                          value={73}
                          color="#ffff"
                          emptyFill={"#3d404c"}
                        />
                      </div>
                      <h4>UX/UI Strategy</h4>
                      <p>
                        Sed eius tempor incididunt ut labore et dolore magna
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="circle-progress-item bg-white">
                      <div className="progress-content three">
                        <ProgressBar
                          value={92}
                          color="#674df3"
                          emptyFill={"#e8e4fd"}
                        />
                      </div>
                      <h4>Cyber Support</h4>
                      <p>
                        Sed eius tempor incididunt ut labore et dolore magna
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="skills-bg"
          style={{
            backgroundImage: "url(assets/images/background/counter-bg.jpg)",
          }}
        />
      </section>
      {/* Skills Area end */}
      {/* Work Process Area start */}
      <section className="work-process-area-two pt-130 pb-100 rpt-100 rpb-70 rel z-1">
        <div className="section-title text-center mb-70 wow fadeInUp delay-0-2s">
          <span className="sub-title mb-15">Working Process</span>
          <h2>Industry Best Practices to the Core</h2>
          <span className="bg-text">Process</span>
        </div>
        <div className="work-process-line-two text-center">
          <img src="assets/images/shapes/work-process-line.png" alt="line" />
        </div>
        <div className="container">
          <div className="row gap-50 justify-content-center">
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="work-process-item-two mt-40 wow fadeInUp delay-0-2s">
                <div className="image">
                  <img
                    src="assets/images/work-process/process1.jpg"
                    alt="Work Process"
                  />
                  <div className="number">01</div>
                </div>
                <div className="content">
                  <h5>Planning</h5>
                  <p>
                    We emphasize planning get everythin documente nothing
                    assumption
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="work-process-item-two wow fadeInDown delay-0-2s">
                <div className="image">
                  <img
                    src="assets/images/work-process/process2.jpg"
                    alt="Work Process"
                  />
                  <div className="number">02</div>
                </div>
                <div className="content">
                  <h5>Design &amp; Dev</h5>
                  <p>
                    We emphasize planning get everythin documente nothing
                    assumption
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="work-process-item-two mt-20 wow fadeInUp delay-0-2s">
                <div className="image">
                  <img
                    src="assets/images/work-process/process3.jpg"
                    alt="Work Process"
                  />
                  <div className="number">03</div>
                </div>
                <div className="content">
                  <h5>Project Testing</h5>
                  <p>
                    We emphasize planning get everythin documente nothing
                    assumption
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="work-process-item-two wow fadeInDown delay-0-2s">
                <div className="image">
                  <img
                    src="assets/images/work-process/process4.jpg"
                    alt="Work Process"
                  />
                  <div className="number">04</div>
                </div>
                <div className="content">
                  <h5>Project Deliver</h5>
                  <p>
                    We emphasize planning get everythin documente nothing
                    assumption
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Work Process Area end */}
      {/* Project Area Four Start */}
      <section className="project-area-four rel z-2">
        <div className="container-fluid">
          <Slider {...projectThreeActive} className="project-three-active">
            <div className="project-item-three wow fadeInUp delay-0-2s">
              <img
                src="assets/images/projects/project-three1.jpg"
                alt="Projects"
              />
              <div className="content">
                <span className="category">IT Consulting</span>
                <h4>
                  <Link legacyBehavior href="project-details">
                    Product Engineering
                  </Link>
                </h4>
              </div>
              <Link legacyBehavior href="/project-details">
                <a className="detail-btn">
                  <i className="flaticon-arrow" />
                </a>
              </Link>
            </div>
            <div className="project-item-three big-item wow fadeInUp delay-0-4s">
              <img
                src="assets/images/projects/project-three2.jpg"
                alt="Projects"
              />
              <div className="content">
                <span className="category">IT Consulting</span>
                <h4>
                  <Link legacyBehavior href="project-details">
                    Product Engineering
                  </Link>
                </h4>
              </div>
              <Link legacyBehavior href="/project-details">
                <a className="detail-btn">
                  <i className="flaticon-arrow" />
                </a>
              </Link>
            </div>
            <div className="project-item-three wow fadeInUp delay-0-6s">
              <img
                src="assets/images/projects/project-three3.jpg"
                alt="Projects"
              />
              <div className="content">
                <span className="category">IT Consulting</span>
                <h4>
                  <Link legacyBehavior href="project-details">
                    Product Engineering
                  </Link>
                </h4>
              </div>
              <Link legacyBehavior href="/project-details">
                <a className="detail-btn">
                  <i className="flaticon-arrow" />
                </a>
              </Link>
            </div>
            <div className="project-item-three wow fadeInUp delay-0-8s">
              <img
                src="assets/images/projects/project-three1.jpg"
                alt="Projects"
              />
              <div className="content">
                <span className="category">IT Consulting</span>
                <h4>
                  <Link legacyBehavior href="project-details">
                    Product Engineering
                  </Link>
                </h4>
              </div>
              <Link legacyBehavior href="/project-details">
                <a className="detail-btn">
                  <i className="flaticon-arrow" />
                </a>
              </Link>
            </div>
            <div className="project-item-three big-item wow fadeInUp delay-0-2s">
              <img
                src="assets/images/projects/project-three2.jpg"
                alt="Projects"
              />
              <div className="content">
                <span className="category">IT Consulting</span>
                <h4>
                  <Link legacyBehavior href="project-details">
                    Product Engineering
                  </Link>
                </h4>
              </div>
              <Link legacyBehavior href="/project-details">
                <a className="detail-btn">
                  <i className="flaticon-arrow" />
                </a>
              </Link>
            </div>
            <div className="project-item-three wow fadeInUp delay-0-2s">
              <img
                src="assets/images/projects/project-three3.jpg"
                alt="Projects"
              />
              <div className="content">
                <span className="category">IT Consulting</span>
                <h4>
                  <Link legacyBehavior href="project-details">
                    Product Engineering
                  </Link>
                </h4>
              </div>
              <Link legacyBehavior href="/project-details">
                <a className="detail-btn">
                  <i className="flaticon-arrow" />
                </a>
              </Link>
            </div>
          </Slider>
        </div>
      </section>
      {/* Project Area Four End */}
      {/* Pricing Plan Area start */}
      <section className="price-plan-area-two pt-110 rpt-80 pb-170 rpb-140 rel z-1">
        <div className="container pt-20">
          <div className="section-title text-center mb-55 wow fadeInUp delay-0-2s">
            <span className="sub-title mb-15">Amazing Pricing Plan</span>
            <h2>Affordable Pricing Packages</h2>
            <span className="bg-text">Pricing</span>
          </div>
          <div className="pricing-wrapper">
            <div className="row justify-content-center">
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="pricing-plan-item style-two wow fadeInUp delay-0-2s">
                  <h4 className="title">Basic Plan</h4>
                  <span className="price-count">5 Services Included</span>
                  <div className="icon">
                    <i className="flaticon-technology" />
                  </div>
                  <ul>
                    <li>Quality Supports</li>
                    <li>IT Consultations</li>
                    <li>Product Design</li>
                    <li>Search Engine (SEO )</li>
                    <li>Market Research</li>
                  </ul>
                  <span className="price">0.0</span>
                  <Link legacyBehavior href="/pricing">
                    <a className="theme-btn style-two">
                      Choose Plan <i className="fas fa-long-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="pricing-plan-item style-two wow fadeInUp delay-0-4s">
                  <h4 className="title">Standard Plan</h4>
                  <span className="price-count">5 Services Included</span>
                  <div className="icon">
                    <i className="flaticon-technology" />
                  </div>
                  <ul>
                    <li>Quality Supports</li>
                    <li>IT Consultations</li>
                    <li>Product Design</li>
                    <li>Search Engine (SEO )</li>
                    <li>Market Research</li>
                  </ul>
                  <span className="price">19.8</span>
                  <Link legacyBehavior href="/pricing">
                    <a className="theme-btn style-two">
                      Choose Plan <i className="fas fa-long-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="pricing-plan-item style-two wow fadeInUp delay-0-6s">
                  <h4 className="title">Silver Plan</h4>
                  <span className="price-count">5 Services Included</span>
                  <div className="icon">
                    <i className="flaticon-technology" />
                  </div>
                  <ul>
                    <li>Quality Supports</li>
                    <li>IT Consultations</li>
                    <li>Product Design</li>
                    <li>Search Engine (SEO )</li>
                    <li>Market Research</li>
                  </ul>
                  <span className="price">49.6</span>
                  <Link legacyBehavior href="/pricing">
                    <a className="theme-btn style-two">
                      Choose Plan <i className="fas fa-long-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="pricing-plan-item style-two wow fadeInUp delay-0-8s">
                  <h4 className="title">Golden Plan</h4>
                  <span className="price-count">5 Services Included</span>
                  <div className="icon">
                    <i className="flaticon-technology" />
                  </div>
                  <ul>
                    <li>Quality Supports</li>
                    <li>IT Consultations</li>
                    <li>Product Design</li>
                    <li>Search Engine (SEO )</li>
                    <li>Market Research</li>
                  </ul>
                  <span className="price">99.5</span>
                  <Link legacyBehavior href="/pricing">
                    <a className="theme-btn style-two">
                      Choose Plan <i className="fas fa-long-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing Plan Area end */}
      {/* Testimonial Area Four start */}
      <section className="testimonials-area-four rel z-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-6 ms-lg-auto">
              <div className="testimonials-four-content py-65 rpt-0 rpb-35">
                <div className="section-title mb-35 wow fadeInUp delay-0-2s">
                  <span className="sub-title mb-15">Clients Testimonials</span>
                  <h2>What Our Client’s Say About Our Agency</h2>
                  <span className="bg-text">Says</span>
                </div>
                <div className="testimonial-item style-two wow fadeInUp delay-0-2s">
                  <div className="image">
                    <img
                      src="assets/images/testimonials/testi-author1.jpg"
                      alt="Author"
                    />
                  </div>
                  <div className="content">
                    <div className="testi-header">
                      <h4>Excellent Works</h4>
                    </div>
                    <div className="testi-text">
                      Sed ut perspiciatis unde omnis iste natus voluptatem accus
                      antiume dolorem queauy antium totam aperiam eaque quaey
                      abillosa inventore veritatis vitaec
                    </div>
                    <div className="testi-footer">
                      <div className="icon">
                        <i className="flaticon-quotation" />
                      </div>
                      <div className="title">
                        <h4>Andrew D. Bricker</h4>
                        <span className="designation">CEO &amp; Founder</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="testimonial-item style-two wow fadeInUp delay-0-2s">
                  <div className="image">
                    <img
                      src="assets/images/testimonials/testi-author3.jpg"
                      alt="Author"
                    />
                  </div>
                  <div className="content">
                    <div className="testi-header">
                      <h4>Excellent Works</h4>
                    </div>
                    <div className="testi-text">
                      On the other hand denounce righteous indignation and
                      dislike men who are so beguiled and demorzed charms of
                      pleasure of the moment blinde
                    </div>
                    <div className="testi-footer">
                      <div className="icon">
                        <i className="flaticon-quotation" />
                      </div>
                      <div className="title">
                        <h4>Michael M. Callaway</h4>
                        <span className="designation">CEO &amp; Founder</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="testimonial-item style-two wow fadeInUp delay-0-2s">
                  <div className="image">
                    <img
                      src="assets/images/testimonials/testi-author4.jpg"
                      alt="Author"
                    />
                  </div>
                  <div className="content">
                    <div className="testi-header">
                      <h4>Excellent Works</h4>
                    </div>
                    <div className="testi-text">
                      At vero eos et accusamuse iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatu delntc atque corrupti
                      quos dolores quas molestias
                    </div>
                    <div className="testi-footer">
                      <div className="icon">
                        <i className="flaticon-quotation" />
                      </div>
                      <div className="title">
                        <h4>William G. Manno</h4>
                        <span className="designation">CEO &amp; Founder</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="testimonial-four-image"
          style={{
            backgroundImage:
              "url(assets/images/testimonials/testimonial-four.jpg)",
          }}
        />
      </section>
      {/* Testimonial Area Three end */}
      {/* Partners Area start */}
      <section className="partners-area-two bgc-secondary pt-80 pb-50 rel z-1">
        <div className="container">
          <div className="section-title text-white text-center mb-50 wow fadeInUp delay-0-2s">
            <span className="sub-title mb-15">Global Partners</span>
            <h2>World Wide Partners</h2>
            <span className="bg-text">Partners</span>
          </div>
          <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2 justify-content-center">
            <div className="col">
              <Link legacyBehavior href="/contact">
                <a className="partner-item wow fadeInUp delay-0-3s">
                  <img
                    src="assets/images/partners/partner1.png"
                    alt="Partner"
                  />
                </a>
              </Link>
            </div>
            <div className="col">
              <Link legacyBehavior href="/contact">
                <a className="partner-item wow fadeInUp delay-0-4s">
                  <img
                    src="assets/images/partners/partner2.png"
                    alt="Partner"
                  />
                </a>
              </Link>
            </div>
            <div className="col">
              <Link legacyBehavior href="/contact">
                <a className="partner-item wow fadeInUp delay-0-5s">
                  <img
                    src="assets/images/partners/partner3.png"
                    alt="Partner"
                  />
                </a>
              </Link>
            </div>
            <div className="col">
              <Link legacyBehavior href="/contact">
                <a className="partner-item wow fadeInUp delay-0-6s">
                  <img
                    src="assets/images/partners/partner4.png"
                    alt="Partner"
                  />
                </a>
              </Link>
            </div>
            <div className="col">
              <Link legacyBehavior href="/contact">
                <a className="partner-item wow fadeInUp delay-0-7s">
                  <img
                    src="assets/images/partners/partner5.png"
                    alt="Partner"
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="partners-shapes">
          <img
            className="left-shape"
            src="assets/images/partners/partner-shape-left.png"
            alt="Shape"
          />
          <img
            className="right-shape"
            src="assets/images/partners/partner-shape-right.png"
            alt="Shape"
          />
        </div>
      </section>
      {/* Partners Area end */}
      {/* Blog Area Four start */}
      <section className="blog-area-four pt-130 rpt-100 pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="row justify-content-between align-items-end mb-30">
            <div className="col-xl-6 col-lg-8">
              <div className="section-title mb-25 wow fadeInLeft delay-0-2s">
                <span className="sub-title mb-10">Our Blog &amp; News</span>
                <h2>Latest Blog, New &amp; Articles</h2>
                <span className="bg-text">Blog</span>
              </div>
            </div>
            <div className="col-lg-4 text-lg-end">
              <Link legacyBehavior href="/blog">
                <a className="theme-btn style-four mb-30 wow fadeInRight delay-0-2s">
                  View More News <i className="fas fa-long-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
          <div className="blog-item style-four wow fadeInUp delay-0-2s">
            <div className="image">
              <img src="assets/images/blog/blog-four1.jpg" alt="Blog" />
            </div>
            <div className="content">
              <ul className="blog-meta">
                <li>
                  <i className="far fa-calendar-alt" />{" "}
                  <a href="#">Jule 26, 2022</a>
                </li>
                <li>
                  <i className="far fa-calendar-alt" />{" "}
                  <a href="#">Comments (25)</a>
                </li>
              </ul>
              <h4>
                <Link legacyBehavior href="blog-details">
                  Use Google CrUX To Analyze And Compare Performance
                </Link>
              </h4>
              <div className="author-more">
                <span className="author">
                  By <a href="#">Luis J. Hill</a>
                </span>
                <Link legacyBehavior href="/blog-details">
                  <a className="read-more">
                    Read More <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="blog-item style-four wow fadeInUp delay-0-2s">
            <div className="image">
              <img src="assets/images/blog/blog-four2.jpg" alt="Blog" />
            </div>
            <div className="content">
              <ul className="blog-meta">
                <li>
                  <i className="far fa-calendar-alt" />{" "}
                  <a href="#">Jule 26, 2022</a>
                </li>
                <li>
                  <i className="far fa-calendar-alt" />{" "}
                  <a href="#">Comments (25)</a>
                </li>
              </ul>
              <h4>
                <Link legacyBehavior href="blog-details">
                  Voice Usabilit Consideration Partially Visually Hidden
                </Link>
              </h4>
              <div className="author-more">
                <span className="author">
                  By <a href="#">Luis J. Hill</a>
                </span>
                <Link legacyBehavior href="/blog-details">
                  <a className="read-more">
                    Read More <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Index4;
