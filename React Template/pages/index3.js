import Layout from "@/layout";
import {
  mainSliderActive,
  serviceThreeSlider,
  testimonialThreeSlider,
} from "@/src/sliderProps";
import dynamic from "next/dynamic";
import Link from "next/link";
import Slider from "react-slick";

const Counter = dynamic(() => import("@/src/components/Counter"), {
  ssr: false,
});

const Index3 = () => {
  return (
    <Layout header={3}>
      <section
        className="slider-area bgs-cover pt-185 pb-160"
        style={{ backgroundImage: "url(assets/images/slider/slider-bg.jpg)" }}
      >
        <div className="container">
          <Slider {...mainSliderActive} className="main-slider-active">
            <div className="slider-item">
              <div className="slide-content text-white">
                <span className="sub-title">IT Solution Comapny</span>
                <span className="h2">We’re Digital</span>
                <h1>IT Services Agency</h1>
                <Link legacyBehavior href="/about">
                  <a className="theme-btn">
                    Let’s Get Started <i className="fas fa-long-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="slider-item">
              <div className="slide-content text-white">
                <span className="sub-title">IT Solution Comapny</span>
                <span className="h2">We’re Digital</span>
                <h1>IT Services Agency</h1>
                <Link legacyBehavior href="/about">
                  <a className="theme-btn">
                    Let’s Get Started <i className="fas fa-long-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/* Slider Section End */}
      {/* Feature Area Start */}
      <section className="feature-area-two rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="feature-item style-two mt-25 wow fadeInUp delay-0-2s">
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
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="feature-item style-two wow fadeInDown delay-0-2s">
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
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="feature-item style-two mt-45 wow fadeInUp delay-0-2s">
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
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="feature-item style-two mt-25 wow fadeInDown delay-0-2s">
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
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Feature Area End */}
      {/* About Area start */}
      <section className="about-area-three pt-25 rpt-0 pb-100 rpb-65 rel z-1">
        <div className="container">
          <div className="row align-items-center gap-100">
            <div className="col-lg-6">
              <div className="about-three-image rel z-1 mb-30 rmb-65 wow fadeInRight delay-0-2s">
                <img src="assets/images/about/about-three.jpg" alt="About" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content rel z-1 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-60 rmb-40">
                  <span className="sub-title mb-15">About Company</span>
                  <h2>
                    Best talent, Competitive Cost, Incredible IT Service
                    Infrastructure
                  </h2>
                </div>
                <div className="row gap-40">
                  <div className="col-md-6">
                    <div className="service-item style-three">
                      <div className="icon">
                        <i className="flaticon-trophy" />
                      </div>
                      <h4>
                        <Link legacyBehavior href="service-details">
                          Awards Winning Company
                        </Link>
                      </h4>
                      <p>
                        Sed ut perspiciat unde omnis este natus error sit
                        voluptatem accusantium doloremque
                      </p>
                      <Link legacyBehavior href="/service-details">
                        <a className="read-more">
                          Read More <i className="far fa-arrow-right" />
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="service-item style-three">
                      <div className="icon">
                        <i className="flaticon-pie-chart" />
                      </div>
                      <h4>
                        <Link legacyBehavior href="service-details">
                          Startup IT Solution &amp; Business Dev
                        </Link>
                      </h4>
                      <p>
                        Sed ut perspiciat unde omnis este natus error sit
                        voluptatem accusantium doloremque
                      </p>
                      <Link legacyBehavior href="/service-details">
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
        </div>
        <div className="about-bg-shape">
          <img src="assets/images/background/about-bg-shape.png" alt="About" />
        </div>
      </section>
      {/* About Area end */}
      {/* What We Provide Area Start */}
      <section className="what-we-provide rel z-1">
        <div className="container">
          <div className="section-title text-center mb-55 wow fadeInUp delay-0-2s">
            <span className="sub-title mb-10">What We Provides</span>
            <h2>Digital Core Services</h2>
          </div>
          <Slider {...serviceThreeSlider} className="service-three-slider">
            <div className="service-item-three wow fadeInUp delay-0-2s">
              <div className="image">
                <img
                  src="assets/images/services/service-three1.jpg"
                  alt="Service"
                />
                <a
                  className="plus"
                  href="assets/images/services/service-three1.jpg"
                >
                  <i className="fal fa-plus" />
                </a>
              </div>
              <div className="content">
                <div className="top-part">
                  <span className="number">01</span>
                  <div className="icon">
                    <i className="flaticon-coding-1" />
                  </div>
                  <h4>
                    <Link legacyBehavior href="service-details">
                      Custom Software Development
                    </Link>
                  </h4>
                </div>
                <div className="bottom-part">
                  <p>
                    Sed perspiciat unde omnis esteo natus sit voluptatem ways
                  </p>
                  <Link legacyBehavior href="/service-details">
                    <a className="read-more">
                      Read More <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="service-item-three active wow fadeInUp delay-0-4s">
              <div className="image">
                <img
                  src="assets/images/services/service-three2.jpg"
                  alt="Service"
                />
                <a
                  className="plus"
                  href="assets/images/services/service-three2.jpg"
                >
                  <i className="fal fa-plus" />
                </a>
              </div>
              <div className="content">
                <div className="top-part">
                  <span className="number">02</span>
                  <div className="icon">
                    <i className="flaticon-layers" />
                  </div>
                  <h4>
                    <Link legacyBehavior href="service-details">
                      Web Design (UI/UX) &amp; Development
                    </Link>
                  </h4>
                </div>
                <div className="bottom-part">
                  <p>
                    Sed perspiciat unde omnis esteo natus sit voluptatem ways
                  </p>
                  <Link legacyBehavior href="/service-details">
                    <a className="read-more">
                      Read More <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="service-item-three wow fadeInUp delay-0-6s">
              <div className="image">
                <img
                  src="assets/images/services/service-three3.jpg"
                  alt="Service"
                />
                <a
                  className="plus"
                  href="assets/images/services/service-three3.jpg"
                >
                  <i className="fal fa-plus" />
                </a>
              </div>
              <div className="content">
                <div className="top-part">
                  <span className="number">03</span>
                  <div className="icon">
                    <i className="flaticon-cyber-security-1" />
                  </div>
                  <h4>
                    <Link legacyBehavior href="service-details">
                      Cyber Security and IT Management
                    </Link>
                  </h4>
                </div>
                <div className="bottom-part">
                  <p>
                    Sed perspiciat unde omnis esteo natus sit voluptatem ways
                  </p>
                  <Link legacyBehavior href="/service-details">
                    <a className="read-more">
                      Read More <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="service-item-three wow fadeInUp delay-0-2s">
              <div className="image">
                <img
                  src="assets/images/services/service-three1.jpg"
                  alt="Service"
                />
                <a
                  className="plus"
                  href="assets/images/services/service-three1.jpg"
                >
                  <i className="fal fa-plus" />
                </a>
              </div>
              <div className="content">
                <div className="top-part">
                  <span className="number">01</span>
                  <div className="icon">
                    <i className="flaticon-coding-1" />
                  </div>
                  <h4>
                    <Link legacyBehavior href="service-details">
                      Custom Software Development
                    </Link>
                  </h4>
                </div>
                <div className="bottom-part">
                  <p>
                    Sed perspiciat unde omnis esteo natus sit voluptatem ways
                  </p>
                  <Link legacyBehavior href="/service-details">
                    <a className="read-more">
                      Read More <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="service-item-three active">
              <div className="image">
                <img
                  src="assets/images/services/service-three2.jpg"
                  alt="Service"
                />
                <a
                  className="plus"
                  href="assets/images/services/service-three2.jpg"
                >
                  <i className="fal fa-plus" />
                </a>
              </div>
              <div className="content">
                <div className="top-part">
                  <span className="number">02</span>
                  <div className="icon">
                    <i className="flaticon-layers" />
                  </div>
                  <h4>
                    <Link legacyBehavior href="service-details">
                      Web Design (UI/UX) &amp; Development
                    </Link>
                  </h4>
                </div>
                <div className="bottom-part">
                  <p>
                    Sed perspiciat unde omnis esteo natus sit voluptatem ways
                  </p>
                  <Link legacyBehavior href="/service-details">
                    <a className="read-more">
                      Read More <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="service-item-three">
              <div className="image">
                <img
                  src="assets/images/services/service-three3.jpg"
                  alt="Service"
                />
                <a
                  className="plus"
                  href="assets/images/services/service-three3.jpg"
                >
                  <i className="fal fa-plus" />
                </a>
              </div>
              <div className="content">
                <div className="top-part">
                  <span className="number">03</span>
                  <div className="icon">
                    <i className="flaticon-cyber-security-1" />
                  </div>
                  <h4>
                    <Link legacyBehavior href="service-details">
                      Cyber Security and IT Management
                    </Link>
                  </h4>
                </div>
                <div className="bottom-part">
                  <p>
                    Sed perspiciat unde omnis esteo natus sit voluptatem ways
                  </p>
                  <Link legacyBehavior href="/service-details">
                    <a className="read-more">
                      Read More <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/* What We Provide Area End */}
      {/* Consultations Area start */}
      <section className="consultations-area pt-75 rpt-45 rel z-1">
        <div className="container container-1440">
          <div className="row no-gap align-items-end">
            <div className="col-xl-6">
              <div className="consultations-content mt-55 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-30">
                  <span className="sub-title mb-15">
                    Need Any Consultations ?
                  </span>
                  <h2>We’re Ready to Growth IT Business</h2>
                </div>
                <div
                  className="consultations-bottom bgc-secondary text-white bgs-cover p-80 py-40"
                  style={{
                    backgroundImage:
                      "url(assets/images/about/consultations-bg.png)",
                  }}
                >
                  <ul className="list-style-one mb-20">
                    <li>Bringing new IT solutions to the market</li>
                    <li>
                      To be included the list of the best 100 IT companies
                    </li>
                  </ul>
                  <div className="about-btns">
                    <Link legacyBehavior href="/about">
                      <a className="theme-btn mt-15">
                        Get Free Quote <i className="fas fa-long-arrow-right" />
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
            <div className="col-xl-6">
              <div className="consultations-video mt-55 wow fadeInRight delay-0-2s">
                <img
                  src="assets/images/about/consultations.jpg"
                  alt="Consultations"
                />
                <a
                  href="https://www.youtube.com/watch?v=9Y7ma241N8k"
                  className="mfp-iframe video-play"
                >
                  <i className="fas fa-play" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Consultations Area end */}
      {/* Statistics Area start */}
      <section className="statistics-area-three pt-130 rpt-100 pb-100 rpb-80 text-white bgc-gray">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="row rmb-35">
                <div className="col-xl-4 col-sm-6">
                  <div className="counter-item-three counter-text-wrap wow fadeInDown delay-0-3s">
                    <i className="flaticon-target" />
                    <span
                      className="count-text plus"
                      data-speed={3000}
                      data-stop={2563}
                    >
                      <Counter end={2563} />
                    </span>
                    <span className="counter-title">Project Complate</span>
                  </div>
                </div>
                <div className="col-xl-4 col-sm-6">
                  <div className="counter-item-three counter-text-wrap mt-20 wow fadeInUp delay-0-3s">
                    <i className="flaticon-target-audience" />
                    <span
                      className="count-text percent"
                      data-speed={3000}
                      data-stop="98.9"
                    >
                      <Counter end={98.9} decimals={1} />
                    </span>
                    <span className="counter-title">Clinets Happy</span>
                  </div>
                </div>
                <div className="col-xl-4 col-sm-6">
                  <div className="counter-item-three counter-text-wrap wow fadeInDown delay-0-3s">
                    <i className="flaticon-customer-experience" />
                    <span
                      className="count-text plus"
                      data-speed={3000}
                      data-stop="35.6"
                    >
                      <Counter end={35.6} decimals={1} />
                    </span>
                    <span className="counter-title">Years Experience</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="statistics-two-content mb-30 rmb-0 wow fadeInUp delay-0-2s">
                <div className="section-title mb-30">
                  <h3>
                    Adventz Is Partnered With 10k+ Fastest Growing Companies
                    From 2010
                  </h3>
                </div>
                <p>
                  Egestas dictum lectus diam commodo. Et tristique nunc faucibus
                  sit tortor commodo aliquet commodo quam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Statistics Area end */}
      {/* Project Area Two Start */}
      <section className="project-area-three rel z-2">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="project-item-two wow fadeInUp delay-0-2s">
                <img
                  src="assets/images/projects/project-two1.jpg"
                  alt="Projects"
                />
                <div className="content">
                  <a
                    className="plus"
                    href="assets/images/projects/project-two1.jpg"
                  >
                    <i className="fal fa-plus" />
                  </a>
                  <h4>
                    <Link legacyBehavior href="service-details">
                      Mobile Application Development
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="project-item-two wow fadeInUp delay-0-4s">
                <img
                  src="assets/images/projects/project-two2.jpg"
                  alt="Projects"
                />
                <div className="content">
                  <a
                    className="plus"
                    href="assets/images/projects/project-two2.jpg"
                  >
                    <i className="fal fa-plus" />
                  </a>
                  <h4>
                    <Link legacyBehavior href="service-details">
                      Mobile Application Development
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="project-item-two wow fadeInUp delay-0-6s">
                <img
                  src="assets/images/projects/project-two3.jpg"
                  alt="Projects"
                />
                <div className="content">
                  <a
                    className="plus"
                    href="assets/images/projects/project-two3.jpg"
                  >
                    <i className="fal fa-plus" />
                  </a>
                  <h4>
                    <Link legacyBehavior href="service-details">
                      Mobile Application Development
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="project-item-two wow fadeInUp delay-0-8s">
                <img
                  src="assets/images/projects/project-two4.jpg"
                  alt="Projects"
                />
                <div className="content">
                  <a
                    className="plus"
                    href="assets/images/projects/project-two4.jpg"
                  >
                    <i className="fal fa-plus" />
                  </a>
                  <h4>
                    <Link legacyBehavior href="service-details">
                      Mobile Application Development
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Project Area Two End */}
      {/* Services Area Three start */}
      <section className="services-area-three py-100 rpy-70 rel z-1">
        <div className="container">
          <div className="row gap-100 align-items-center">
            <div className="col-lg-5">
              <div className="services-content-three mb-30 rmb-65 wow fadeInUp delay-0-2s">
                <div className="section-title mb-30">
                  <span className="sub-title mb-15">Amazing Services</span>
                  <h2>We Provide Best IT Services to Growth you Business</h2>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus sit voluptatem
                  accusantium doloremque laudantium totam rem aperiame aque ipsa
                  quae abillo inventore veritatis etuas
                </p>
                <ul className="list-style-one pt-5">
                  <li>Comprehensive UI/UX Assessment</li>
                  <li>Deep Contextual Research and 360° Planning</li>
                  <li>Wireframing &amp; Prototyping</li>
                </ul>
                <Link legacyBehavior href="/services">
                  <a className="theme-btn mt-45">
                    View All Services <i className="fas fa-long-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="row">
                <div className="col-sm-6">
                  <div className="service-item-four wow fadeInUp delay-0-2s">
                    <div className="icon">
                      <i className="flaticon-networking" />
                    </div>
                    <h4>
                      <Link legacyBehavior href="service-details">
                        Digital Consulting
                      </Link>
                    </h4>
                    <p>
                      On the other hand denounce withteous indignations dislike
                      beguilede demoralized
                    </p>
                  </div>
                  <div className="service-item-four wow fadeInUp delay-0-2s">
                    <div className="icon">
                      <i className="flaticon-app-development" />
                    </div>
                    <h4>
                      <Link legacyBehavior href="service-details">
                        Apps Solutions
                      </Link>
                    </h4>
                    <p>
                      On the other hand denounce withteous indignations dislike
                      beguilede demoralized
                    </p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="service-item-four mt-60 wow fadeInUp delay-0-4s">
                    <div className="icon">
                      <i className="flaticon-coding" />
                    </div>
                    <h4>
                      <Link legacyBehavior href="service-details">
                        UX/UI Strategy
                      </Link>
                    </h4>
                    <p>
                      On the other hand denounce withteous indignations dislike
                      beguilede demoralized
                    </p>
                  </div>
                  <div className="service-item-four wow fadeInUp delay-0-4s">
                    <div className="icon">
                      <i className="flaticon-seo" />
                    </div>
                    <h4>
                      <Link legacyBehavior href="service-details">
                        Cyber Security
                      </Link>
                    </h4>
                    <p>
                      On the other hand denounce withteous indignations dislike
                      beguilede demoralized
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="servcies-bg-shape">
          <img src="assets/images/shapes/services-bg-shape.png" alt="Shape" />
        </div>
      </section>
      {/* Services Area Three end */}
      {/* Contact Form Section Start */}
      <section
        className="contact-form-area py-130 rpy-100 bgs-cover"
        style={{
          backgroundImage: "url(assets/images/background/contact-form-bg.jpg)",
        }}
      >
        <div className="container">
          <div className="row gap-100 align-items-center">
            <div className="col-lg-7">
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
            <div className="col-lg-5">
              <div className="contact-info-wrap wow fadeInLeft delay-0-2s">
                <div className="section-title mb-40">
                  <span className="sub-title mb-10">Need Consultations ?</span>
                  <h2>Have A Project? We Would Love To Hear From You.</h2>
                </div>
                <div className="contact-info-part">
                  <div className="contact-info-item">
                    <div className="icon">
                      <i className="far fa-map-marked-alt" />
                    </div>
                    <div className="content">
                      <span>Location</span>
                      <h5>55 Main Street, New York</h5>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <div className="icon">
                      <i className="far fa-envelope-open-text" />
                    </div>
                    <div className="content">
                      <span>Email Us</span>
                      <h5>
                        <a href="mailto:support@gmail.com">support@gmail.com</a>
                      </h5>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <div className="icon">
                      <i className="far fa-phone" />
                    </div>
                    <div className="content">
                      <span>Hotline</span>
                      <h5>
                        <a href="calto:+000(123)45688">+000 (123) 456 88</a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Form Section End */}
      {/* Testimonials Area Three Start */}
      <section className="testimonials-three-area py-130 rpy-100">
        <div className="container">
          <div className="row gap-80 align-items-center">
            <div className="col-xl-7 col-lg-6">
              <div className="testimonials-three-image rmb-55 wow fadeInLeft delay-0-2s">
                <img
                  src="assets/images/testimonials/testimonials-three.png"
                  alt="Testimonials"
                />
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="testimonials-three-wrap wow fadeInRight delay-0-2s">
                <div className="section-title mb-45">
                  <span className="sub-title mb-10">Our Testimonials</span>
                  <h2>What Our Clients Say About Solutions</h2>
                </div>
                <Slider
                  {...testimonialThreeSlider}
                  className="testimonial-three-slider"
                >
                  <div className="testimonial-item">
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
                        Sed ut perspiciatis unde omnis iste natus voluptatem
                        accus antiume dolorem queauy antium totam aperiam eaque
                        quaey veritatis vitaec
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
                  <div className="testimonial-item">
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
                        On the other hand denounce righteous indignations and
                        dislike men who beguiled and demoralized by the charms
                        of pleasure moment blinded foresee
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
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials Area Three End */}
      {/* Blog Area Two start */}
      <section className="blog-area-three pb-70 rpb-40 rel z-1">
        <div className="container">
          <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
            <span className="sub-title mb-10">Our Blog &amp; News</span>
            <h2>Latest Blog, New &amp; Articles</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="blog-item style-three wow fadeInUp delay-0-2s">
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
            <div className="col-lg-6">
              <div className="blog-item style-three wow fadeInUp delay-0-4s">
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
                      By <a href="#">C. Hamilton</a>
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
            <div className="col-lg-6">
              <div className="blog-item style-three wow fadeInUp delay-0-2s">
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
            <div className="col-lg-6">
              <div className="blog-item style-three wow fadeInUp delay-0-4s">
                <div className="image">
                  <img src="assets/images/blog/blog4.jpg" alt="Blog" />
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
                      DevFest For Ukraine Charity Conference The Future
                    </Link>
                  </h4>
                  <div className="author-more">
                    <span className="author">
                      By <a href="#">Adam M.</a>
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
export default Index3;
