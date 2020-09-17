import React from 'react'
import classes from './Footer.scss'

class Footer extends React.Component { 
    render() {
        return (
            <div className={classes.Footer}>
                <section className={["text-white text-center", classes.footer].join(" ")}>
                    <div className="container d-flex align-items-center flex-column col-md-6">
                        <h5 className={["text-uppercase"].join(" ")}>Special title treatment</h5>
                        <p className={["font-weight-light"].join(" ")}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        <div className={[classes.social_icons,"mb-3"].join(" ")}>
                            <a className="pt-1 pl-2 pr-2 pb-1  m-2"><i className="fab fa-facebook-square"></i></a>
                            <a className="pt-1 pl-2 pr-2 pb-1  m-2"><i className="fab fa-twitter-square"></i></a>
                            <a className="pt-1 pl-2 pr-2 pb-1  m-2"><i className="fab fa-google-plus-square"></i></a>
                            <a className="pt-1 pl-2 pr-2 pb-1  m-2"><i class="fab fa-linkedin"></i></a>
                        </div>
                        <p className={["font-weight-light mb-0", classes.footersubheading]}>Special title treatment</p>
                    </div>
                </section>
                <div className={["py-4 text-center text-white", classes.copyright].join(" ")}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-lg-6">
                                <small>Copyright © Your Website 2020</small>
                            </div>
                            <div className="col-md-6 col-lg-6">
                                <small>Template by XYZ</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;