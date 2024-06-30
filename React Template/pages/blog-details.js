import PageBanner from "@/components/PageBanner";
import Layout from "@/layout";
import Link from "next/link";

const BlogDetails = () => {
  return (
    <Layout>
      <PageBanner pageName={"Blog Details"} />
      <section className="blog-details-area py-130 rpy-100">
        <div className="container">
          <div className="row gap-60">
            <div className="col-lg-8">
              <div className="blog-details-content wow fadeInUp delay-0-2s">
                <div className="image mb-40">
                  <img
                    src="assets/images/blog/blog-details.jpg"
                    alt="Blog Single"
                  />
                </div>
                <div className="blog-meta-two pb-15">
                  <Link legacyBehavior href="/blog">
                    <a className="tag">UX/UI Strategy</a>
                  </Link>
                  <Link legacyBehavior href="/blog">
                    <a className="author">Kenneth S. Denman</a>
                  </Link>
                  <a className="date" href="#">
                    <i className="far fa-calendar-alt" /> June 26, 2022
                  </a>
                </div>
                <div className="title mb-20">
                  <h3>
                    How To Use Google CrUX To Analyze And Compare The
                    Performance Of JS Frameworks
                  </h3>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium totam aperiam eaque ipsa
                  quae ab illo inventore veritatis et quasi architecto beatae
                  vitae dicta sunt explicabo. Nemo enim luptatem quia voluptas
                  sit aspernatur aut odit aut fugit, sed quia consequuntur magni
                  dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
                  quisquam est, qui dolorem ipsum quia dolor sit amet,
                  consectetur, adipisci velit, sed quia non numquam eius modi
                  tempora incidunt ut labore et dolore magnam aliquam quaerat
                  voluptatem. Ut enim ad minima veniam, quis nostrum
                  exercitationem ullam corporis suscipit laboriosam, nisi ut
                  aliquid ex ea commodi consequatur? Quis autem vel eum iure
                  reprehenderit qui in ea voluptate velit esse quam nihil
                  molestiae
                </p>
                <ul className="list-style-one pt-10 pb-40">
                  <li>Rethinking Server-Timing As Critical Monitoring</li>
                  <li>The Modern Way To Create And Host A WordPress Site</li>
                  <li>Focus On What Matters You Must De-Focus</li>
                </ul>
                <blockquote>
                  <div className="content">
                    <h4>
                      Smashing Podcast Episode Pauloag Conve Seen Overs Analyze
                      And Compare Performance Frameworks
                    </h4>
                    <span className="name">Rasalina Willamson</span>
                  </div>
                </blockquote>
                <div className="image mt-60 mb-30">
                  <img
                    src="assets/images/blog/blog-details-middle.jpg"
                    alt="Blog Details"
                  />
                </div>
                <h4>Summery &amp; Results</h4>
                <p>
                  So blinded by desire, that they cannot foresee the pain and
                  trouble that are bound to ensue; and equal blame belongs to
                  those who fail in their duty through weakness of will, which
                  is the same as saying through shrinking from toil and pain.
                  These cases are perfectly simple and easy to distinguish. In
                  free hour, when our power of choice is untrammelled and when
                  nothing prevents our being able
                </p>
              </div>
              <hr className="mt-50" />
              <div className="tag-share pt-25 pb-55 wow fadeInUp delay-0-2s">
                <div className="item">
                  <h5>Tags</h5>
                  <div className="tag-coulds">
                    <Link legacyBehavior href="blog">
                      Course
                    </Link>
                    <Link legacyBehavior href="blog">
                      Design
                    </Link>
                    <Link legacyBehavior href="blog">
                      marketing
                    </Link>
                  </div>
                </div>
                <div className="item">
                  <h5>Share :</h5>
                  <div className="social-style-three">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="admin-comment mb-40 wow fadeInUp delay-0-2s">
                <div className="comment-body">
                  <div className="author-thumb">
                    <img
                      src="assets/images/blog/admin-author.jpg"
                      alt="Author"
                    />
                  </div>
                  <div className="content">
                    <h4>Rasalina Wilimson</h4>
                    <p>
                      Quis autem vel eum iure reprehenderit qui in ea voluptate
                      velit esse quam pehiles molestiae consequatur vel illum
                      qui dolorem eum fugiat quo voluptas
                    </p>
                    <div className="social-style-three">
                      <Link legacyBehavior href="contact">
                        <i className="fab fa-facebook-f" />
                      </Link>
                      <Link legacyBehavior href="contact">
                        <i className="fab fa-twitter" />
                      </Link>
                      <Link legacyBehavior href="contact">
                        <i className="fab fa-instagram" />
                      </Link>
                      <Link legacyBehavior href="contact">
                        <i className="fab fa-behance" />
                      </Link>
                      <Link legacyBehavior href="contact">
                        <i className="fab fa-dribbble" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="next-prev-post py-40 wow fadeInUp delay-0-2s">
                <div className="post-item">
                  <div className="image">
                    <img src="assets/images/blog/post-prev.jpg" alt="Post" />
                  </div>
                  <div className="content">
                    <h5>
                      <Link legacyBehavior href="blog-details">
                        Build Group Chat Apps Vanilla Twilio Node
                      </Link>
                    </h5>
                    <span className="date">
                      <i className="far fa-calendar-alt" />
                      <a href="#">25 June 2022</a>
                    </span>
                  </div>
                </div>
                <div className="post-item">
                  <div className="image">
                    <img src="assets/images/blog/post-next.jpg" alt="Post" />
                  </div>
                  <div className="content">
                    <h5>
                      <Link legacyBehavior href="blog-details">
                        Expand Horiz to Desktop Wall Edition See
                      </Link>
                    </h5>
                    <span className="date">
                      <i className="far fa-calendar-alt" />
                      <a href="#">25 June 2022</a>
                    </span>
                  </div>
                </div>
              </div>
              <hr />
              <h4 className="comment-title mt-75 mb-25">People Comments</h4>
              <div className="comments">
                <div className="comment-body wow fadeInUp delay-0-2s">
                  <div className="author-thumb">
                    <img
                      src="assets/images/blog/comment-author1.jpg"
                      alt="Author"
                    />
                  </div>
                  <div className="content">
                    <h5>
                      John F. Medina{" "}
                      <a href="#" className="theme-btn style-two">
                        Reply <i className="fas fa-angle-double-right" />
                      </a>
                    </h5>
                    <span className="date">25 Feb 2022</span>
                    <p>
                      On the other hand, we denounce with righteous indignation
                      and dislike men who are beguiled and demoralized by the
                      charms of pleasure of the moment so blinded
                    </p>
                  </div>
                </div>
                <div className="comment-body wow fadeInUp delay-0-2s">
                  <div className="author-thumb">
                    <img
                      src="assets/images/blog/comment-author2.jpg"
                      alt="Author"
                    />
                  </div>
                  <div className="content">
                    <h5>
                      Patrick V. Spears{" "}
                      <a href="#" className="theme-btn style-two">
                        Reply <i className="fas fa-angle-double-right" />
                      </a>
                    </h5>
                    <span className="date">25 Feb 2022</span>
                    <p>
                      On the other hand, we denounce with righteous indignation
                      and dislike men who are beguiled and demoralized by the
                      charms of pleasure of the moment so blinded
                    </p>
                  </div>
                </div>
                <div className="comment-body wow fadeInUp delay-0-2s">
                  <div className="author-thumb">
                    <img
                      src="assets/images/blog/comment-author3.jpg"
                      alt="Author"
                    />
                  </div>
                  <div className="content">
                    <h5>
                      Kevin S. Larsen{" "}
                      <a href="#" className="theme-btn style-two">
                        Reply <i className="fas fa-angle-double-right" />
                      </a>
                    </h5>
                    <span className="date">25 Feb 2022</span>
                    <p>
                      On the other hand, we denounce with righteous indignation
                      and dislike men who are beguiled and demoralized by the
                      charms of pleasure of the moment so blinded
                    </p>
                  </div>
                </div>
              </div>
              <form
                onSubmit={(e) => e.preventDefault()}
                id="comment-form"
                className="comment-form bgc-lighter mt-80 wow fadeInUp delay-0-2s"
              >
                <h4>Leave a Message</h4>
                <p>Have any question? Ready to talk to us! </p>
                <div className="row mt-15">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="full-name"
                        name="full-name"
                        className="form-control"
                        defaultValue=""
                        placeholder="Full Name"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="blog-email"
                        name="blog-email"
                        className="form-control"
                        defaultValue=""
                        placeholder="Email Address"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="message">
                        <i className="fas fa-pencil-alt" />
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        className="form-control"
                        rows={4}
                        placeholder="Write Message"
                        required
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group mb-0">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="agreement"
                        />
                        <label className="form-check-label" htmlFor="agreement">
                          I Agree with the trams &amp; conditions
                        </label>
                      </div>
                      <button type="submit" className="theme-btn style-two">
                        Send Comment <i className="fas fa-arrow-right" />
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-4 col-md-7 col-sm-9">
              <div className="main-sidebar rmt-75">
                <div className="widget widget-search wow fadeInUp delay-0-2s">
                  <h4 className="widget-title">Search</h4>
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    action="#"
                    className="default-search-form"
                  >
                    <input type="text" placeholder="Find Keywords" required />
                    <button
                      type="submit"
                      className="searchbutton far fa-search"
                    />
                  </form>
                </div>
                <div className="widget widget-category wow fadeInUp delay-0-4s">
                  <h4 className="widget-title">Category</h4>
                  <ul>
                    <li>
                      <Link legacyBehavior href="blog">
                        Digital Solutions
                      </Link>{" "}
                      <span>(25)</span>
                    </li>
                    <li>
                      <Link legacyBehavior href="blog">
                        Saas Landing
                      </Link>{" "}
                      <span>(09)</span>
                    </li>
                    <li>
                      <Link legacyBehavior href="blog">
                        WordPress
                      </Link>{" "}
                      <span>(18)</span>
                    </li>
                    <li>
                      <Link legacyBehavior href="blog">
                        Graphics Design
                      </Link>{" "}
                      <span>(05)</span>
                    </li>
                    <li>
                      <Link legacyBehavior href="blog">
                        Business Consulting
                      </Link>{" "}
                      <span>(03)</span>
                    </li>
                    <li>
                      <Link legacyBehavior href="blog">
                        SEO Optimization
                      </Link>{" "}
                      <span>(04)</span>
                    </li>
                    <li>
                      <Link legacyBehavior href="blog">
                        Marketing
                      </Link>{" "}
                      <span>(05)</span>
                    </li>
                  </ul>
                </div>
                <div className="widget widget-recent-news wow fadeInUp delay-0-2s">
                  <h4 className="widget-title">Recent News</h4>
                  <ul>
                    <li>
                      <div className="image">
                        <img src="assets/images/widgets/news1.jpg" alt="News" />
                      </div>
                      <div className="content">
                        <h5>
                          <Link legacyBehavior href="blog-details">
                            Build Group Chat App With Vanilla JS Twilio Node
                          </Link>
                        </h5>
                        <span className="date">
                          <i className="far fa-calendar-alt" />
                          <a href="#">25 June 2022</a>
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="image">
                        <img src="assets/images/widgets/news2.jpg" alt="News" />
                      </div>
                      <div className="content">
                        <h5>
                          <Link legacyBehavior href="blog-details">
                            Expand Your Horiz Desktop Wallpapers Edition See
                          </Link>
                        </h5>
                        <span className="date">
                          <i className="far fa-calendar-alt" />
                          <a href="#">25 June 2022</a>
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="image">
                        <img src="assets/images/widgets/news3.jpg" alt="News" />
                      </div>
                      <div className="content">
                        <h5>
                          <Link legacyBehavior href="blog-details">
                            Manage Accessible Design System With Colorntes
                          </Link>
                        </h5>
                        <span className="date">
                          <i className="far fa-calendar-alt" />
                          <a href="#">25 June 2022</a>
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="widget widget-cta wow fadeInUp delay-0-2s">
                  <h4>Build Awesome Website/Template</h4>
                  <Link legacyBehavior href="/contact">
                    <a className="theme-btn style-two">
                      Contact Us <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                  <img src="assets/images/widgets/cta.png" alt="CTA" />
                  <img
                    className="cta-bg-line"
                    src="assets/images/widgets/cta-bg-line.png"
                    alt="CTA bg line"
                  />
                  <img
                    className="cta-bg-dots"
                    src="assets/images/widgets/cta-bg-dots.png"
                    alt="CTA bg Dots"
                  />
                </div>
                <div className="widget widget-tag-cloud wow fadeInUp delay-0-2s">
                  <h4 className="widget-title">Popular Tags</h4>
                  <div className="tag-coulds">
                    <Link legacyBehavior href="blog">
                      Design
                    </Link>
                    <Link legacyBehavior href="blog">
                      Landing
                    </Link>
                    <Link legacyBehavior href="blog">
                      software
                    </Link>
                    <Link legacyBehavior href="blog">
                      web
                    </Link>
                    <Link legacyBehavior href="blog">
                      education
                    </Link>
                    <Link legacyBehavior href="blog">
                      email marketing
                    </Link>
                    <Link legacyBehavior href="blog">
                      SEO
                    </Link>
                    <Link legacyBehavior href="blog">
                      development
                    </Link>
                    <Link legacyBehavior href="blog">
                      wordpress
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
export default BlogDetails;
