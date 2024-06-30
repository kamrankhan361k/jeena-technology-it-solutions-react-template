import Link from "next/link";
import { Fragment } from "react";

const E404 = () => {
  return (
    <Fragment>
      <section className="error-page-area py-80">
        <div className="container">
          <div className="error-page-content text-center">
            <div className="logo w-75 mb-75 rmb-35 mx-auto wow fadeInUp delay-0-2s">
              <Link legacyBehavior href="/">
                <a>
                  <img
                    src="assets/images/logos/logo-big.png"
                    alt="Logo"
                    title="Logo"
                  />
                </a>
              </Link>
            </div>
            <div className="image mb-80 rmb-55 wow fadeInUp delay-0-4s">
              <img src="assets/images/background/404.png" alt="Error" />
            </div>
            <div className="row justify-content-center wow fadeInUp delay-0-2s">
              <div className="col-xl-8 col-lg-10">
                <div className="section-title mb-20">
                  <h2>OPPS! This Pages Are Can’t Be Found </h2>
                </div>
                <p>
                  On the other hand, we denounce with righteous indignation and
                  dislike men who are so beguiled and demoralized by the charms
                  of pleasure of the moment so blinded
                </p>
              </div>
            </div>
            <div className="btn-social pt-15 wow fadeInUp delay-0-4s">
              <Link legacyBehavior legacyBehavior href="/">
                <a className="theme-btn mb-30 mx-2">
                  Go to Home <i className="fas fa-long-arrow-right" />
                </a>
              </Link>
              <div className="social-style-two mb-30 mx-2">
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
        </div>
      </section>
    </Fragment>
  );
};
export default E404;
