import Link from "next/link";
const PageBanner = ({ pageName, pageTitle }) => {
  return (
    <section
      className="page-banner-area bgs-cover py-135 rpy-100"
      style={{ backgroundImage: "url(assets/images/background/banner.jpg)" }}
    >
      <div className="container">
        <div className="banner-inner text-white text-center">
          <h1 className="page-title wow fadeInUp delay-0-2s animated">
            {pageTitle ? pageTitle : pageName}
          </h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center mb-5 wow fadeInUp delay-0-4s animated">
              <li className="breadcrumb-item">
                <Link legacyBehavior href="/index">
                  <a>home</a>
                </Link>
              </li>
              <li className="breadcrumb-item active">{pageName}</li>
            </ol>
          </nav>
        </div>
      </div>
    </section>
  );
};
export default PageBanner;
