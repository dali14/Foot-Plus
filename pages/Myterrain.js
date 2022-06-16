
import React, { useState, useEffect } from "react";
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import styles from "../styles/Home.module.css";
import MapA from '../components/MapA'
import withAdmin from "../components/withAdmin";
import Link from 'next/link'
const Myterrain = (props) => {


  const [isLoading, setLoading] = useState(false)

  const [lng, setLng] = useState();
  const [lat, setLat] = useState();



  const [terrain, setTerrain] = useState(null)

  useEffect(() => {
    setLoading(true)
    fetch("http://localhost:3004/MyTerrain/" + localStorage.getItem("iduser"))
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          console.log("erreur No data")
          setLoading(false)
        }
        else {
          setTerrain(data)
          localStorage.setItem('idTerrain', data._id)
          setLoading(false)
          console.log("data here ...  :) ")
        }
      }
      )
    console.log(terrain)
  }, [isLoading])


  //   if (!isLoading)return (  <div>
  //     <meta charSet="UTF-8" />
  //     <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  //     <meta name="author" content="ThemeStarz" />
  //     <link rel="stylesheet" href="../assets/bootstrap/css/bootstrap.min.css" />
  //     <link rel="stylesheet" href="../assets/font-awesome/css/fontawesome-all.min.css" />
  //     <link rel="stylesheet" href="../assets/css/leaflet.css" />
  //     <link rel="stylesheet" href="../assets/css/style.css" />
  //     <title>MyTerrain</title>
  //     <NavBar />

  //     <div className="ts-page-wrapper ts-has-bokeh-bg" id="page-top">

  //       <header id="ts-header" className="fixed-top">
  //       </header>
  //       <main id="ts-main">




  //       <h1 className={styles.titre}> LoDing ......</h1>

  //       </main>
  //       {/*end #ts-main*/}
  //       <Footer />
  //       {/*end #ts-footer*/}
  //     </div>
  //     {/*end page*/}
  //   </div>)

  //   if (!terrain) return  (<div>
  //     <meta charSet="UTF-8" />
  //     <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  //     <meta name="author" content="ThemeStarz" />
  //     <link rel="stylesheet" href="../assets/bootstrap/css/bootstrap.min.css" />
  //     <link rel="stylesheet" href="../assets/font-awesome/css/fontawesome-all.min.css" />
  //     <link rel="stylesheet" href="../assets/css/leaflet.css" />
  //     <link rel="stylesheet" href="../assets/css/style.css" />
  //     <title>MyTerrain</title>
  //     <NavBar />

  //     <div className="ts-page-wrapper ts-has-bokeh-bg" id="page-top">

  //       <header id="ts-header" className="fixed-top">
  //       </header>
  //       <main id="ts-main">




  //       <h1 className={styles.titre}> No Data ......</h1>

  //       </main>
  //       {/*end #ts-main*/}
  //       <Footer />
  //       {/*end #ts-footer*/}
  //     </div>
  //     {/*end page*/}
  //   </div>)

  //   if (props.role == "Client") return  (<div>
  // <meta charSet="UTF-8" />
  // <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  // <meta name="author" content="ThemeStarz" />
  // <link rel="stylesheet" href="../assets/bootstrap/css/bootstrap.min.css" />
  // <link rel="stylesheet" href="../assets/font-awesome/css/fontawesome-all.min.css" />
  // <link rel="stylesheet" href="../assets/css/leaflet.css" />
  // <link rel="stylesheet" href="../assets/css/style.css" />
  // <title>MyTerrain</title>
  // <NavBar />

  // <div className="ts-page-wrapper ts-has-bokeh-bg" id="page-top">

  //   <header id="ts-header" className="fixed-top">
  //   </header>
  //   <main id="ts-main">




  //   <h1 className={styles.titre}> No Permation</h1>

  //   </main>
  //   {/*end #ts-main*/}
  //   <Footer />
  //   {/*end #ts-footer*/}
  // </div>
  // {/*end page*/}
  //   </div>)

  return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="author" content="ThemeStarz" />
      <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css" />
      <link rel="stylesheet" href="assets/font-awesome/css/fontawesome-all.min.css" />
      <link rel="stylesheet" href="assets/css/leaflet.css" />
      <link rel="stylesheet" href="assets/css/style.css" />
      <title>MyTerrain</title>
      <NavBar />

      {terrain ?
        <div className="ts-page-wrapper ts-has-bokeh-bg" id="page-top">
          <header id="ts-header" className="fixed-top">
          </header>
          <main id="ts-main">

            <section id="breadcrumb">
              <div className="container">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                   
                  </ol>
                </nav>
              </div>
            </section>
            <section id="page-title">
              <div className="container">
                <div className="d-block d-sm-flex justify-content-between">
                  <div className="ts-title mb-0">
                    <h1>{terrain.nameTerrain}</h1>
                    <h5 className="ts-opacity__90">
                      <i className="fa fa-map-marker text-primary" />
                      {terrain.address}
                    </h5>
                  </div>

                  <h3>
                    <Link href="/calendar">
                    <a className="mx-1">
                      <span className="badge badge-primary p-3 font-weight-normal ts-shadow__sm">
                        My Calendar
                      </span>
                    </a>
                    </Link>
                    <Link href="/reservation">
                    <a className="mx-1">
                      <span className="badge badge-primary p-3 font-weight-normal ts-shadow__sm">
                        List booking
                      </span>
                    </a>
                    </Link>
                    <Link href="/edit">
                    <a  className="mx-1">
                      <span className="badge badge-primary p-3 font-weight-normal ts-shadow__sm">
                        Edit Terrain
                      </span>
                    </a>
                    </Link>
                    <Link href="/addcompt">
                    <a  className="mx-1">
                      <span className="badge badge-primary p-3 font-weight-normal ts-shadow__sm">
                        Add Competition
                      </span>
                    </a>
                    </Link>
                  </h3>

                </div>
              </div>
            </section>

            <section id="content">
              <div className="container">
                <div className="row flex-wrap-reverse">

                  <div className="col-md-5 col-lg-4">

                    <section>
                      <h3>Details</h3>
                      <div className="ts-box">
                        <dl className="ts-description-list__line mb-0">
                          <dt>ID:</dt>
                          <dd>{terrain._id}</dd>
                          <dt>Category:</dt>
                          <dd>FootBall</dd>
                          <dt>Status:</dt>
                          <dd>{terrain.valide}</dd>
                          <dt>Area:</dt>
                          <dd>{terrain.area}<sup>2</sup></dd>
                          <dt>CapaciteJoueur</dt>
                          <dd>{terrain.capaciteJoueur}</dd>

                        </dl>
                      </div>
                    </section>

                    <section id="location">
                      <h3>Location</h3>
                      <div className="ts-box p-0">
                        <div className="ts-map ts-map__detail" id="ts-map-simple">
                          <MapA
                            lat={terrain.lat}
                            setLat={setLat}
                            lng={terrain.lng}
                            setLng={setLng}

                          />
                        </div>
                        <dl className="ts-description-list__line mb-0 p-4">
                          <dt><i className="fa fa-map-marker ts-opacity__30 mr-2" />Address:</dt>
                          <dd className="border-bottom pb-2">{terrain.address}</dd>
                          <dt><i className="fa fa-phone-square ts-opacity__30 mr-2" />Phone:</dt>
                          <dd className="border-bottom pb-2">+216 {terrain.tel}</dd>
                          <dt><i className="fa fa-envelope ts-opacity__30 mr-2" />Email:</dt>
                          <dd className="border-bottom pb-2"><Link href="/"><a>{terrain.email}</a></Link></dd>
                          <dt><i className="fa fa-globe ts-opacity__30 mr-2" />Website:</dt>
                          <dd> <Link href="/"><a>www.footPlus.com</a></Link></dd>
                        </dl>
                      </div>
                    </section>

                    <section id="actions">
                      <div className="d-flex justify-content-between">
                        <a className="btn btn-light mr-2 w-100" data-toggle="tooltip" data-placement="top" title="Add to favorites">
                          <i className="far fa-star" />
                        </a>
                        <a className="btn btn-light mr-2 w-100" data-toggle="tooltip" data-placement="top" title="Print">
                          <i className="fa fa-print" />
                        </a>
                        <a className="btn btn-light mr-2 w-100" data-toggle="tooltip" data-placement="top" title="Add to compare">
                          <i className="fa fa-exchange-alt" />
                        </a>
                        <a className="btn btn-light w-100" data-toggle="tooltip" data-placement="top" title="Share property">
                          <i className="fa fa-share-alt" />
                        </a>
                      </div>
                    </section>
                  </div>

                  <div className="col-md-7 col-lg-8">


                    <section id="gallery" className="mb-5">
                      {/*Title*/}
                      <h3 className="text-muted border-bottom">Gallery</h3>
                      {/*Uploaded images*/}

                      <div className="file-uploaded-images">
                        {terrain.image.map((img) => <div className="image" key={img.id} >
                          <Link href={img} >
                          <a  className="ts-zoom popup-image" >
                            <img src={img} alt="" width={220} height={200} />
                          </a>
                          </Link>
                        </div>)}
                      </div>
                      {/*Image*/}

                    </section>


                    <section id="quick-info">
                      <h3>Quick Info</h3>

                      <div className="ts-quick-info ts-box">

                        <div className="row no-gutters">

                          <div className="col-sm-3">
                            <div className="ts-quick-info__item">
                              <h6>Open At</h6>
                              <figure>8h</figure>
                            </div>
                          </div>

                          <div className="col-sm-3">
                            <div className="ts-quick-info__item">
                              <h6>CapaciteJoueur</h6>
                              <figure>{terrain.capaciteJoueur}</figure>
                            </div>
                          </div>

                          <div className="col-sm-3">
                            <div className="ts-quick-info__item" >
                              <h6>Area</h6>
                              <figure>{terrain.area}<sup>2</sup></figure>
                            </div>
                          </div>

                          <div className="col-sm-3">
                            <div className="ts-quick-info__item">
                              <h6>Prix Reservation </h6>
                              <figure>{terrain.price}</figure>
                            </div>
                          </div>
                        </div>
                        {/*end row*/}
                      </div>
                      {/*end ts-quick-info*/}
                    </section>
                    {/*DESCRIPTION
                            =========================================================================================*/}
                    <section id="description">
                      <h3>Description</h3>
                      <p>
                        {terrain.description}
                      </p>
                    </section>
                    {/*FEATURES
                            =========================================================================================*/}
                    <section id="features">
                      <h3>Features</h3>
                      <ul className="list-unstyled ts-list-icons ts-column-count-4 ts-column-count-sm-2 ts-column-count-md-2">
                        <li>
                          <i className="fa fa-bell" />
                          Door Bell
                        </li>
                        <li>
                          <i className="fa fa-wifi" />
                          Wi-Fi
                        </li>
                        <li>
                          <i className="fa fa-utensils" />
                          Restaurant Nearby
                        </li>
                        <li>
                          <i className="fa fa-plug" />
                          230V Plugs
                        </li>
                        <li>
                          <i className="fa fa-wheelchair" />
                          Accessible
                        </li>
                        <li>
                          <i className="fa fa-phone" />
                          Phone
                        </li>
                        <li>
                          <i className="fa fa-train" />
                          Train Station
                        </li>
                        <li>
                          <i className="fa fa-key" />
                          Secured Key
                        </li>
                      </ul>
                    </section>
                    {/*FLOOR PLANS
                            =========================================================================================*/}
                    <section id="floor-plans">
                      <h3>Floor Plans</h3>
                      {/*1st Floor*/}
                      <a  className="ts-box d-block mb-2 py-3" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapse-floor-1">
                        1st Floor
                        <div className="collapse" id="collapse-floor-1">
                          
                        </div>
                      </a>
                      {/*2nd Floor*/}
                      <a  className="ts-box d-block py-3" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapse-floor-2">
                        2nd Floor
                        <div className="collapse" id="collapse-floor-2">
                          
                        </div>
                      </a>
                    </section>
                    {/*VIDEO
                        =============================================================================================*/}

                    {/*AMENITIES
                        =============================================================================================*/}
                    <section id="amenities">
                      <h3>Amenities</h3>
                      <ul className="ts-list-colored-bullets ts-text-color-light ts-column-count-3 ts-column-count-md-2">
                        <li>Air Conditioning</li>
                        <li>Swimming Pool</li>
                        <li>Central Heating</li>
                        <li>Laundry Room</li>
                        <li>Gym</li>
                        <li>Alarm</li>
                        <li>Window Covering</li>
                        <li>Internet</li>
                      </ul>
                    </section>
                    {/*CONTACT THE AGENT
                        =============================================================================================*/}

                  </div>
                  {/*end col-md-8*/}
                </div>
                {/*end row*/}
              </div>
              {/*end container*/}
            </section>
            {/*SIMILAR PROPERTIES
        =============================================================================================================*/}

          </main>
          {/*end #ts-main*/}
          <Footer />
          {/*end #ts-footer*/}
        </div>
        : terrain == null ?
          <>
            <div>
              <meta charSet="UTF-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
              <meta name="author" content="ThemeStarz" />
              <link rel="stylesheet" href="../assets/bootstrap/css/bootstrap.min.css" />
              <link rel="stylesheet" href="../assets/font-awesome/css/fontawesome-all.min.css" />
              <link rel="stylesheet" href="../assets/css/leaflet.css" />
              <link rel="stylesheet" href="../assets/css/style.css" />
              <title>MyTerrain</title>


              <div className="ts-page-wrapper ts-has-bokeh-bg" id="page-top">

                <header id="ts-header" className="fixed-top">
                </header>
                <main id="ts-main">



                  <div className="offset-2 col-md-8 text-center">

                    <h1 className={styles.titre}> Vous n'avez pas encore un terrain ... </h1>

                    {props?.user?.role == "Client" ? 
                      <Link  href="/abonement"><a className="btn btn-secondary">Abonement</a></Link>
                      :
                      <Link href="/submit"><a className="btn btn-secondary">Add Property</a></Link>
                    }
                  </div>
                </main>
                {/*end #ts-main*/}
                <Footer />
                {/*end #ts-footer*/}
              </div>
              {/*end page*/}
            </div>
          </>
          :
          "Loading..."}
      {/*end page*/}
    </div>
  )
}
export default withAdmin(Myterrain);