import React from 'react';
import styles from './Header.scss'

class Header extends React.Component {

  render() {
    return (
      <div className={styles.Header}>
        <nav className="navbar navbar-expand-lg bg-white text-uppercase fixed-top" id="mainNav">
          <div className="container">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">WEBSITE LOGO</a>
            <button className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              Menu&nbsp;
                    <i className="fas fa-bars"></i>
            </button>
            <div className={["collapse navbar-collapse",styles.navbarResponsive].join(" ")} id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item mx-0 mx-lg-1"><a className={["nav-link pl-sm-2 pr-sm-2 py-2 mt-2 px-0 px-lg-3 rounded js-scroll-trigger",styles.active].join(" ")} href="/" id="ActiveHome">Home</a></li>
                <li className="nav-item mx-0 mx-lg-1"><a className="nav-link pl-sm-2 pr-sm-2 py-2 mt-2 px-0 px-lg-3 rounded js-scroll-trigger" href="/pagenotfound.html">About</a></li>
                <li className="nav-item mx-0 mx-lg-1"><a className="nav-link pl-sm-2 pr-sm-2 py-2 mt-2 px-0 px-lg-3 rounded js-scroll-trigger" href="/pagenotfound.html">Contact</a></li>
              </ul>
            </div>
          </div>
        </nav>
        <header className={["bg-primary text-white ", styles.masthead].join(" ")}>
          <div className="container d-flex align-items-lg-start flex-column col-lg-6 mr-lg-0">
            <p className="masthead-subheading font-weight-light">Lorem ipsum dolor sit amet,</p>
            <h1 className="masthead-heading text-uppercase mb-3">Generate Lorem Ipsum placeholder text. Select the number of characters</h1>
            <p className="masthead-subheading font-weight-light">Lorem ipsum dolor sit amet,</p>
            
          </div>
          <div className="container d-flex align-items-lg-end flex-column col-lg-6 mr-lg-0">
            <button type="button" className={["btn",styles.btnStyle].join(" ")}>More <span></span><span></span><span></span><span></span></button>
            </div>
        </header>
      </div>
    )
  }
}


export default Header;

