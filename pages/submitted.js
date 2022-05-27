import React from 'react'
import Footer from './components/Footer'
import NavBar from './components/NavBar'

export default function submitted() {
  return (
    <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="author" content="ThemeStarz" />
        {/*CSS */}
        <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" href="assets/font-awesome/css/fontawesome-all.min.css" />
        <link rel="stylesheet" href="assets/css/style.css" />
        <title>Foot Plus</title>
        {/* WRAPPER
    =================================================================================================================*/}
        <div className="ts-page-wrapper ts-has-bokeh-bg" id="page-top">
          
          <header id="ts-header" className="fixed-top">
          <NavBar />
          </header>
          
          {/*end Header*/}
          {/***********************************************************************************************************/}
          {/* MAIN ****************************************************************************************************/}
          {/***********************************************************************************************************/}
          <main id="ts-main">
            {/*BREADCRUMB
            =========================================================================================================*/}
            <section id="breadcrumb">
              <div className="container">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item"><a href="#">Library</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Data</li>
                  </ol>
                </nav>
              </div>
            </section>
            {/*SUBMITTED ALERT
            =========================================================================================================*/}
            <section id="submitted" className="ts-block">
              <div className="container">
                <div className="row">
                  <div className="offset-2 col-md-8 text-center">
                    <i className="far fa-check-circle ts-text-color-primary display-4 mb-2" />
                    <h1 className="ts-text-color-primary">Thank You!</h1>
                    <h4 className="ts-text-color-light">Your Property Was Submitted Successfully</h4>
                    <a href="#" className="btn btn-secondary">Back to Profile</a>
                    <hr />
                    <a href="#">
                      <i className="fa fa-print ts-opacity__30 mr-2" />
                      Print an invoice
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </main>
          {/*end #ts-main*/}
          {/***********************************************************************************************************/}
          {/************* FOOTER **************************************************************************************/}
          {/***********************************************************************************************************/}
         <Footer />
          {/*end #ts-footer*/}
        </div>
        {/*end page*/}
      </div>
  )
}
