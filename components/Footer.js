import React from 'react'

export default function footer() {
  return (
    <div> <footer id="ts-footer">
    {/*MAIN FOOTER CONTENT
    =========================================================================================================*/}
    <section id="ts-footer-main">
      <div className="container">
        <div className="row">
          {/*Brand and description*/}
          <div className="col-md-6">
            <a href="#" className="brand">
              <img src="assets/img/logo.png" alt="" />
            </a>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat tempor sapien.
              In lobortis posuere tincidunt. Curabitur malesuada tempus ligula nec maximus. Nam tortor
              arcu,
              tincidunt quis molestie non, sagittis dignissim ligula. Fusce est ipsum, pharetra in felis
              ac,
              lobortis volutpat diam.
            </p>
            <a href="#" className="btn btn-outline-dark mb-4">Contact Us</a>
          </div>
          {/*Navigation*/}
          <div className="col-md-2">
            <h4>Navigation</h4>
            <nav className="nav flex-row flex-md-column mb-4">
              <a href="#" className="nav-link">Home</a>
              <a href="#" className="nav-link">Listing</a>
              <a href="#" className="nav-link">About Us</a>
              <a href="#" className="nav-link">Sign In</a>
              <a href="#" className="nav-link">Register</a>
              <a href="#" className="nav-link">Submit Property</a>
            </nav>
          </div>
          {/*Contact Info*/}
          <div className="col-md-4">
            <h4>Contact</h4>
            <address className="ts-text-color-light">
              2590 Rocky Road
              <br />
              Philadelphia, PA 19108
              <br />
              <strong>Email: </strong>
              <a href="#" className="btn-link">dalijlassi@gmail.com</a>
              <br />
              <strong>Phone:</strong>
              +1 215-606-0391
              <br />
              <strong>Skype: </strong>
              My Skype
            </address>
          </div>
        </div>
        {/*end row*/}
      </div>
      {/*end container*/}
    </section>
    {/*end ts-footer-main*/}
    {/*SECONDARY FOOTER CONTENT
    =========================================================================================================*/}
    <section id="ts-footer-secondary">
      <div className="container">
        {/*Copyright*/}
        <div className="ts-copyright">(C) 2022 ISETB&SB, All rights reserved</div>
        {/*Social Icons*/}
        <div className="ts-footer-nav">
          <nav className="nav">
            <a href="#" className="nav-link">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#" className="nav-link">
              <i className="fab fa-twitter" />
            </a>
            <a href="#" className="nav-link">
              <i className="fab fa-pinterest-p" />
            </a>
            <a href="#" className="nav-link">
              <i className="fab fa-youtube" />
            </a>
          </nav>
        </div>
        {/*end ts-footer-nav*/}
      </div>
      {/*end container*/}
    </section>
    {/*end ts-footer-secondary*/}
  </footer></div>
  )
}
