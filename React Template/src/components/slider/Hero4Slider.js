import { sliderTwoActive } from "@/src/sliderProps";
import Link from "next/link";
import { Component, Fragment } from "react";
import Slider from "react-slick";

export default class Hero4Slider extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    return (
      <Fragment>
        <Slider
          {...sliderTwoActive}
          ref={(c) => (this.slider = c)}
          className="slider-two-active"
        >
          <div className="slider-item-two">
            <div className="container">
              <div className="slide-content">
                <span className="sub-title">Welcome to Jeena</span>
                <h1>IT Services Agency</h1>
                <Link legacyBehavior href="/about">
                  <a className="theme-btn mt-15">
                    Let’s Get Started <i className="fas fa-long-arrow-right" />
                  </a>
                </Link>
                <a
                  href="https://www.youtube.com/watch?v=9Y7ma241N8k"
                  className="mfp-iframe video-play-text mt-15"
                >
                  <i className="fas fa-play" /> <span>How IT Works</span>
                </a>
              </div>
            </div>
            <div
              className="slider-image"
              style={{
                backgroundImage: "url(assets/images/slider/slider1.jpg)",
              }}
            />
          </div>
          <div className="slider-item-two">
            <div className="container">
              <div className="slide-content">
                <span className="sub-title">IT Solution Comapny</span>
                <h1>IT Services Agency</h1>
                <Link legacyBehavior href="/about">
                  <a className="theme-btn mt-15">
                    Let’s Get Started <i className="fas fa-long-arrow-right" />
                  </a>
                </Link>
                <Link legacyBehavior href="/contact">
                  <a className="theme-btn style-two mt-15">
                    Contact Us <i className="fas fa-long-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div
              className="slider-image"
              style={{
                backgroundImage: "url(assets/images/slider/slider2.jpg)",
              }}
            />
          </div>
          <div className="slider-item-two">
            <div className="container">
              <div className="slide-content">
                <span className="sub-title">Welcome to Jeena</span>
                <h1>IT Services Agency</h1>
                <Link legacyBehavior href="/about">
                  <a className="theme-btn mt-15">
                    Let’s Get Started <i className="fas fa-long-arrow-right" />
                  </a>
                </Link>
                <a
                  href="https://www.youtube.com/watch?v=9Y7ma241N8k"
                  className="mfp-iframe video-play-text mt-15"
                >
                  <i className="fas fa-play" /> <span>How IT Works</span>
                </a>
              </div>
            </div>
            <div
              className="slider-image"
              style={{
                backgroundImage: "url(assets/images/slider/slider3.jpg)",
              }}
            />
          </div>
          <div className="slider-item-two">
            <div className="container">
              <div className="slide-content">
                <span className="sub-title">IT Solution Comapny</span>
                <h1>IT Services Agency</h1>
                <Link legacyBehavior href="/about">
                  <a className="theme-btn mt-15">
                    Let’s Get Started <i className="fas fa-long-arrow-right" />
                  </a>
                </Link>
                <Link legacyBehavior href="/contact">
                  <a className="theme-btn style-two mt-15">
                    Contact Us <i className="fas fa-long-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div
              className="slider-image"
              style={{
                backgroundImage: "url(assets/images/slider/slider4.jpg)",
              }}
            />
          </div>
          <div className="slider-item-two">
            <div className="container">
              <div className="slide-content">
                <span className="sub-title">Welcome to Jeena</span>
                <h1>IT Services Agency</h1>
                <Link legacyBehavior href="/about">
                  <a className="theme-btn mt-15">
                    Let’s Get Started <i className="fas fa-long-arrow-right" />
                  </a>
                </Link>
                <a
                  href="https://www.youtube.com/watch?v=9Y7ma241N8k"
                  className="mfp-iframe video-play-text mt-15"
                >
                  <i className="fas fa-play" /> <span>How IT Works</span>
                </a>
              </div>
            </div>
            <div
              className="slider-image"
              style={{
                backgroundImage: "url(assets/images/slider/slider5.jpg)",
              }}
            />
          </div>
        </Slider>
        <div className="slider-arrows">
          <div className="container rel">
            <button className="prev-slider slick-arrow" onClick={this.previous}>
              <i className="fal fa-angle-left" />
            </button>
            <button className="next-slider slick-arrow" onClick={this.next}>
              <i className="fal fa-angle-right" />
            </button>
          </div>
        </div>
      </Fragment>
    );
  }
}
