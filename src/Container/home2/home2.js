import React from 'react';
import { connect } from 'react-redux';
import classes from './home2.scss'
class Home extends React.Component {

    render() {
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
                                <div className="media ">
                                    <div className={["mr-3 rounded-circle shadow-sm", classes.fontColor, classes.iconSize].join(" ")}>
                                        <i className="fas fa-link"></i>
                                    </div>
                                    <div className="media-body">
                                        <h5 className={["mt-0"].join(" ")}>Lorem Ipsum</h5>
                                        <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                                        <button type="button" className={["btn", classes.btnStyle].join(" ")}>More <span></span><span></span><span></span><span></span></button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 mb-5">
                                <div className="media ">
                                    <div className={["mr-3 rounded-circle shadow-sm", classes.fontColor, classes.iconSize].join(" ")}>
                                        <i class="fas fa-chart-bar"></i>
                                    </div>
                                    <div className="media-body">
                                        <h5 className={["mt-0"].join(" ")}>Lorem Ipsum</h5>
                                        <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                                        <button type="button" className={["btn", classes.btnStyle].join(" ")}>More <span></span><span></span><span></span><span></span></button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 mb-5">
                                <div className="media ">
                                    <div className={["mr-3 rounded-circle shadow-sm ", classes.fontColor, classes.iconSize].join(" ")}>
                                        <i class="fas fa-chart-pie"></i>
                                    </div>
                                    <div className="media-body">
                                        <h5 className={["mt-0"].join(" ")}>Lorem Ipsum</h5>
                                        <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                                        <button type="button" className={["btn", classes.btnStyle].join(" ")}>More <span></span><span></span><span></span><span></span></button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={["page-section", classes.bgGary].join(" ")} id="portfolio">
                    <div className="container p-5">
                        <div className="pb-4">
                            <h5 className="page-section-heading text-left text-capitalize text-secondary">Neque porro quisquam est</h5>
                            <small>There is no one who loves pain itself,</small>
                        </div>
                        <div className="row">
                            <div className="col-md-12 col-lg-6 mb-5">
                                <div className="media row">
                                    <img className={["col-md-6 col-lg-6", classes.imgBox].join(" ")} src="https://previews.123rf.com/images/solomapoppy/solomapoppy1707/solomapoppy170700027/82227418-man-working-on-computer-work-desk-flat-cartoon-person-character-idea-of-freelancer-workplace-online-.jpg" alt="Generic placeholder image" />
                                    <div className="media-body col-md-6 col-lg-6">
                                        <h5 className={["mt-0"].join(" ")}>Lorem Ipsum</h5>
                                        <p>Some quick example text to build on the Lorem Ipsum and make up the bulk of the card's content. the bulk of the card's content</p>
                                        <button type="button" className={["btn mt-3", classes.btnStyle].join(" ")}>More <span></span><span></span><span></span><span></span></button>
                                    </div>

                                </div>
                            </div>
                            <div className="col-md-12 col-lg-6 mb-5">
                                <div className="media row">
                                    <img className={["col-md-6 col-lg-6", classes.imgBox].join(" ")} src="https://previews.123rf.com/images/solomapoppy/solomapoppy1707/solomapoppy170700027/82227418-man-working-on-computer-work-desk-flat-cartoon-person-character-idea-of-freelancer-workplace-online-.jpg" alt="Generic placeholder image" />
                                    <div className="media-body col-md-6 col-lg-6">
                                        <h5 className={["mt-0"].join(" ")}>Lorem Ipsum</h5>
                                        <p>Some quick example text to build on the Lorem Ipsum and make up the bulk of the card's content. the bulk of the card's content</p>
                                        <button type="button" className={["btn mt-3", classes.btnStyle].join(" ")}>More <span></span><span></span><span></span><span></span></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

const stateToProps = (state) => {
    return {
    }
}

const dispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(stateToProps, dispatchToProps)(Home);