import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../Store/Actions'
import SecondSection from '../home2/home2'
import dummy from '../../assests/images/images1.jpg'
import Slider from "react-slick";
import classes from './home.scss'

class Home extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 3000,
      cssEase: "linear"
    };
    return (
      <div className={classes.Home}>
        <section className="page-section portfolio" id="portfolio">
          <div className="container p-5">
            <div className="pb-4">
              <h5 className="page-section-heading text-left text-capitalize text-secondary">Neque porro quisquam est</h5>
              <small>There is no one who loves pain itself,</small>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-4 mb-5">
                <div className={["card shadow border-0", classes.bgColor].join(" ")}>
                  <div className={["card-body"]}>
                    <h4 className={["card-title"].join(" ")}><span className={classes.homepageIcon}><i className="fas fa-user-cog"></i></span> Lorem Ipsum</h4>
                    <p className="card-text">Some quick example text to build on the Lorem Ipsum and make up the bulk of the card's content.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-5">
                <div className={["card shadow border-0",classes.bgColor].join(" ")}>
                  <div className="card-body">
                    <h4 className="card-title"><span className={classes.homepageIcon}><i className="fas fa-user-cog"></i></span> Lorem Ipsum</h4>
                    <p className="card-text">Some quick example text to build on the Lorem Ipsum and make up the bulk of the card's content.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-5">
                <div className={["card shadow border-0",classes.bgColor].join(" ")}>
                  <div className="card-body">
                    <h4 className="card-title"><span className={classes.homepageIcon}><i className="fas fa-user-cog"></i></span> Lorem Ipsum</h4>
                    <p className="card-text">Some quick example text to build on the Lorem Ipsum and make up the bulk of the card's content.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
                <div className={["card shadow border-0",classes.bgColor].join(" ")}>
                  <div className="card-body">
                    <h4 className="card-title"><span className={classes.homepageIcon}><i className="fas fa-user-cog"></i></span> Lorem Ipsum</h4>
                    <p className="card-text">Some quick example text to build on the Lorem Ipsum and make up the bulk of the card's content.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-5 mb-md-0">
                <div className={["card shadow border-0",classes.bgColor].join(" ")}>
                  <div className="card-body">
                    <h4 className="card-title"><span className={classes.homepageIcon}><i className="fas fa-user-cog"></i></span> Lorem Ipsum</h4>
                    <p className="card-text">Some quick example text to build on the Lorem Ipsum and make up the bulk of the card's content.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className={["card shadow border-0",classes.bgColor].join(" ")}>
                  <div className="card-body">
                    <h4 className="card-title"><span className={classes.homepageIcon}><i className="fas fa-user-cog"></i></span> Lorem Ipsum</h4>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={["text-white text-center",classes.masthead].join(" ")}>
          <Slider {...settings}>
            <div className="container d-flex align-items-center flex-column col-md-6">
              <img className="mb-4 rounded-circle" src={dummy} alt="demo" />
              <p className="font-weight-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <div className={classes.ratingStar}>
                <div className={classes.customicon}>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </div>
            <div className="container d-flex align-items-center flex-column col-md-6">
              <img className="mb-4 rounded-circle" src={dummy} alt="demo" />
              <p className="font-weight-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <div className={classes.ratingStar}>
                <div className={classes.customicon}>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </div>
            <div className="container d-flex align-items-center flex-column col-md-6">
              <img className="mb-4 rounded-circle" src={dummy} alt="demo" />
              <p className="font-weight-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <div className={classes.ratingStar}>
                <div className={classes.customicon}>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </div>
          </Slider>
        </section>
        <SecondSection/>
      </div>
    )
  }
}

const stateToProps = (state) => {
  return {
    testValue: state.home.testValue,
  }
}

const dispatchToProps = (dispatch) => {
  return {
    testAction: () => dispatch(actions.testAction())
  }
}

export default connect(stateToProps, dispatchToProps)(Home);