import PageBanner from "@/components/PageBanner";
import Layout from "@/layout";
import Link from "next/link";

const ProjectGrid = () => {
  return (
    <Layout>
      <PageBanner pageName={"Project Grid"} />
      <section className="project-grid-area rel z-2 py-130 rpy-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title text-center mb-50 wow fadeInUp delay-0-2s">
                <h2>Let’s Insides About Recent Project Best Work Gallery</h2>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium totam rem aperiam eaque ipsa
                  quae abillo inventore veritatis et quasi architecto beatae
                  vitae .
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="project-grid-item wow fadeInUp delay-0-2s">
                <div className="image">
                  <img
                    src="assets/images/projects/project-grid1.jpg"
                    alt="Project Grid"
                  />
                  <a
                    className="plus"
                    href="assets/images/projects/project-grid1.jpg"
                  />
                </div>
                <div className="content">
                  <h4>
                    <Link legacyBehavior href="project-details">
                      Web Development
                    </Link>
                  </h4>
                  <Link legacyBehavior href="/project-details">
                    <a className="detail-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="project-grid-item wow fadeInUp delay-0-4s">
                <div className="image">
                  <img
                    src="assets/images/projects/project-grid2.jpg"
                    alt="Project Grid"
                  />
                  <a
                    className="plus"
                    href="assets/images/projects/project-grid2.jpg"
                  />
                </div>
                <div className="content">
                  <h4>
                    <Link legacyBehavior href="project-details">
                      Mobile Applications
                    </Link>
                  </h4>
                  <Link legacyBehavior href="/project-details">
                    <a className="detail-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="project-grid-item wow fadeInUp delay-0-6s">
                <div className="image">
                  <img
                    src="assets/images/projects/project-grid3.jpg"
                    alt="Project Grid"
                  />
                  <a
                    className="plus"
                    href="assets/images/projects/project-grid3.jpg"
                  />
                </div>
                <div className="content">
                  <h4>
                    <Link legacyBehavior href="project-details">
                      IT Consulting
                    </Link>
                  </h4>
                  <Link legacyBehavior href="/project-details">
                    <a className="detail-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="project-grid-item wow fadeInUp delay-0-2s">
                <div className="image">
                  <img
                    src="assets/images/projects/project-grid4.jpg"
                    alt="Project Grid"
                  />
                  <a
                    className="plus"
                    href="assets/images/projects/project-grid4.jpg"
                  />
                </div>
                <div className="content">
                  <h4>
                    <Link legacyBehavior href="project-details">
                      Business Analysis
                    </Link>
                  </h4>
                  <Link legacyBehavior href="/project-details">
                    <a className="detail-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="project-grid-item wow fadeInUp delay-0-4s">
                <div className="image">
                  <img
                    src="assets/images/projects/project-grid5.jpg"
                    alt="Project Grid"
                  />
                  <a
                    className="plus"
                    href="assets/images/projects/project-grid5.jpg"
                  />
                </div>
                <div className="content">
                  <h4>
                    <Link legacyBehavior href="project-details">
                      UX/UI Strategy
                    </Link>
                  </h4>
                  <Link legacyBehavior href="/project-details">
                    <a className="detail-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="project-grid-item wow fadeInUp delay-0-6s">
                <div className="image">
                  <img
                    src="assets/images/projects/project-grid6.jpg"
                    alt="Project Grid"
                  />
                  <a
                    className="plus"
                    href="assets/images/projects/project-grid6.jpg"
                  />
                </div>
                <div className="content">
                  <h4>
                    <Link legacyBehavior href="project-details">
                      Cyber Security
                    </Link>
                  </h4>
                  <Link legacyBehavior href="/project-details">
                    <a className="detail-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="project-grid-item wow fadeInUp delay-0-2s">
                <div className="image">
                  <img
                    src="assets/images/projects/project-grid7.jpg"
                    alt="Project Grid"
                  />
                  <a
                    className="plus"
                    href="assets/images/projects/project-grid7.jpg"
                  />
                </div>
                <div className="content">
                  <h4>
                    <Link legacyBehavior href="project-details">
                      Market Research
                    </Link>
                  </h4>
                  <Link legacyBehavior href="/project-details">
                    <a className="detail-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="project-grid-item wow fadeInUp delay-0-4s">
                <div className="image">
                  <img
                    src="assets/images/projects/project-grid8.jpg"
                    alt="Project Grid"
                  />
                  <a
                    className="plus"
                    href="assets/images/projects/project-grid8.jpg"
                  />
                </div>
                <div className="content">
                  <h4>
                    <Link legacyBehavior href="project-details">
                      Product Engineering
                    </Link>
                  </h4>
                  <Link legacyBehavior href="/project-details">
                    <a className="detail-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="project-grid-item wow fadeInUp delay-0-6s">
                <div className="image">
                  <img
                    src="assets/images/projects/project-grid9.jpg"
                    alt="Project Grid"
                  />
                  <a
                    className="plus"
                    href="assets/images/projects/project-grid9.jpg"
                  />
                </div>
                <div className="content">
                  <h4>
                    <Link legacyBehavior href="project-details">
                      Software Engineering
                    </Link>
                  </h4>
                  <Link legacyBehavior href="/project-details">
                    <a className="detail-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="project-more-btn text-center">
            <Link legacyBehavior href="/project-grid">
              <a className="theme-btn style-two wow fadeInUp delay-0-2s">
                View More Gallery <i className="fas fa-long-arrow-right" />
              </a>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default ProjectGrid;
