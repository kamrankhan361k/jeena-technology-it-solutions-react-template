import PageBanner from "@/components/PageBanner";
import Layout from "@/layout";
import Link from "next/link";

const ProjectDetails = () => {
  return (
    <Layout>
      <PageBanner pageName={"Project Details"} />
      <section className="project-details-area pt-130 rpt-100 pb-60 rpb-30">
        <div className="container">
          <div className="project-details-content">
            <div className="section-title mb-25">
              <h2>Web Design &amp; Development</h2>
            </div>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit seduia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modie tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur
            </p>
            <div className="image my-45">
              <img
                src="assets/images/projects/project-details.jpg"
                alt="Project Details"
              />
            </div>
            <div className="row justify-content-center">
              <div className="col-xl-10 col-lg-11">
                <h4>Project Information</h4>
                <div className="project-information mt-20">
                  <div className="project-info-item">
                    <span>Client Name</span>
                    <h5>Michael R. Robinson</h5>
                  </div>
                  <div className="project-info-item">
                    <span>Project Type</span>
                    <h5>IT Soultions</h5>
                  </div>
                  <div className="project-info-item">
                    <span>Start Date</span>
                    <h5>March 25, 2022</h5>
                  </div>
                  <div className="project-info-item">
                    <span>Location</span>
                    <h5>33 Main Street, USA</h5>
                  </div>
                  <div className="project-info-item">
                    <span>Project Durations</span>
                    <h5>2 Month 6 Days</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="section-title mt-60 mb-25">
              <h3>Project Challenge</h3>
            </div>
            <p>
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system, and expound the actual teachings of the
              great explorer of the truth, the master-builder of human
              happiness. No one rejects, dislikes, or avoids pleasure itself,
              because it is pleasure, but because those who do not know how to
              pursue pleasure rationally encounter consequences that are
              extremely painful. Nor again is there anyone who loves or pursues
              or desires to obtain pain of itself, because it is pain, but
              because occasionally circumstances occur in which toil and pain
              can procure him some great pleasure. To take a trivial example,
              which of us ever undertakes laborious physical exercise, except to
              obtain some advantage from it? But who has any right to find fault
              with a man who chooses to enjoy a pleasure that has no annoying
              consequences, or one who avoids a pain that produces no resultant
              pleasure
            </p>
            <div className="row mt-50">
              <div className="col-xl-3 col-lg-4 mb-30">
                <img
                  src="assets/images/projects/project-middle1.jpg"
                  alt="Project"
                />
              </div>
              <div className="col-xl-3 col-lg-4 mb-30">
                <img
                  src="assets/images/projects/project-middle2.jpg"
                  alt="Project"
                />
              </div>
              <div className="col-xl-3 col-lg-4 mb-30">
                <img
                  src="assets/images/projects/project-middle3.jpg"
                  alt="Project"
                />
              </div>
              <div className="col-xl-3 col-lg-4 mb-30">
                <img
                  src="assets/images/projects/project-middle4.jpg"
                  alt="Project"
                />
              </div>
            </div>
            <div className="section-title mt-20 mb-25">
              <h3>Project Results</h3>
            </div>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga. Et harum quidem rerum
              facilis est et expedita distinctio. Nam libero tempore, cum soluta
              nobis est eligendi optio cumque nihil impedit quo minus id quod
              maxime placeat facere possimus, omnis voluptas assumenda est,
              omnis dolor repellendus. Temporibus autem quibusdam et aut
              officiis debitis aut rerum necessitatibus saepe eveniet ut et
              voluptates repudiandae sint et molestiae non recusandae. Itaque
              earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
              voluptatibus maiores alias consequatur aut perferendis{" "}
            </p>
            <ul className="list-style-one pt-5">
              <li>Comprehensive UI/UX Assessment</li>
              <li>Deep Contextual Research and 360° Planning</li>
              <li>Wireframing &amp; Prototyping</li>
            </ul>
          </div>
        </div>
      </section>
      {/* Project Details Area end */}
      {/* Next Prev Project start */}
      <div className="next-prev-project pb-80 rpb-50">
        <div className="container">
          <hr />
          <div className="next-prev-service next-prev-project mt-80">
            <div className="next-prev-item wow fadeInLeft delay-0-2s">
              <div className="image">
                <img
                  src="assets/images/projects/project-prev.jpg"
                  alt="Project"
                />
                <Link legacyBehavior href="/project-details">
                  <a className="detail-btn">
                    <i className="far fa-angle-left" />
                  </a>
                </Link>
              </div>
              <div className="content">
                <h4>
                  <Link legacyBehavior href="project-details">
                    Cyber Security
                  </Link>
                </h4>
                <Link legacyBehavior href="/project-details">
                  <a className="category">IT Solutions</a>
                </Link>
              </div>
            </div>
            <Link legacyBehavior href="/project-grid">
              <a className="show-all" />
            </Link>
            <div className="next-prev-item wow fadeInRight delay-0-2s">
              <div className="content">
                <h4>
                  <Link legacyBehavior href="project-details">
                    UI/UX Strategy
                  </Link>
                </h4>
                <Link legacyBehavior href="/project-details">
                  <a className="category">IT Solutions</a>
                </Link>
              </div>
              <div className="image">
                <img
                  src="assets/images/projects/project-next.jpg"
                  alt="Project"
                />
                <Link legacyBehavior href="/project-details">
                  <a className="detail-btn">
                    <i className="far fa-angle-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default ProjectDetails;
