import PageBanner from "@/components/PageBanner";
import Layout from "@/layout";
import { Accordion } from "react-bootstrap";
const Checkout = () => {
  return (
    <Layout>
      <PageBanner pageName={"Checkout"} />
      <Accordion defaultActiveKey="collapse3">
        <div className="checkout-form-area py-130">
          <div className="container">
            <div className="checkout-faqs" id="checkout-faqs">
              <div className="alert bgc-lighter wow fadeInUp delay-0-2s">
                <h6>
                  Returning customer?{" "}
                  <Accordion.Toggle
                    as="a"
                    className="card-header"
                    eventKey="collapse0"
                  >
                    Click here to login
                  </Accordion.Toggle>
                </h6>
                <Accordion.Collapse eventKey="collapse0" className="content">
                  <form onSubmit={(e) => e.preventDefault()} action="#">
                    <p>Please login your accont.</p>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="email"
                            id="email-address"
                            name="email-address"
                            className="form-control"
                            defaultValue=""
                            placeholder="Your Email Address"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="password"
                            id="password"
                            name="password"
                            className="form-control"
                            defaultValue=""
                            placeholder="Your Password"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-footer">
                      <button type="submit" className="theme-btn style-two">
                        login <i className="fas fa-angle-double-right" />
                      </button>
                      <input
                        type="checkbox"
                        name="loss-passowrd"
                        id="loss-passowrd"
                        required
                      />
                      <label htmlFor="loss-passowrd">Remember me</label>
                    </div>
                    <a href="#">Lost your password?</a>
                  </form>
                </Accordion.Collapse>
              </div>
              <div className="alert bgc-lighter wow fadeInUp delay-0-3s">
                <h6>
                  Have a coupon?{" "}
                  <Accordion.Toggle
                    as="a"
                    className="card-header"
                    eventKey="collapse3"
                  >
                    Click here to enter your code
                  </Accordion.Toggle>
                </h6>
                <Accordion.Collapse eventKey="collapse3" className="content">
                  <form onSubmit={(e) => e.preventDefault()} action="#">
                    <p>If you have a coupon code, please apply it below.</p>
                    <div className="form-group">
                      <input
                        type="text"
                        id="coupon-code"
                        name="coupon-code"
                        className="form-control"
                        defaultValue=""
                        placeholder="Coupon Code"
                        required
                      />
                    </div>
                    <button type="submit" className="theme-btn style-two">
                      apply coupon <i className="fas fa-angle-double-right" />
                    </button>
                  </form>
                </Accordion.Collapse>
              </div>
              <div className="alert bgc-lighter wow fadeInUp delay-0-4s">
                <h6>
                  Billing Address{" "}
                  <Accordion.Toggle
                    as="a"
                    className="card-header"
                    eventKey="collapse4"
                  >
                    {" "}
                    Enter here
                  </Accordion.Toggle>
                </h6>
                <Accordion.Collapse eventKey="collapse4" className="content">
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    id="checkout-form"
                    className="checkout-form"
                    name="checkout-form"
                    action="#"
                  >
                    <div className="row">
                      <div className="col-lg-12 pt-15">
                        <h5>Personal Information</h5>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            id="first-name"
                            name="first-name"
                            className="form-control"
                            defaultValue=""
                            placeholder="First Name"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            id="last-name"
                            name="last-name"
                            className="form-control"
                            defaultValue=""
                            placeholder="Last Name"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            id="number"
                            name="number"
                            className="form-control"
                            defaultValue=""
                            placeholder="Phone Number"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="email"
                            id="emailId"
                            name="emailId"
                            className="form-control"
                            defaultValue=""
                            placeholder="Email Address"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            id="company-name"
                            name="company-name"
                            className="form-control"
                            defaultValue=""
                            placeholder="Company name (optional)"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            id="company-address"
                            name="company-address"
                            className="form-control"
                            defaultValue=""
                            placeholder="Company Address (optional)"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <h5>Your Address</h5>
                      </div>
                      <div className="col-md-6 mb-30">
                        <div className="form-group">
                          <select
                            className="select"
                            name="country"
                            id="country"
                          >
                            <option value="value1">Select Country</option>
                            <option value="value2">Australia</option>
                            <option value="value3">Canada</option>
                            <option value="value4">China</option>
                            <option value="value5">Morocco</option>
                            <option value="value6">Saudi Arabia</option>
                            <option value="value7">United Kingdom (UK)</option>
                            <option value="value8">United States (US)</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            id="city"
                            name="city"
                            className="form-control"
                            defaultValue=""
                            placeholder="City"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            id="state"
                            name="state"
                            className="form-control"
                            defaultValue=""
                            placeholder="State"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            id="zip"
                            name="zip"
                            className="form-control"
                            defaultValue=""
                            placeholder="Zip"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            id="street-name"
                            name="street-name"
                            className="form-control"
                            defaultValue=""
                            placeholder="House, street name"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            id="apartment-name"
                            name="apartment-name"
                            className="form-control"
                            defaultValue=""
                            placeholder="Apartment, suite, unit etc. (optional)"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <h5>Order Notes (optional)</h5>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group mb-0">
                          <textarea
                            name="order-note"
                            id="order-note"
                            className="form-control"
                            rows={5}
                            placeholder="Notes about your order, e.g. special notes for delivery."
                            defaultValue={""}
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </Accordion.Collapse>
              </div>
              <div className="alert bgc-lighter wow fadeInUp delay-0-2s">
                <h6>
                  Select Your{" "}
                  <Accordion.Toggle
                    as="a"
                    className="card-header"
                    eventKey="collapse5"
                  >
                    {" "}
                    Payment Method
                  </Accordion.Toggle>
                </h6>
                <Accordion.Collapse eventKey="collapse5" className="content">
                  <div className="payment-cart-total pt-25">
                    <div className="row justify-content-between">
                      <div className="col-lg-6">
                        <div className="payment-method rmb-30">
                          <h5 className="mb-20">Payment Method</h5>
                          <Accordion
                            defaultActiveKey="collapseOne"
                            as="ul"
                            id="paymentMethod"
                            className="mb-30"
                          >
                            {/* Default unchecked */}
                            <li className="custom-control custom-radio">
                              <input
                                type="radio"
                                className="custom-control-input"
                                id="methodone"
                                name="defaultExampleRadios"
                                defaultChecked
                              />{" "}
                              <Accordion.Toggle
                                as="label"
                                className="custom-control-label"
                                htmlFor="methodone"
                                data-toggle="collapse"
                                data-target="#collapseOne"
                                eventKey="collapseOne"
                              >
                                {" "}
                                Direct Bank Transfer{" "}
                                <i className="fas fa-money-check" />
                              </Accordion.Toggle>
                              <Accordion.Collapse
                                eventKey="collapseOne"
                                data-parent="#paymentMethod"
                                style={{}}
                              >
                                <p>
                                  Make your payment directly into our bank
                                  account. Please use your Order ID as the
                                  payment reference. Your order will not be
                                  shipped our account.
                                </p>
                              </Accordion.Collapse>
                            </li>
                            {/* Default unchecked */}
                            <li className="custom-control custom-radio">
                              <input
                                type="radio"
                                className="custom-control-input"
                                id="methodtwo"
                                name="defaultExampleRadios"
                              />{" "}
                              <Accordion.Toggle
                                as="label"
                                className="custom-control-label collapsed"
                                htmlFor="methodtwo"
                                data-toggle="collapse"
                                data-target="#collapseTwo"
                                eventKey="collapseTwo"
                              >
                                {" "}
                                Cash On Delivery <i className="fas fa-truck" />
                              </Accordion.Toggle>
                              <Accordion.Collapse
                                eventKey="collapseTwo"
                                data-parent="#paymentMethod"
                                style={{}}
                              >
                                <p>Pay with cash upon delivery.</p>
                              </Accordion.Collapse>
                            </li>
                            {/* Default unchecked */}
                            <li className="custom-control custom-radio">
                              <input
                                type="radio"
                                className="custom-control-input"
                                id="methodthree"
                                name="defaultExampleRadios"
                              />{" "}
                              <Accordion.Toggle
                                as="label"
                                className="custom-control-label collapsed"
                                htmlFor="methodthree"
                                data-toggle="collapse"
                                data-target="#collapsethree"
                                eventKey="collapsethree"
                              >
                                Paypal <i className="fab fa-cc-paypal" />
                              </Accordion.Toggle>
                              <Accordion.Collapse
                                eventKey="collapsethree"
                                data-parent="#paymentMethod"
                                style={{}}
                              >
                                <p>
                                  Pay via PayPal; you can pay with your credit
                                  card if you don’t have a PayPal account.
                                </p>
                              </Accordion.Collapse>
                            </li>
                          </Accordion>
                          <p>
                            Your personal data will be used to process your
                            order, support your experience throughout this
                            website, and for other purposes described in our
                            privacy policy.
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-5">
                        <div className="shoping-cart-total text-left mb-20">
                          <h5 className="text-center mb-20">Cart Totals</h5>
                          <table>
                            <tbody>
                              <tr>
                                <td>
                                  Mobile Apps <strong>× 1</strong>
                                </td>
                                <td>$70.00</td>
                              </tr>
                              <tr>
                                <td>
                                  Business Card <strong>× 2</strong>
                                </td>
                                <td>$130.00</td>
                              </tr>
                              <tr>
                                <td>Shipping Fee</td>
                                <td>$10.00</td>
                              </tr>
                              <tr>
                                <td>Vat</td>
                                <td>$5.00</td>
                              </tr>
                              <tr>
                                <td>
                                  <strong>Order Total</strong>
                                </td>
                                <td>
                                  <strong>$225.00</strong>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </Accordion.Collapse>
              </div>
              <button type="button" className="theme-btn w-100">
                Place order <i className="fas fa-angle-double-right" />
              </button>
            </div>
          </div>
        </div>
      </Accordion>
    </Layout>
  );
};
export default Checkout;
