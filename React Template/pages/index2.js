import Layout from "@/layout";
import { testimonialSlider } from "@/src/sliderProps";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
import Slider from "react-slick";

const Counter = dynamic(() => import("@/src/components/Counter"), {
  ssr: false,
});

const Index2 = () => {
  return (
    <Layout>
      <section
        className="hero-area-two bgs-cover"
        style={{ backgroundImage: "url(assets/images/hero/hero-two.jpg)" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="hero-content-two pt-155 pb-160 rpt-115 rpb-65 wow fadeInUp delay-0-4s">
                <span className="sub-title">IT Solution Comapny</span>
                <h1>Innovation Digital IT Solutions</h1>
                <Link legacyBehavior href="/about">
                  <a className="theme-btn mt-25 wow fadeInUp delay-0-6s">
                    Let’s Get Started <i className="fas fa-long-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-8 col-10 col-small">
              <div className="hero-gradient-circle">
                <div className="icon">
                  <img
                    src="assets/images/hero/hero-circle-icon.png"
                    alt="Icon"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-2 col-lg-3 col-md-4 col-6 col-small">
              <div className="feature-item wow fadeInUp delay-0-2s">
                <div className="icon">
                  <i className="flaticon-consulting" />
                </div>
                <h5>
                  <Link legacyBehavior href="service-details">
                    Consulting
                  </Link>
                </h5>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-6 col-small">
              <div className="feature-item wow fadeInDown delay-0-2s">
                <div className="icon">
                  <i className="flaticon-project-management" />
                </div>
                <h5>
                  <Link legacyBehavior href="service-details">
                    Management
                  </Link>
                </h5>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-6 col-small">
              <div className="feature-item wow fadeInUp delay-0-2s">
                <div className="icon">
                  <i className="flaticon-ui" />
                </div>
                <h5>
                  <Link legacyBehavior href="service-details">
                    Application
                  </Link>
                </h5>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-6 col-small">
              <div className="feature-item wow fadeInDown delay-0-2s">
                <div className="icon">
                  <i className="flaticon-coding-1" />
                </div>
                <h5>
                  <Link legacyBehavior href="service-details">
                    Development
                  </Link>
                </h5>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-6 col-small">
              <div className="feature-item wow fadeInUp delay-0-2s">
                <div className="icon">
                  <i className="flaticon-seo-1" />
                </div>
                <h5>
                  <Link legacyBehavior href="service-details">
                    SEO Optimize
                  </Link>
                </h5>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-6 col-small">
              <div className="feature-item wow fadeInDown delay-0-2s">
                <div className="icon">
                  <i className="flaticon-rocket" />
                </div>
                <h5>
                  <Link legacyBehavior href="service-details">
                    Business Dev
                  </Link>
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-shapes-two">
          <img src="assets/images/hero/hero-bg-lines.png" alt="BG Lines" />
        </div>
      </section>
      {/* Hero Section End */}
      {/* About Area start */}
      <section className="about-area-two py-130 rpy-100 rel z-1">
        <div className="container">
          <div className="row align-items-center gap-90">
            <div className="col-lg-6">
              <div className="about-two-image rel z-1 rmb-65 wow fadeInRight delay-0-2s">
                <img src="assets/images/about/about-two.jpg" alt="About" />
                <div className="bg-circle-shape" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content rel z-1 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-30">
                  <span className="sub-title mb-15">About Company</span>
                  <h2>Small Enough to Care Big Enough to Success</h2>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium totam rem aperiam eaque ipsa
                  quae abillo inventore veritatis et quasi architecto beatae
                  vitae dicta sunt explicabo.
                </p>
                <div className="about-btns">
                  <Link legacyBehavior href="/about">
                    <a className="theme-btn style-three mt-15">
                      Learn More <i className="fas fa-long-arrow-right" />
                    </a>
                  </Link>
                  <div className="hotline mt-15">
                    <i className="fas fa-phone" />
                    <div className="content">
                      <span>Hotline</span>
                      <br />
                      <a href="callto:+000(123)45688">+000 (123) 456 88</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Area end */}
      {/* Services Area Two start */}
      <section className="services-area-two rel z-2">
        <div className="container">
          <div className="section-title text-center mb-55 wow fadeInUp delay-0-2s">
            <span className="sub-title mb-10">What We Provides</span>
            <h2>Digital Core Services</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="service-item-two wow fadeInUp delay-0-2s">
                <div className="image">
                  <img
                    src="assets/images/services/service1.png"
                    alt="Service"
                  />
                </div>
                <div className="content">
                  <h4 className="title">Digital Marketing</h4>
                  <ul className="list-style-three">
                    <li>Paid Marketing</li>
                    <li>CRO</li>
                    <li>Content Marketing</li>
                    <li>Email Marketing</li>
                    <li>SMO</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="service-item-two wow fadeInUp delay-0-4s">
                <div className="image">
                  <img
                    src="assets/images/services/service2.png"
                    alt="Service"
                  />
                </div>
                <div className="content">
                  <h4 className="title">Mobile Application</h4>
                  <ul className="list-style-three">
                    <li>Unique UI Design</li>
                    <li>Clean Development</li>
                    <li>Swift</li>
                    <li>Kotlin</li>
                    <li>React Native</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="service-item-two wow fadeInUp delay-0-6s">
                <div className="image">
                  <img
                    src="assets/images/services/service3.png"
                    alt="Service"
                  />
                </div>
                <div className="content">
                  <h4 className="title">Web Development</h4>
                  <ul className="list-style-three">
                    <li>Development Consulting</li>
                    <li>UX/UI Cool Design</li>
                    <li>Software Engineering</li>
                    <li>Product Development</li>
                    <li>Enhancement</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="service-item-two wow fadeInUp delay-0-8s">
                <div className="image">
                  <img
                    src="assets/images/services/service4.png"
                    alt="Service"
                  />
                </div>
                <div className="content">
                  <h4 className="title">Technical Support</h4>
                  <ul className="list-style-three">
                    <li>Security Management </li>
                    <li>Automated Deployments </li>
                    <li>Incident Management(SLA)</li>
                    <li>Compliance Monitoring</li>
                    <li>CI/CD and DevOps</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Area Two end */}
      {/* Customer Satisfaction Area start */}
      <section className="customer-satisfaction-area py-100 rpy-70 rel z-1">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-5 col-lg-6">
              <div className="cs-content-part rmb-35 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-15">
                  <span className="sub-title mb-15">
                    Guaranteed Customer Satisfaction
                  </span>
                  <h2>Ideate, Design And Fuel Business Growth</h2>
                </div>
                <p>
                  With over 20 years of experience and 850+ employees board,
                  Iflexion serves medium-sized and large companies globally.
                  Profound knowledge coupled with business understanding is what
                  allows us to create unique solutions that power enterprises,
                  their employees.
                </p>
                <div className="row pt-15">
                  <div className="col-sm-6">
                    <div className="service-item style-two">
                      <div className="icon">
                        <i className="flaticon-trust" />
                      </div>
                      <h4>
                        <Link legacyBehavior href="service-details">
                          Best Trusted Partner
                        </Link>
                      </h4>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="service-item style-two">
                      <div className="icon">
                        <i className="flaticon-technical-support" />
                      </div>
                      <h4>
                        <Link legacyBehavior href="service-details">
                          24/7 Tehnical Support
                        </Link>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs-image-part mb-30 wow fadeInRight delay-0-2s">
                <a
                  href="https://www.youtube.com/watch?v=9Y7ma241N8k"
                  className="mfp-iframe video-play style-two"
                  tabIndex={0}
                >
                  <i className="fas fa-play" />
                </a>
                <div className="image">
                  <img
                    src="assets/images/about/satisfaction.jpg"
                    alt="Satisfaction"
                  />
                </div>
                <div className="experience-years">
                  <h4>25 Years Of Experience IT Solutions</h4>
                  <img
                    src="assets/images/about/satisfaction-author.png"
                    alt="Author"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Customer Satisfaction Area end */}
      {/* Statistics Area start */}
      <section className="statistics-area-two rel z-2 mb-130 rmb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8">
              <div className="section-title text-center mb-50 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-10">
                  Company Statistics Database
                </span>
                <h2>5,000+ Completed Projects in 41+ Countries</h2>
              </div>
            </div>
          </div>
          <div className="row no-gap justify-content-center">
            <div className="col-xl-4 col-md-6">
              <div className="counter-item-two counter-text-wrap wow fadeInUp delay-0-3s">
                <div className="icon">
                  <i className="flaticon-target" />
                </div>
                <div className="content">
                  <span
                    className="count-text plus"
                    data-speed={3000}
                    data-stop={35}
                  >
                    <Counter end={35} />
                  </span>
                  <span className="counter-title">Years Of Experience</span>
                  <p>Over 20 years of experience and 850+ employees</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="counter-item-two counter-text-wrap wow fadeInUp delay-0-5s">
                <div className="icon">
                  <i className="flaticon-target" />
                </div>
                <div className="content">
                  <span
                    className="count-text plus"
                    data-speed={3000}
                    data-stop={693}
                  >
                    <Counter end={693} />
                  </span>
                  <span className="counter-title">Project Complate</span>
                  <p>Over 20 years of experience and 850+ employees</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="counter-item-two counter-text-wrap wow fadeInUp delay-0-7s">
                <div className="icon">
                  <i className="flaticon-target" />
                </div>
                <div className="content">
                  <span
                    className="count-text percent"
                    data-speed={3000}
                    data-stop={98}
                  >
                    <Counter end={98} />
                  </span>
                  <span className="counter-title">Clients Satisfaction</span>
                  <p>Over 20 years of experience and 850+ employees</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Statistics Area end */}
      {/* Project Area start */}
      <section className="project-area-two">
        <div className="container-fluid gap-wide">
          <div className="row no-gap justify-content-center">
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="project-item wow fadeInUp delay-0-2s">
                <div className="image">
                  <img
                    src="assets/images/projects/project1.jpg"
                    alt="Project"
                  />
                </div>
                <div className="content">
                  <span className="number">01</span>
                  <h3>Web Design &amp; Development</h3>
                  <p>
                    With over 20 years of experience and 850+ employees board
                    Iflexion serves
                  </p>
                  <Link legacyBehavior href="/project-details">
                    <a className="theme-btn">
                      View Details <i className="fas fa-long-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="project-item wow fadeInUp delay-0-4s">
                <div className="image">
                  <img
                    src="assets/images/projects/project2.jpg"
                    alt="Project"
                  />
                </div>
                <div className="content">
                  <span className="number">02</span>
                  <h3>Web Design &amp; Development</h3>
                  <p>
                    With over 20 years of experience and 850+ employees board
                    Iflexion serves
                  </p>
                  <Link legacyBehavior href="/project-details">
                    <a className="theme-btn">
                      View Details <i className="fas fa-long-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="project-item wow fadeInUp delay-0-6s">
                <div className="image">
                  <img
                    src="assets/images/projects/project3.jpg"
                    alt="Project"
                  />
                </div>
                <div className="content">
                  <span className="number">03</span>
                  <h3>Web Design &amp; Development</h3>
                  <p>
                    With over 20 years of experience and 850+ employees board
                    Iflexion serves
                  </p>
                  <Link legacyBehavior href="/project-details">
                    <a className="theme-btn">
                      View Details <i className="fas fa-long-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="project-item wow fadeInUp delay-0-8s">
                <div className="image">
                  <img
                    src="assets/images/projects/project4.jpg"
                    alt="Project"
                  />
                </div>
                <div className="content">
                  <span className="number">04</span>
                  <h3>Web Design &amp; Development</h3>
                  <p>
                    With over 20 years of experience and 850+ employees board
                    Iflexion serves
                  </p>
                  <Link legacyBehavior href="/project-details">
                    <a className="theme-btn">
                      View Details <i className="fas fa-long-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Project Area end */}
      {/* Why Choose Us Area start */}
      <section className="why-choose-us-area py-130 rpy-100 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="section-title text-center mb-45 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">Why Choose Us</span>
                <h2>
                  Top-Notch Software Development and Digital Transformation
                </h2>
              </div>
            </div>
          </div>
          <Tab.Container defaultActiveKey={"wc-tap1"}>
            <div className="why-choose-tab">
              <Nav
                as={"ul"}
                className="nav nav-pills nav-fill mb-80 rmb-50 wow fadeInUp delay-0-4s"
              >
                <li className="nav-item">
                  <Nav.Link
                    as="a"
                    eventKey={"wc-tap1"}
                    className="nav-link"
                    data-bs-toggle="tab"
                    href="#wc-tap1"
                  >
                    <i className="flaticon-creativity" />{" "}
                    <span>UX/UI Design</span>
                  </Nav.Link>
                </li>
                <li className="nav-item">
                  <Nav.Link
                    as="a"
                    eventKey={"wc-tap2"}
                    className="nav-link"
                    data-bs-toggle="tab"
                    href="#wc-tap2"
                  >
                    <i className="flaticon-test" />{" "}
                    <span>Apps Development</span>
                  </Nav.Link>
                </li>
                <li className="nav-item">
                  <Nav.Link
                    as="a"
                    eventKey={"wc-tap3"}
                    className="nav-link"
                    data-bs-toggle="tab"
                    href="#wc-tap3"
                  >
                    <i className="flaticon-cyber-security-1" />{" "}
                    <span>Cyber Security</span>
                  </Nav.Link>
                </li>
                <li className="nav-item">
                  <Nav.Link
                    as="a"
                    eventKey={"wc-tap4"}
                    className="nav-link"
                    data-bs-toggle="tab"
                    href="#wc-tap4"
                  >
                    <i className="flaticon-support" /> <span>Tech Support</span>
                  </Nav.Link>
                </li>
              </Nav>
              <Tab.Content className="tab-content">
                <Tab.Pane className="tab-pane fade" eventKey="wc-tap1">
                  <div className="row gap-90 align-items-center">
                    <div className="col-lg-6">
                      <div className="why-choose-image rmb-55">
                        <img
                          src="assets/images/about/why-choose1.jpg"
                          alt="Why Choose"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="why-choose-content">
                        <h3>
                          An impactful Application Needs an innovative and
                          interactive.
                        </h3>
                        <p>
                          Our experts help create the right website for across
                          all major platforms and devices. Taking into
                          consideration your user behavior volu promotey the
                          optimal experience we design responsive performance
                        </p>
                        <ul className="list-style-one pt-5">
                          <li>Comprehensive UI/UX Assessment</li>
                          <li>Deep Contextual Research and 360° Planning</li>
                          <li>Wireframing &amp; Prototyping</li>
                        </ul>
                        <Link legacyBehavior href="/about">
                          <a className="theme-btn mt-30">
                            Learn More <i className="fas fa-long-arrow-right" />
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane className="tab-pane fade" eventKey="wc-tap2">
                  <div className="row gap-90 align-items-center">
                    <div className="col-lg-6">
                      <div className="why-choose-content">
                        <h3>
                          An impactful Application Needs an innovative and
                          interactive.
                        </h3>
                        <p>
                          Our experts help create the right website for across
                          all major platforms and devices. Taking into
                          consideration your user behavior volu promotey the
                          optimal experience we design responsive performance
                        </p>
                        <ul className="list-style-one pt-5">
                          <li>Comprehensive UI/UX Assessment</li>
                          <li>Deep Contextual Research and 360° Planning</li>
                          <li>Wireframing &amp; Prototyping</li>
                        </ul>
                        <Link legacyBehavior href="/about">
                          <a className="theme-btn mt-30">
                            Learn More <i className="fas fa-long-arrow-right" />
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="why-choose-image rmt-55">
                        <img
                          src="assets/images/about/why-choose1.jpg"
                          alt="Why Choose"
                        />
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane className="tab-pane fade" eventKey="wc-tap3">
                  <div className="row gap-90 align-items-center">
                    <div className="col-lg-6">
                      <div className="why-choose-image rmb-55">
                        <img
                          src="assets/images/about/why-choose1.jpg"
                          alt="Why Choose"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="why-choose-content">
                        <h3>
                          An impactful Application Needs an innovative and
                          interactive.
                        </h3>
                        <p>
                          Our experts help create the right website for across
                          all major platforms and devices. Taking into
                          consideration your user behavior volu promotey the
                          optimal experience we design responsive performance
                        </p>
                        <ul className="list-style-one pt-5">
                          <li>Comprehensive UI/UX Assessment</li>
                          <li>Deep Contextual Research and 360° Planning</li>
                          <li>Wireframing &amp; Prototyping</li>
                        </ul>
                        <Link legacyBehavior href="/about">
                          <a className="theme-btn mt-30">
                            Learn More <i className="fas fa-long-arrow-right" />
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane className="tab-pane fade" eventKey="wc-tap4">
                  <div className="row gap-90 align-items-center">
                    <div className="col-lg-6">
                      <div className="why-choose-content">
                        <h3>
                          An impactful Application Needs an innovative and
                          interactive.
                        </h3>
                        <p>
                          Our experts help create the right website for across
                          all major platforms and devices. Taking into
                          consideration your user behavior volu promotey the
                          optimal experience we design responsive performance
                        </p>
                        <ul className="list-style-one pt-5">
                          <li>Comprehensive UI/UX Assessment</li>
                          <li>Deep Contextual Research and 360° Planning</li>
                          <li>Wireframing &amp; Prototyping</li>
                        </ul>
                        <Link legacyBehavior href="/about">
                          <a className="theme-btn mt-30">
                            Learn More <i className="fas fa-long-arrow-right" />
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="why-choose-image rmt-55">
                        <img
                          src="assets/images/about/why-choose1.jpg"
                          alt="Why Choose"
                        />
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </div>
          </Tab.Container>
        </div>
        <div className="why-choose-shapes">
          <img
            className="shape one"
            src="assets/images/about/why-choose-shape1.png"
            alt="Shape"
          />
          <img
            className="shape two"
            src="assets/images/about/why-choose-shape2.png"
            alt="Shape"
          />
        </div>
      </section>
      {/* Why Choose Us Area end */}
      {/* Testimonials Area Two start */}
      <section className="testimonials-area-two pb-130 rpb-100 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="section-title text-center mb-45 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">Clients Feedback</span>
                <h2>What Our Clients Say Us</h2>
              </div>
            </div>
          </div>
          <Slider {...testimonialSlider} className="testimonial-slider">
            <div className="testimonial-item wow fadeInUp delay-0-2s">
              <div className="image">
                <img
                  src="assets/images/testimonials/testi-author1.jpg"
                  alt="Author"
                />
              </div>
              <div className="content">
                <div className="testi-header">
                  <h4>Excellent Works</h4>
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half-alt" />
                  </div>
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
            <div className="testimonial-item wow fadeInUp delay-0-4s">
              <div className="content">
                <div className="testi-header">
                  <h4>Excellent Works</h4>
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half-alt" />
                  </div>
                </div>
                <div className="testi-text">
                  On the other hand denounce righteous indignations and dislike
                  men who beguiled and demoralized by the charms of pleasure
                  moment blinded foresee
                </div>
                <div className="testi-footer">
                  <div className="icon">
                    <i className="flaticon-quotation" />
                  </div>
                  <div className="title">
                    <h4>Jose T. McMichael</h4>
                    <span className="designation">Senior Manager</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-item wow fadeInUp delay-0-6s">
              <div className="image">
                <img
                  src="assets/images/testimonials/testi-author4.jpg"
                  alt="Author"
                />
              </div>
              <div className="content">
                <div className="testi-header">
                  <h4>Excellent Works</h4>
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half-alt" />
                  </div>
                </div>
                <div className="testi-text">
                  Unde omnis iste natus voluptatem accus antiume dolorem queauy
                  antium totam aperiam eaque quaey abillosa inventore veritatis
                  etuarchite beatae vitaec
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
          </Slider>
        </div>
      </section>
      {/* Testimonials Area Two end */}
      {/* Blog Area Two start */}
      <section className="blog-area-two pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="row align-items-end pb-35">
            <div className="col-lg-8">
              <div className="section-title mb-25 wow fadeInLeft delay-0-2s">
                <span className="sub-title mb-10">Our Blog &amp; News</span>
                <h2>Latest Blog, New &amp; Articles</h2>
              </div>
            </div>
            <div className="col-lg-4 mb-25 text-lg-end">
              <Link legacyBehavior href="/blog">
                <a className="theme-btn style-four wow fadeInRight delay-0-2s">
                  View More News <i className="fas fa-long-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-md-6">
              <div className="blog-item wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/blog/blog1.jpg" alt="Blog" />
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
                      {`Voice Usabilit Consideration Partially Visually Hidden`}
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
            <div className="col-xl-4 col-md-6">
              <div className="blog-item wow fadeInUp delay-0-4s">
                <div className="image">
                  <img src="assets/images/blog/blog2.jpg" alt="Blog" />
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
                      How Create Van JavaScript Gant Chart Adding Task
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
            <div className="col-xl-4 col-md-6">
              <div className="blog-item wow fadeInUp delay-0-6s">
                <div className="image">
                  <img src="assets/images/blog/blog3.jpg" alt="Blog" />
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
                      Smashing Podcast Episode 47 Soueidan Accessibility
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
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Index2;
