
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
// import Map from './components/Map'
import { checkout } from "../checkout"
import Footer from '../components/Footer';
import withAdmin from '../components/withAdmin';
import NavBar from '../components/NavBar';

const Abonement = (props) => {

  return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="author" content="ThemeStarz" />
      {/*CSS */}
      <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css" />
      <link rel="stylesheet" href="assets/font-awesome/css/fontawesome-all.min.css" />
      <link rel="stylesheet" href="assets/css/jquery.scrollbar.css" />
      <link rel="stylesheet" href="assets/css/style.css" />
      <title>Foot Plus +</title>
      {/* WRAPPER
=====================================================================================================================*/}
      <div className="ts-page-wrapper ts-homepage" id="page-top">
        {/***********************************************************************************************************/}
        {/*HEADER ***************************************************************************************************/}
        {/***********************************************************************************************************/}
        <NavBar />
        <header id="ts-header" className="fixed-top">


        </header>

        <main id="ts-main">

          <section id="pricing" className="ts-block pt-0">
            <br></br>
            <br></br>
            <br></br>
            <br></br>


            <div className="container">
              {/*Title*/}
              <div className="ts-title text-center">
                <h2 className="mb-5">Affordable Prices</h2>
              </div>
              {/*Row*/}
              <div className="row no-gutters ts-cards-same-height">
                {/*Price Box*/}
                <div className="col-sm-4 col-lg-4">
                  <div className="card text-center ts-price-box">
                    {/*Header*/}
                    <div className="card-img ts-item__image" data-bg-color="#afb543">
                      <h5 className="text-back" >Basic</h5>

                      <a className="ts-title">
                        <img className="card-img ts-item__image" src="freee.jpg" ></img>  
                        <h3 className="font-weight-normal">Free</h3>
                        <small className="ts-opacity__50">Forever</small>
                      </a>
                    </div>
                    {/*Body*/}
                    <div className="card-body p-0 border-bottom-0">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">1 Property</li>
                        <li className="list-group-item">1 Agent Profile</li>
                        <li className="list-group-item ts-na"><s>Agency Profile</s></li>
                        <li className="list-group-item ts-na"><s>Featured Properties</s></li>
                      </ul>
                    </div>
                    {/*Footer*/}
                    <div className="card-footer bg-transparent pt-0 border-0">
                      <a href="/checkout" className="btn btn-outline-primary">Select Now</a>
                    </div>
                  </div>
                </div>
                {/*end price-box*/}
                {/*Price Box Promoted*/}
                <div className="col-sm-4 col-lg-4">
                  <div className="card text-center ts-price-box ts-price-box__promoted">
                    {/*Header*/}
                    <div className="card-header" data-bg-color="#00004c">
                      <h5 className="text-white ts-bg-primary">Premium</h5>
                      <a className="text-back">
                        <img className="card-header" src="prm.jpg" width={370} height={400}></img>
                        <h3 className="text-back">
                          <sup>$</sup>9,99
                        </h3>
                        <small className="ts-opacity__100">per month</small>
                      </a>
                    </div>
                    {/*Body*/}
                    <div className="card-body p-0">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">20 Properties</li>
                        <li className="list-group-item">10 Agent Profiles</li>
                        <li className="list-group-item">5 Agency Profiles</li>
                        <li className="list-group-item">Featured Properties</li>
                      </ul>
                    </div>
                    {/*Footer*/}
                    <div className="card-footer bg-transparent pt-0 border-0">
                      <button className="btn btn-outline-primary" onClick={() => {
                        checkout({ 
                          lineItems: [{ 
                            price: "price_1L44jlE3tX7X8e4oKce7etfR", quantity: 1 }] 
                          })
                      }}>Buy Now</button>
                    </div>
                  </div>
                </div>
                {/*end price-box*/}
                {/*Price Box*/}
                <div className="col-sm-4 col-lg-4">
                  <div className="card text-center ts-price-box">
                    {/*Header*/}
                    <div className="card-header" data-bg-color="#dadada">
                      <h5 className="text-black" data-bg-color="#000296">Professional</h5>
                      <a className="ts-title">
                        <img className="card-header" src="prof.jpg" width={370} height={350}></img>
                        <h3 className="font-weight-normal">
                          <sup>$</sup>19,99
                        </h3>
                        <small className="ts-opacity__50">Per Month</small>
                      </a>
                    </div>
                    {/*Body*/}
                    <div className="card-body p-0">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">Unlimited Properties</li>
                        <li className="list-group-item">Unlimited Agent Profiles</li>
                        <li className="list-group-item">Unlimited Agency Profiles</li>
                        <li className="list-group-item">Featured Properties</li>
                      </ul>
                    </div>
                    {/*Footer*/}
                    <div className="card-footer bg-transparent pt-0 border-0">
                      <button className="btn btn-outline-primary" onClick={() => {
                        checkout({
                          lineItems: [
                            {
                              price: "price_1L44lsE3tX7X8e4oVRhRS6V0",
                              quantity: 1
                            }
                          ]
                        })
                      }}>Buy Now</button>
                    </div>
                  </div>
                </div>
                {/*end price-box*/}
              </div>
              {/*end row*/}
            </div>
            {/*end container*/}
          </section>
        </main>
        <Footer />
      </div>

    </div>
  )
}

export default withAdmin(Abonement)