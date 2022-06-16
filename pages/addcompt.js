import React, { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import {useRouter} from 'next/router'

export default function addcompt() {

  const [nomComp, setNomComp] = useState();
  const [date, setDate] = useState();
  const [tarif, setTarif] = useState();
  const [prix, setPrix] = useState();
  const router = useRouter();
  const [nbequipe,setNbequipe] = useState();
  const addC = async () => {
    const payload = {
      nomComp,
      date,
      tarif,
      prix,
      nbequipe,
      nbpar:0,
      id_terrain :localStorage.getItem("idTerrain"),
      
      
    }
    const responce = await fetch("http://localhost:3004/competition", {
       method: 'post',
       body: JSON.stringify(payload),
       headers: { 
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*',
         },
       })
      .then((res) => res.json() )
      .then(res => {
        console.log(res);
        if(res) {
          router.push("/submitted")
        }
  
  });
  }
  return (
    <div>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="author" content="ThemeStarz" />
    {/*CSS */}
    <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css" />
    <link rel="stylesheet" href="assets/font-awesome/css/fontawesome-all.min.css" />
    <link rel="stylesheet" href="assets/css/leaflet.css" />
    <link rel="stylesheet" href="assets/css/style.css" />

    <title>Foot Plus </title>
    <div className="ts-page-wrapper ts-has-bokeh-bg" id="page-top">

      <header id="ts-header" className="fixed-top">

        <NavBar />
      </header>

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
        {/*PAGE TITLE
            =========================================================================================================*/}
        <section id="page-title">
          <div className="container">
            <div className="row">
              <div className="offset-lg-1 col-lg-10">
                <div className="ts-title">
                  <h1>Submit</h1>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*SUBMIT FORM
            =========================================================================================================*/}
        <section id="submit-form">
          <div className="container">
            <div className="row">
              <div className="offset-lg-1 col-lg-10">
                <div id="form-submit" className="ts-form" method="post">
                  {/*BASIC INFORMATION
                                =====================================================================================*/}
                  <section id="basic-information" className="mb-5">
                    {/*Title*/}
                    <h3 className="text-muted border-bottom">Basic Information</h3>
                    {/*Row*/}
                    <div className="row">
                      {/*Title*/}
                      <div className="col-sm-8">
                        <div className="form-group">
                          <label htmlFor="title">Title</label>
                          <input type="text" className="form-control" id="title" name="title" required onChange={(e) => setNomComp(e.target.value)}/>
                        </div>
                      </div>
                      {/*Price*/}
                      <div className="col-sm-4">
                        <div className="input-group">
                          <label htmlFor="price">Price To participate </label>
                          <input type="text" className="form-control border-right-0" id="price" onChange={(e) => setTarif(e.target.value)}/>
                          <div className="input-group-append">
                            <span className="input-group-text bg-white border-left-0">$</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="input-group">
                          <label htmlFor="price">Price Win</label>
                          <input type="text" className="form-control border-right-0" id="price" onChange={(e) => setPrix(e.target.value)}/>
                          <div className="input-group-append">
                            <span className="input-group-text bg-white border-left-0">$</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-4">
                        <div className="row">
                          {/*Area*/}
                          
                          {/*Rooms*/}
                          <div className="col">
                            <div className="form-group">
                              <label htmlFor="rooms">Number Equipe</label>
                              <input type="number" className="form-control" id="rooms" name="number" min="6" required onChange={(e) => setNbequipe(e.target.value)}/>
                            </div>
                          </div>
                        </div>
                        {/*end row*/}
                      </div>
                      {/*end col-md-4*/}
                      {/*Type Select*/}
                      <div className="col">
                            <div className="form-group">
                              <label htmlFor="rooms">Date de Competition</label>
                              <input type="date" className="form-control" id="rooms" name="number"  required onChange={(e) => setDate(e.target.value)}/>
                            </div>
                          </div>
                      {/*Status Select*/}
                    </div>
                    {/*end row*/}
                  </section>
                  {/*LOCATION
                                =====================================================================================*/}
                  <section id="location" className="mb-5">
                    {/*Title*/}
                    <h3 className="text-muted border-bottom">Location</h3>
                    

                    {/*end row*/}
                  </section>
                  {/*end #location*/}
                  {/*GALLERY
                                =====================================================================================*/}
                 
                  
                  {/*ADDITIONAL INFORMATION
                                =====================================================================================*/}
                 
                  <hr />
                  <button className="py-3" >
                    <i className="fa fa-save mr-2" />
                    Save Draft
                  </button>
                  <button className="btn btn-primary btn-lg float-right" onClick={() => { addC() }} >
                        <i className="fa fa-save ts-opacity__50 mr-2" />
                        Add Competition
                      </button>
                </div>
                {/*end #form-submit*/}
              </div>
              {/*end offset-lg-1 col-lg-10*/}
            </div>
            {/*end row*/}
          </div>
          {/*end container*/}
        </section>
      </main>
      <Footer />
      {/*end #ts-footer*/}
    </div>
    {/*end page*/}
  </div>
    
  )
}
