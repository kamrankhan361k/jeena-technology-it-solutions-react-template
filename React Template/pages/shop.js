import PageBanner from "@/components/PageBanner";
import Layout from "@/layout";
import Link from "next/link";

const Shop = () => {
  return (
    <Layout>
      <PageBanner pageName={"Shop"} />
      <section className="shop-page-area py-130 rpy-100">
        <div className="container">
          <div className="shop-shorter rel z-3 mb-45 wow fadeInUp delay-0-2s">
            <a className="filter-part" href="#">
              <i className="fal fa-bars" />
              <span>Show Filters</span>
            </a>
            <div className="sort-text">Showing 1–12 of 30 results</div>
            <div className="products-dropdown">
              <select>
                <option value="default" selected="">
                  Default Shorting
                </option>
                <option value="New">Sort by Newness</option>
                <option value="old">Sort by Oldest</option>
                <option value="hight-to-low">High To Low</option>
                <option value="low-to-high">Low To High</option>
              </select>
            </div>
            <ul className="grid-list">
              <li>
                <a href="#">
                  <i className="fal fa-border-all" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="far fa-list" />
                </a>
              </li>
            </ul>
          </div>
          <div className="row gap-60">
            <div className="col-lg-3">
              <div className="shop-sidebar rmb-75">
                <div className="widget widget-search wow fadeInUp delay-0-2s">
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    action="#"
                    className="default-search-form"
                  >
                    <input type="text" placeholder="Search Keywords" required />
                    <button
                      type="submit"
                      className="searchbutton far fa-search"
                    />
                  </form>
                </div>
                <div className="widget widget-category wow fadeInUp delay-0-4s">
                  <h5 className="widget-title">Category</h5>
                  <ul>
                    <li>
                      <Link legacyBehavior href="shop">
                        Book Cover
                      </Link>{" "}
                      <span>(8)</span>
                    </li>
                    <li>
                      <Link legacyBehavior href="shop">
                        Logo Branding
                      </Link>{" "}
                      <span>(5)</span>
                    </li>
                    <li>
                      <Link legacyBehavior href="shop">
                        T-Shart Design
                      </Link>{" "}
                      <span>(3)</span>
                    </li>
                    <li>
                      <Link legacyBehavior href="shop">
                        Business Cards
                      </Link>{" "}
                      <span>(9)</span>
                    </li>
                    <li>
                      <Link legacyBehavior href="shop">
                        Web Design
                      </Link>{" "}
                      <span>(4)</span>
                    </li>
                    <li>
                      <Link legacyBehavior href="shop">
                        Landing Pages
                      </Link>{" "}
                      <span>(6)</span>
                    </li>
                  </ul>
                </div>
                <div className="widget widget-products wow fadeInUp delay-0-2s">
                  <h5 className="widget-title">Best Seller</h5>
                  <ul>
                    <li>
                      <div className="image">
                        <img
                          src="assets/images/widgets/product1.jpg"
                          alt="Product"
                        />
                      </div>
                      <div className="content">
                        <div className="ratting">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <h5>
                          <Link legacyBehavior href="product-details">
                            Logo Design
                          </Link>
                        </h5>
                        <span className="price">$29.95</span>
                      </div>
                    </li>
                    <li>
                      <div className="image">
                        <img
                          src="assets/images/widgets/product2.jpg"
                          alt="Product"
                        />
                      </div>
                      <div className="content">
                        <div className="ratting">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <h5>
                          <Link legacyBehavior href="product-details">
                            Mobile Apps
                          </Link>
                        </h5>
                        <span className="price">$29.95</span>
                      </div>
                    </li>
                    <li>
                      <div className="image">
                        <img
                          src="assets/images/widgets/product3.jpg"
                          alt="Product"
                        />
                      </div>
                      <div className="content">
                        <div className="ratting">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <h5>
                          <Link legacyBehavior href="product-details">
                            Business Card
                          </Link>
                        </h5>
                        <span className="price">$29.95</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="widget widget-tag-cloud wow fadeInUp delay-0-2s">
                  <h5 className="widget-title">Popular Tags</h5>
                  <div className="tag-coulds">
                    <Link legacyBehavior href="blog">
                      Printing
                    </Link>
                    <Link legacyBehavior href="blog">
                      Design
                    </Link>
                    <Link legacyBehavior href="blog">
                      Ofset
                    </Link>
                    <Link legacyBehavior href="blog">
                      Branding
                    </Link>
                    <Link legacyBehavior href="blog">
                      3D Printing
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="row">
                <div className="col-lg-4 col-sm-6">
                  <div className="product-item wow fadeInUp delay-0-2s">
                    <div className="image">
                      <img
                        src="assets/images/shop/product1.jpg"
                        alt="Product"
                      />
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
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div className="product-item wow fadeInUp delay-0-4s">
                    <div className="image">
                      <img
                        src="assets/images/shop/product2.jpg"
                        alt="Product"
                      />
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
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div className="product-item wow fadeInUp delay-0-6s">
                    <div className="image">
                      <img
                        src="assets/images/shop/product3.jpg"
                        alt="Product"
                      />
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
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div className="product-item wow fadeInUp delay-0-2s">
                    <div className="image">
                      <img
                        src="assets/images/shop/product4.jpg"
                        alt="Product"
                      />
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
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div className="product-item wow fadeInUp delay-0-4s">
                    <div className="image">
                      <img
                        src="assets/images/shop/product5.jpg"
                        alt="Product"
                      />
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
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div className="product-item wow fadeInUp delay-0-6s">
                    <div className="image">
                      <img
                        src="assets/images/shop/product6.jpg"
                        alt="Product"
                      />
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
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div className="product-item wow fadeInUp delay-0-2s">
                    <div className="image">
                      <img
                        src="assets/images/shop/product7.jpg"
                        alt="Product"
                      />
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
                            Men Winter Dress
                          </Link>
                        </h5>
                        <div className="price">35.98</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div className="product-item wow fadeInUp delay-0-4s">
                    <div className="image">
                      <img
                        src="assets/images/shop/product8.jpg"
                        alt="Product"
                      />
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
                            Little StylishWatch
                          </Link>
                        </h5>
                        <div className="price">35.98</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div className="product-item wow fadeInUp delay-0-6s">
                    <div className="image">
                      <img
                        src="assets/images/shop/product9.jpg"
                        alt="Product"
                      />
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
                            Headphones Head
                          </Link>
                        </h5>
                        <div className="price">35.98</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ul className="pagination flex-wrap wow fadeInUp delay-0-2s">
                <li className="page-item disabled">
                  <span className="page-link">
                    <i className="fas fa-chevron-left" />
                  </span>
                </li>
                <li className="page-item active">
                  <span className="page-link">
                    01
                    <span className="sr-only">(current)</span>
                  </span>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    02
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    03
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    04
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    <i className="fas fa-chevron-right" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Shop;
