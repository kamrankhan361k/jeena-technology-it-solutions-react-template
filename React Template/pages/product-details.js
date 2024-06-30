import PageBanner from "@/components/PageBanner";
import Layout from "@/layout";
import { relatedProductSlider } from "@/src/sliderProps";
import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
import Slider from "react-slick";

const ProductDetails = () => {
  return (
    <Layout>
      <PageBanner pageName={"Product Details"} />
      <section className="product-details pt-130 rpt-100">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6">
              <Tab.Container defaultActiveKey={"preview1"}>
                <div className="product-details-images rmb-55 wow fadeInLeft delay-0-2s">
                  <Tab.Content className="tab-content preview-images">
                    <Tab.Pane
                      className="tab-pane fade preview-item"
                      eventKey="preview1"
                    >
                      <img
                        src="assets/images/shop/preview1.jpg"
                        alt="Perview"
                      />
                    </Tab.Pane>
                    <Tab.Pane
                      className="tab-pane fade preview-item"
                      eventKey="preview2"
                    >
                      <img
                        src="assets/images/shop/preview1.jpg"
                        alt="Perview"
                      />
                    </Tab.Pane>
                    <Tab.Pane
                      className="tab-pane fade preview-item"
                      eventKey="preview3"
                    >
                      <img
                        src="assets/images/shop/preview1.jpg"
                        alt="Perview"
                      />
                    </Tab.Pane>
                  </Tab.Content>
                  <Nav as="div" className="nav thumb-images rmb-20">
                    <Nav.Link
                      as="a"
                      href="#preview1"
                      eventKey="preview1"
                      className="thumb-item"
                    >
                      <img src="assets/images/shop/thumb1.jpg" alt="Thumb" />
                    </Nav.Link>
                    <Nav.Link
                      as="a"
                      href="#preview2"
                      eventKey="preview2"
                      className="thumb-item"
                    >
                      <img src="assets/images/shop/thumb2.jpg" alt="Thumb" />
                    </Nav.Link>
                    <Nav.Link
                      as="a"
                      href="#preview3"
                      eventKey="preview3"
                      className="thumb-item"
                    >
                      <img src="assets/images/shop/thumb3.jpg" alt="Thumb" />
                    </Nav.Link>
                  </Nav>
                </div>
              </Tab.Container>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="product-details-content wow fadeInRight delay-0-2s">
                <div className="section-title">
                  <h2>Business Card Design</h2>
                </div>
                <div className="ratting-price mb-30">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <span className="price">59.58</span>
                </div>
                <hr className="mb-25" />
                <p>
                  Doloremque laudantium, totam rem aperiam, eaque ipsa quae
                  abillo inventore veritatis quasi architecto beatae vitae dicta
                  sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                  aspernatur aut odit aut fugit, sed quia consequuntur magni
                  dolores eos qui ratiluptatem sequi nesciunt porro quisquam
                  est, qui dolorem
                </p>
                <hr className="mt-65" />
                <ul className="category-tags pt-10 pb-15">
                  <li>
                    <b>Category</b>
                    <span>:</span>
                    <Link legacyBehavior href="shop">
                      IT Consulting
                    </Link>
                    <Link legacyBehavior href="shop">
                      Website
                    </Link>
                    <Link legacyBehavior href="shop">
                      UX/UI Design
                    </Link>
                  </li>
                  <li>
                    <b>Tags</b>
                    <span>:</span>
                    <Link legacyBehavior href="shop">
                      Product
                    </Link>
                    <Link legacyBehavior href="shop">
                      Shop
                    </Link>
                    <Link legacyBehavior href="shop">
                      Store
                    </Link>
                  </li>
                </ul>
                <hr />
                <form
                  onSubmit={(e) => e.preventDefault()}
                  action="#"
                  className="add-to-cart pt-15"
                >
                  <input
                    type="number"
                    defaultValue={1}
                    min={1}
                    max={20}
                    onchange="if(parseInt(this.value,10)<10)this.value='0'+this.value;"
                    required
                  />
                  <button type="submit" className="theme-btn style-two">
                    Add to Cart <i className="fas fa-long-arrow-right" />
                  </button>
                  <button className="wishlist">
                    <i className="far fa-heart" />
                  </button>
                </form>
              </div>
            </div>
          </div>
          <Tab.Container defaultActiveKey={"details"}>
            <Nav
              as="ul"
              className="nav product-information-tab mt-90 mb-40 wow fadeInUp delay-0-2s"
            >
              <li>
                <Nav.Link
                  eventKey="details"
                  href="#details"
                  data-bs-toggle="tab"
                >
                  Descrptions
                </Nav.Link>
              </li>
              <li>
                <Nav.Link
                  eventKey="information"
                  href="#information"
                  data-bs-toggle="tab"
                >
                  Information
                </Nav.Link>
              </li>
            </Nav>
            <Tab.Content className="tab-content pb-30 wow fadeInUp delay-0-2s">
              <Tab.Pane className="tab-pane fade" eventKey="details">
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore verit atis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                  dolor sit amet, consectetur, adipisci velit sed quia non
                  numquam eius modi tempora incidunt ut labore et dolore magnam
                  aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                  nostrum exercitationem ullam corporis suscipit laboriosam,
                  nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum
                  iure reprehenderit qui in ea voluptate velit esse quam nihil
                  molestiae consequatur, vel illum qui dolorem eum
                </p>
              </Tab.Pane>
              <Tab.Pane className="tab-pane fade" eventKey="information">
                <p>
                  Now wherever you are, wherever you are, you can easily monitor
                  your CCTV videos through your mobile, tab, laptop or PC. With
                  the wireless camera, you can view the camera from your mobile
                  or computer to the right-left 0 to 360-degree video. Cover the
                  flower room with a camera.
                </p>
                <ul className="list-style-one my-15">
                  <li>Wide Angle and Long Length</li>
                  <li>Smart zooming point</li>
                  <li>HD quality video output.</li>
                  <li>Smart Alarming System</li>
                </ul>
                <p>
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit, sed quia non numquam
                </p>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </section>
      {/* Product Details End */}
      {/* Review Form Start */}
      <section className="review-form-area mb-130 rmb-100 wow fadeInUp delay-0-2s">
        <div className="container">
          <form
            onSubmit={(e) => e.preventDefault()}
            id="review-form"
            className="review-form z-1 rel"
            name="review-form"
            action="#"
          >
            <h3>Leave Your Reviews</h3>
            <div className="ratting py-15">
              <b>Your Rating</b>
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
            </div>
            <div className="row mt-25">
              <div className="col-lg-6">
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
                <div className="form-group">
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    className="form-control"
                    defaultValue=""
                    placeholder="Phone Number"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    id="email-address"
                    name="email"
                    className="form-control"
                    defaultValue=""
                    placeholder="Email Address"
                    required
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows={8}
                    placeholder="Write Message"
                    required
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="col-md-12 text-end">
                <div className="form-group mb-0">
                  <button type="submit" className="theme-btn style-two">
                    Send Reviews <i className="fas fa-long-arrow-right" />
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
      {/* Review Form End */}
      {/* Related Product Area start */}
      <section className="related-products-area pb-130 rpb-100">
        <div className="container">
          <hr />
          <div className="section-title mt-120 rmt-90 text-center mb-50">
            <h2>Related Product</h2>
          </div>
          <Slider {...relatedProductSlider} className="related-product-slider">
            <div className="product-item wow fadeInUp delay-0-2s">
              <div className="image">
                <img src="assets/images/shop/product1.jpg" alt="Product" />
                <div className="social-style-two">
                  <a href="#">
                    <i className="far fa-shopping-cart" />
                  </a>
                  <a href="#">
                    <i className="far fa-heart" />
                  </a>
                  <a href="#">
                    <i className="far fa-eye" />
                  </a>
                </div>
              </div>
              <div className="content">
                <div className="title-price">
                  <h5>
                    <Link legacyBehavior href="product-details">
                      Mockup Design
                    </Link>
                  </h5>
                  <div className="price">35.98</div>
                </div>
              </div>
            </div>
            <div className="product-item wow fadeInUp delay-0-4s">
              <div className="image">
                <img src="assets/images/shop/product2.jpg" alt="Product" />
                <div className="social-style-two">
                  <a href="#">
                    <i className="far fa-shopping-cart" />
                  </a>
                  <a href="#">
                    <i className="far fa-heart" />
                  </a>
                  <a href="#">
                    <i className="far fa-eye" />
                  </a>
                </div>
              </div>
              <div className="content">
                <div className="title-price">
                  <h5>
                    <Link legacyBehavior href="product-details">
                      Virtual Reality Glass
                    </Link>
                  </h5>
                  <div className="price">35.98</div>
                </div>
              </div>
            </div>
            <div className="product-item wow fadeInUp delay-0-6s">
              <div className="image">
                <img src="assets/images/shop/product3.jpg" alt="Product" />
                <div className="social-style-two">
                  <a href="#">
                    <i className="far fa-shopping-cart" />
                  </a>
                  <a href="#">
                    <i className="far fa-heart" />
                  </a>
                  <a href="#">
                    <i className="far fa-eye" />
                  </a>
                </div>
              </div>
              <div className="content">
                <div className="title-price">
                  <h5>
                    <Link legacyBehavior href="product-details">
                      Orange Float Vest
                    </Link>
                  </h5>
                  <div className="price">35.98</div>
                </div>
              </div>
            </div>
            <div className="product-item wow fadeInUp delay-0-8s">
              <div className="image">
                <img src="assets/images/shop/product4.jpg" alt="Product" />
                <div className="social-style-two">
                  <a href="#">
                    <i className="far fa-shopping-cart" />
                  </a>
                  <a href="#">
                    <i className="far fa-heart" />
                  </a>
                  <a href="#">
                    <i className="far fa-eye" />
                  </a>
                </div>
              </div>
              <div className="content">
                <div className="title-price">
                  <h5>
                    <Link legacyBehavior href="product-details">
                      Colourful Water Gun
                    </Link>
                  </h5>
                  <div className="price">35.98</div>
                </div>
              </div>
            </div>
            <div className="product-item wow fadeInUp delay-0-4s">
              <div className="image">
                <img src="assets/images/shop/product5.jpg" alt="Product" />
                <div className="social-style-two">
                  <a href="#">
                    <i className="far fa-shopping-cart" />
                  </a>
                  <a href="#">
                    <i className="far fa-heart" />
                  </a>
                  <a href="#">
                    <i className="far fa-eye" />
                  </a>
                </div>
              </div>
              <div className="content">
                <div className="title-price">
                  <h5>
                    <Link legacyBehavior href="product-details">
                      Trendy Shoe Color
                    </Link>
                  </h5>
                  <div className="price">35.98</div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    </Layout>
  );
};
export default ProductDetails;
