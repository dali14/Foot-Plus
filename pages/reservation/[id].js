import React, { useEffect, useState } from 'react'
import styles from "../../styles/Home.module.css";
import {useRouter} from 'next/router'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import Link from 'next/link'

export default function ReservationDetail() {


  const [isLoading, setLoading] = useState(false)
  const [resv, setResv] = useState(null)
  const [etat,setEtat] = useState(null)
  const [montant,setMontant] =useState(null)
  const router = useRouter()
  const Editresv = async () => {
    const payload = {
      etat,
      prixPayant : montant,
      
      
    }
    const responce = await fetch("http://localhost:3004/reservation/"+window.location.pathname.split("/")[2] ,{
       method: 'put',
       body: JSON.stringify(payload),
       headers: { 
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*',
         },
       })
      .then((res) => res.json() )
      .then(res => {
        console.log(res);
        router.reload(window.location.pathname)
  });
  }

  useEffect(() => {
    setLoading(true)

    fetch("http://localhost:3004/reservation/" + window.location.pathname.split("/")[2])
      .then(res => res.json())
      .then((data) => {

        if (data.error) {
          console.log("erreur No data")
          setLoading(false)
        } else {
          setResv(data)
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
  if (!resv) return (<div>
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
      <title>Foot Plus - Mes Reservations</title>
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
                  <div className="col-md-4 ts-center__both">
                    <div className="ts-circle__xxl ts-shadow__md">{
                        resv.etat =="Confirmed" ? <img src={"/assets/img/booking-confirmed.png"} width={200} height={200} alt="" />
                        :resv.etat =="review"? <img src={"/assets/img/bookOnReview.png"} width={200} height={200} alt="" />
                        : <img src={"/assets/img/booking-cancel.png"} width={200} height={200} alt="" />
                    }
                      
                    </div>
                  </div>
                  {/*Description*/}
                  <div className="col-md-8">
                    <div className="py-4">
                      {/*Title*/}
                      <div className="ts-title mb-2">
                        <h2 className="mb-1">Reservation De {resv.name}</h2>
                        <h5>
                        <a>
                        <span className="ts-btn-arrow">Date : {resv.dateD}</span>
                        <span>{resv.dateF}</span>
                        <br></br>
                        <label htmlFor="type">Etat : {resv.etat}</label>
                        <br></br>
                            <label htmlFor="type">Prix : {resv.prix}</label>
                            <br></br>
                            <label htmlFor="type">Montant Payee : {resv.prixPayant}</label>
                        </a>
                        </h5>
                      </div>
                    </div>
                    {/*end p-4*/}
                    <div className="ts-bg-light p-3 ts-border-radius__md d-block d-sm-flex ts-center__vertical justify-content-between ts-xs-text-center">
                    <select className="custom-select" id="type" name="type" onChange={(e) => setEtat(e.target.value)}>
                              <option value>Select Etat</option>
                              <option value={"Confirmed"}>Confirme</option>
                              <option value={"review"}>en attende</option>
                              <option value={"cancel"}>Annuler</option>
                            </select>

                            <label htmlFor="title">             </label>
                              <input type="text" placeholder='Montant Payee' className="form-control" id="title" name="title" required  onChange={(e) => setMontant(e.target.value)}/>
                            
                          <button  onClick={() => { Editresv() }}  className="btn btn-outline-secondary btn-sm d-block d-sm-inline-block mb-2 mb-sm-0">Modifier ReservationS</button>
                       
                      
                      
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
