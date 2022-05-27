import React, { useEffect, useState } from 'react'
import styles from "../../styles/Home.module.css";
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function compt() {


    const [isLoading, setLoading] = useState(false)
    const [compt, setCompt] = useState(null)


    useEffect(() => {
        setLoading(true)
       
        fetch("http://localhost:3004/competition/"+window.location.pathname.split("/")[2]) 
        .then(res => res.json())
        .then((data) => {
    
            if(data.error){
                console.log("erreur No data")
                setLoading(false)
            }else{
                
                setCompt(data)
                setLoading(false)
                console.log("data here ... :) ")
    
            }
           
          })
    
    }, [])


    if (isLoading) return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="author" content="ThemeStarz" />
      <link rel="stylesheet" href="../assets/bootstrap/css/bootstrap.min.css" />
      <link rel="stylesheet" href="../assets/font-awesome/css/fontawesome-all.min.css" />
      <link rel="stylesheet" href="../assets/css/leaflet.css" />
      <link rel="stylesheet" href="../assets/css/style.css" />
      <title>MyTerrain</title>
      <NavBar />
      
      <div className="ts-page-wrapper ts-has-bokeh-bg" id="page-top">
        
        <header id="ts-header" className="fixed-top">
        </header>
        <main id="ts-main">
          
      
          
        
        <h1 className={styles.titre}> LoDing ......</h1>
          
        </main>
        {/*end #ts-main*/}
        <Footer />
        {/*end #ts-footer*/}
      </div>
      {/*end page*/}
    </div>)
    if (!compt) return  (<div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="author" content="ThemeStarz" />
      <link rel="stylesheet" href="../assets/bootstrap/css/bootstrap.min.css" />
      <link rel="stylesheet" href="../assets/font-awesome/css/fontawesome-all.min.css" />
      <link rel="stylesheet" href="../assets/css/leaflet.css" />
      <link rel="stylesheet" href="../assets/css/style.css" />
      <title>MyTerrain</title>
      <NavBar />
      
      <div className="ts-page-wrapper ts-has-bokeh-bg" id="page-top">
        
        <header id="ts-header" className="fixed-top">
        </header>
        <main id="ts-main">
          
      
          
        
        <h1 className={styles.titre}> No Data ......</h1>
          
        </main>
        {/*end #ts-main*/}
        <Footer />
        {/*end #ts-footer*/}
      </div>
      {/*end page*/}
    </div>)

  return (
    <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="author" content="ThemeStarz" />
        {/*CSS */}
        <link rel="stylesheet" href="../assets/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" href="../assets/font-awesome/css/fontawesome-all.min.css" />
        <link rel="stylesheet" href="../assets/css/leaflet.css" />
        <link rel="stylesheet" href="../assets/css/style.css" />
        <title>MyHouse - Advanced Real Estate HTML Template by ThemeStarz</title>
        {/* WRAPPER
    =================================================================================================================*/}
        <div className="ts-page-wrapper ts-has-bokeh-bg" id="page-top">
         
          <header id="ts-header" className="fixed-top">
            {/* SECONDARY NAVIGATION
        =============================================================================================================*/}
                <NavBar />
            {/*end #ts-primary-navigation.navbar*/}
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
                <div className="ts-title">
                  <h1>Agency Detail</h1>
                </div>
              </div>
            </section>
            {/*AGENCY INFO
            =========================================================================================================*/}
            <section id="agency-info">
              <div className="container">
                {/*Box*/}
                <div className="ts-box">
                  {/*Ribbon*/}
                  <div className="ts-ribbon">
                    <i className="fa fa-thumbs-up" />
                  </div>
                  {/*Row*/}
                  <div className="row">
                    {/*Brand*/}
                    <div className="col-md-4 ts-center__both">
                      <div className="ts-circle__xxl ts-shadow__md">
                        <img src={"/assets/img/compt.jpg"} width={300} height={300}  alt="" />
                      </div>
                    </div>
                    {/*Description*/}
                    <div className="col-md-8">
                      <div className="py-4">
                        {/*Title*/}
                        <div className="ts-title mb-2">
                          <h2 className="mb-1">{compt.nomComp}</h2>
                          <h5>
                          <Link href={`/terrainp/${encodeURIComponent(compt.id_terrain)}`}>
                            <a>
                            Terrain Details
                            </a>
                            </Link>
                          </h5>
                        </div>
                        {/*Row*/}
                        <div className="row">
                          <div className="col-md-7">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat
                              tempor sapien. In lobortis posuere tincidunt. Curabitur malesuada tempus
                              ligula nec maximus.
                            </p>
                          </div>
                          <div className="col-md-5 ts-opacity__50">
                            {/*Phone*/}
                            <figure className="mb-1">
                              <i className="fa fa-phone-square mr-2" />
                              +1 602-862-1673
                            </figure>
                            {/*Mail*/}
                            <figure className="mb-1">
                              <i className="fa fa-envelope mr-2" />
                              <a href="#">weston@example.com</a>
                            </figure>
                            {/*Skype*/}
                            <figure className="mb-0">
                              <i className="fab fa-skype mr-2" />
                              weston.properties
                            </figure>
                          </div>
                        </div>
                        {/*end row*/}
                      </div>
                      {/*end p-4*/}
                      <div className="ts-bg-light p-3 ts-border-radius__md d-block d-sm-flex ts-center__vertical justify-content-between ts-xs-text-center">
                         
                        <Link href={`/competition/participe/${encodeURIComponent(compt._id)}`}> 

                        <a href="" className="btn btn-outline-secondary btn-sm d-block d-sm-inline-block mb-2 mb-sm-0">Participate here</a> 

                          </Link>


                          <Link href={`/competition/equipe/${encodeURIComponent(compt._id)}`}> 

                        <a href="" className="btn btn-outline-secondary btn-sm d-block d-sm-inline-block mb-2 mb-sm-0">liste des Equipe</a> 

                          </Link>
                       
                       
                        
                        
                        <small className="ts-opacity__50"> Nomber de participant : {compt.nbequipe} | Equipe inscri : {compt.nbpar}  |  Date : {compt.date} </small>
                      </div>
                    </div>
                    {/*end col-md-8*/}
                  </div>
                  {/*end row*/}
                </div>
                {/*end ts-box*/}
              </div>
              {/*end container*/}
            </section>
            {/*end #agency-info*/}
            {/*ITEMS LISTING & SEARCH
            =========================================================================================================*/}
            
          </main>
          <Footer />
          
        </div>
       
      </div>
  )
}
