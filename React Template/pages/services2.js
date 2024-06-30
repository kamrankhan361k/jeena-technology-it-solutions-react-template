import PageBanner from "@/components/PageBanner";
import Layout from "@/layout";
import TestimonialsSlider from "@/src/components/slider/TestimonialsSlider";
import { serviceThreeSlider } from "@/src/sliderProps";
import dynamic from "next/dynamic";
import Link from "next/link";
import Slider from "react-slick";

const Counter = dynamic(() => import("@/src/components/Counter"), {
  ssr: false,
});

const Service2 = () => {
  return (
    <Layout>
      <PageBanner pageName={"Service"} pageTitle="Services Two" />
      <section className="services-area-three overflow-hidden pt-130 rpt-100 pb-100 rpb-70 rel z-1">
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
                  <div className="feature-item style-two mt-25 wow fadeInUp delay-0-2s">
                    <div className="icon">
                      <i className="flaticon-trust" />
                    </div>
                    <Link legacyBehavior href="service-details">
                      <h4>Trusted Partner</h4>
                    </Link>
                    <p>
                      With over 20 year of experience 850+ employees flexion
                    </p>
                    <Link legacyBehavior href="/service-details">
                      <a className="more-btn">
                        <i className="far fa-angle-right" />
                      </a>
                    </Link>
                  </div>
                  <div className="feature-item style-two wow fadeInUp delay-0-2s">
                    <div className="icon">
                      <i className="flaticon-social-media" />
                    </div>
                    <Link legacyBehavior href="service-details">
                      <h4>Digital Marketing</h4>
                    </Link>
                    <p>
                      With over 20 year of experience 850+ employees flexion
                    </p>
                    <Link legacyBehavior href="/service-details">
                      <a className="more-btn">
                        <i className="far fa-angle-right" />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="feature-item style-two wow fadeInDown delay-0-2s">
                    <div className="icon">
                      <i className="flaticon-technical-support" />
                    </div>
                    <Link legacyBehavior href="service-details">
                      <h4>Technical Support</h4>
                    </Link>
                    <p>
                      With over 20 year of experience 850+ employees flexion
                    </p>
                    <Link legacyBehavior href="/service-details">
                      <a className="more-btn">
                        <i className="far fa-angle-right" />
                      </a>
                    </Link>
                  </div>
                  <div className="feature-item style-two mt-25 wow fadeInDown delay-0-2s">
                    <div className="icon">
                      <i className="flaticon-brainstorming" />
                    </div>
                    <Link legacyBehavior href="service-details">
                      <h4>IT Consulting</h4>
                    </Link>
                    <p>
                      With over 20 year of experience 850+ employees flexion
                    </p>
                    <Link legacyBehavior href="/service-details">
                      <a className="more-btn">
                        <i className="far fa-angle-right" />
                      </a>
                    </Link>
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
      {/* Statistics Area start */}
      <section
        className="statistics-area-four text-white bgs-cover pt-80 pb-20"
        style={{
          backgroundImage: "url(assets/images/background/statistics-three.jpg)",
        }}
      >
        <div className="container">
          <div className="row align-items-xl-start align-items-center">
            <div className="col-xl-5 col-lg-6">
              <div className="statistics-content mb-55 wow fadeInUp delay-0-2s">
                <div className="section-title mb-30">
                  <span className="sub-title mb-15">Company Statistics</span>
                  <h2>Learn About Our Comapny Statistics</h2>
                </div>
                <Link legacyBehavior href="/about">
                  <a className="read-more">
                    Learn More <i className="fas fa-long-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6">
              <div className="row">
                <div className="col-xl-3 col-6">
                  <div className="counter-item counter-text-wrap wow fadeInDown delay-0-3s">
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
                <div className="col-xl-3 col-6">
                  <div className="counter-item counter-text-wrap wow fadeInUp delay-0-3s">
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
                <div className="col-xl-3 col-6">
                  <div className="counter-item counter-text-wrap wow fadeInDown delay-0-3s">
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
                <div className="col-xl-3 col-6">
                  <div className="counter-item counter-text-wrap wow fadeInUp delay-0-3s">
                    <i className="flaticon-medal" />
                    <span
                      className="count-text k-plus"
                      data-speed={3000}
                      data-stop={63}
                    >
                      <Counter end={63} />
                    </span>
                    <span className="counter-title">Award Winning</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Statistics Area end */}
      {/* What We Provide Area Start */}
      <section className="what-we-provide overflow-hidden py-130 rpy-100 rel z-1">
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
        <div className="about-bg-shape">
          <img src="assets/images/background/what-we-provide.png" alt="Shape" />
        </div>
      </section>
      {/* What We Provide Area End */}
      {/* Pricing Plan Area start */}
      <section className="price-plan-area overflow-hidden bgc-lighter pt-130 rpt-100 pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="section-title text-center mb-55 wow fadeInUp delay-0-2s">
            <span className="sub-title mb-15">Amazing Pricing Plan</span>
            <h2>Affordable Pricing Packages</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-md-6">
              <div className="pricing-plan-item wow fadeInUp delay-0-2s">
                <span className="badge">Best Package</span>
                <h4 className="title">Basic Plan</h4>
                <span className="price-count">5 Services Included</span>
                <span className="price">29.85</span>
                <Link legacyBehavior href="/pricing">
                  <a className="theme-btn style-two">
                    Choose Package <i className="fas fa-long-arrow-right" />
                  </a>
                </Link>
                <h5>This Plan Included :</h5>
                <ul>
                  <li>
                    <a href="#">Premium Quality Supports (24/7)</a>
                  </li>
                  <li>
                    <a href="#">IT Consultations (Business Growth)</a>
                  </li>
                  <li>
                    <a href="#">Web Design &amp; Development</a>
                  </li>
                  <li>
                    <a href="#">Search Engine Optimization (SEO )</a>
                  </li>
                  <li>
                    <a href="#">User &amp; Market Research</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="pricing-plan-item wow fadeInUp delay-0-4s">
                <span className="badge">Best Package</span>
                <h4 className="title">standard Plan</h4>
                <span className="price-count">7 Services Included</span>
                <span className="price">49.64</span>
                <Link legacyBehavior href="/pricing">
                  <a className="theme-btn style-two">
                    Choose Package <i className="fas fa-long-arrow-right" />
                  </a>
                </Link>
                <h5>This Plan Included :</h5>
                <ul>
                  <li>
                    <a href="#">Premium Quality Supports (24/7)</a>
                  </li>
                  <li>
                    <a href="#">IT Consultations (Business Growth)</a>
                  </li>
                  <li>
                    <a href="#">Web Design &amp; Development</a>
                  </li>
                  <li>
                    <a href="#">Search Engine Optimization (SEO )</a>
                  </li>
                  <li>
                    <a href="#">User &amp; Market Research</a>
                  </li>
                  <li>
                    <a href="#">UX/UI Strategy (Design &amp; Develop)</a>
                  </li>
                  <li>
                    <a href="#">Product Engineering</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="pricing-plan-item wow fadeInUp delay-0-6s">
                <span className="badge">Best Package</span>
                <h4 className="title">Golden Package</h4>
                <span className="price-count">7 Services Included</span>
                <span className="price">98.73</span>
                <Link legacyBehavior href="/pricing">
                  <a className="theme-btn style-two">
                    Choose Package <i className="fas fa-long-arrow-right" />
                  </a>
                </Link>
                <h5>This Plan Included :</h5>
                <ul>
                  <li>
                    <a href="#">Premium Quality Supports (24/7)</a>
                  </li>
                  <li>
                    <a href="#">IT Consultations (Business Growth)</a>
                  </li>
                  <li>
                    <a href="#">Web Design &amp; Development</a>
                  </li>
                  <li>
                    <a href="#">Search Engine Optimization (SEO )</a>
                  </li>
                  <li>
                    <a href="#">User &amp; Market Research</a>
                  </li>
                  <li>
                    <a href="#">UX/UI Strategy (Design &amp; Develop)</a>
                  </li>
                  <li>
                    <a href="#">Product Engineering</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="price-shapes">
          <img
            className="shape one wow fadeInLeft delay-0-5s"
            src="assets/images/shapes/price-left.png"
            alt="Shape"
          />
          <img
            className="shape two w-50"
            src="assets/images/shapes/price-right.png"
            alt="Shape"
          />
        </div>
      </section>
      {/* Pricing Plan Area end */}
      {/* Testimonials Area Two start */}
      <section className="testimonials-area-two py-130 rpy-100 rel z-1">
        <div className="container">
          <TestimonialsSlider />
        </div>
      </section>
    </Layout>
  );
};
export default Service2;
