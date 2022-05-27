import React, { useState, useEffect } from 'react'
import {useRouter} from 'next/router'
import styles from "../styles/Home.module.css";
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Map from './components/Map'

const edit = () => {
  const [isLoading, setLoading] = useState(false)
  const [nameTerrain, setNameTerrain] = useState();
  const [price, setPrice] = useState();
  const [area, setArea] = useState();
  const [capaciteJoueur, setCapaciteJoueur] = useState();
  const [valide, setValide] = useState("open");
  const [type, setType] = useState();
  const [address, setAdress] = useState();
  const [ville, setVille] = useState()
  const [description, setDescription] = useState()

  const router = useRouter()
  const [lng, setLng] = useState();
  const [lat, setLat] = useState();


  function getLatLng() {
    console.log({ lat: lat })
    console.log({ lng: lng })
  }
  const [terrain, setTerrain] = useState()       

  const EditTerrain = async () => {
    const payload = {
      nameTerrain,
      price,
      area,
      capaciteJoueur,
      id_user :localStorage.getItem("iduser"),
      valide,
      type,
      address,
      ville,
      lat:lat.toString(),
      lng:lng.toString(),
      description,
      valide,
      
    }
    const responce = await fetch("http://localhost:3004/terrain/UpdateTerrain/"+terrain._id ,{
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
        router.push("/Myterrain")
        
  
  });
  }

  useEffect(() => {
    setLoading(true)
    fetch("http://localhost:3004/MyTerrain/"+localStorage.getItem("iduser"))
    .then(res => res.json())
    .then(data =>{
          if(data.error){
            setLoading(false)
          }else{
            setTerrain(data)
            setLoading(false)
          } 
                }
          )
  }, [])


  if (isLoading) return (  <div>
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

  if (!terrain) return  (<div>
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
        <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" href="assets/font-awesome/css/fontawesome-all.min.css" />
        <link rel="stylesheet" href="assets/css/leaflet.css" />
        <link rel="stylesheet" href="assets/css/style.css" />
        <title>MY Terrain - FOOT +</title>
       
        <div className="ts-page-wrapper ts-has-bokeh-bg" id="page-top">
         
          <header id="ts-header" className="fixed-top">
         
          </header>
      
          <NavBar />
          <main id="ts-main">
            
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
            
            <section id="page-title">
              <div className="container">
                <div className="row">
                  <div className="offset-lg-1 col-lg-10">
                    <div className="ts-title">
                      <h1>
                        <i className="fa fa-pencil-alt ts-opacity__30 mr-3" />
                        Edit Property
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </section>
           
            <section id="edit-form">
              <div className="container">
                <div className="row">
                  <div className="offset-lg-1 col-lg-10">
                    <div id="form-edit" className="ts-form" method="post">
                      
                      <section id="basic-information" className="mb-5">
                        {/*Title*/}
                        <h3 className="text-muted border-bottom">Basic Information</h3>
                        {/*Row*/}
                        <div className="row">
                          {/*Title*/}
                          <div className="col-sm-8">
                            <div className="form-group">
                              <label htmlFor="title">Title</label>
                              <input type="text" className="form-control" id="title" name="title" defaultValue={terrain.nameTerrain} required  onChange={(e) => setNameTerrain(e.target.value)}/>
                            </div>
                          </div>
                          {/*Price*/}
                          <div className="col-sm-4">
                            <div className="input-group">
                              <label htmlFor="price">Price</label>
                              <input type="text" className="form-control border-right-0" id="price" defaultValue={terrain.price} onChange={(e) => setPrice(e.target.value)} />
                              <div className="input-group-append">
                                <span className="input-group-text bg-white border-left-0">$</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-4">
                            <div className="row">
                              {/*Area*/}
                              <div className="col">
                                <div className="input-group">
                                  <label htmlFor="area">Area</label>
                                  <input type="text" className="form-control border-right-0" id="area" defaultValue={terrain.area} onChange={(e) => setArea(e.target.value)} />
                                  <div className="input-group-append">
                                    <span className="input-group-text bg-white border-left-0">m<sup>2</sup></span>
                                  </div>
                                </div>
                              </div>
                              {/*Rooms*/}
                              <div className="col">
                                <div className="form-group">
                                  <label htmlFor="rooms">Number Of Player</label>
                                  <input type="number" className="form-control" id="rooms" name="rooms" min={6} defaultValue={terrain.capaciteJoueur} required  onChange={(e) => setCapaciteJoueur(e.target.value)}/>
                                </div>
                              </div>
                            </div>
                            {/*end row*/}
                          </div>
                          
                          <div className="col-sm-6 col-md-4">
                            <div className="form-group">
                              <label htmlFor="type">Type</label>
                              <select className="custom-select" id="type" name="type" onChange={(e) => setType(e.target.value)} >
                                <option value>Select Type</option>
                                <option value={"Couvert"}>Couvert</option>
                                <option value={"Non Couvert"}>Non Couvert</option>
                                
                              </select>
                            </div>
                          </div>
                          {/*Status Select*/}
                          <div className="col-sm-6 col-md-4">
                            <div className="form-group">
                              <label htmlFor="status">Status</label>
                              <select className="custom-select" id="status" name="status" onChange={(e) => setValide(e.target.value)}>
                                <option value>Select Status</option>
                                <option value={"Open"}>Open</option>
                                <option value={"Closed"}>Closed</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        {/*end row*/}
                      </section>
                      
                      <section id="location" className="mb-5">
                        {/*Title*/}
                        <h3 className="text-muted border-bottom">Location</h3>
                        <div className="row">
                          <div className="col-sm-6">
                            {/*Address*/}
                            <div className="input-group">
                              <label htmlFor="address">Address</label>
                              <input type="text" className="form-control border-right-0" id="address" defaultValue={terrain.address} onChange={(e) => setAdress(e.target.value)} />
                              <div className="input-group-append" data-toggle="tooltip" data-placement="top" title="Find My Location">
                                <a href="#" className="input-group-text bg-white border-left-0 ">
                                  <i className="fa fa-map-marker ts-text-color-primary" />
                                </a>
                              </div>
                            </div>
                            {/*City*/}
                            <div className="form-group">
                              <label htmlFor="city">City</label>
                              <input type="text" className="form-control" id="city" name="city" defaultValue={terrain.ville} required  />
                            </div>
                            {/*State*/}
                            <div className="form-group">
                              <label htmlFor="state">State</label>
                              <input type="text" className="form-control" id="state" name="state" defaultValue={terrain.ville} required onChange={(e) => setVille(e.target.value)} />
                            </div>
                            {/*ZIP*/}
                            <div className="form-group mb-0">
                              <label htmlFor="zip">ZIP</label>
                              <input type="number" className="form-control" id="zip" name="zip" defaultValue={2010} required />
                            </div>
                           
                          </div>
                          {/*end col-md-6*/}
                          {/*Map*/}
                          <div className="col-sm-6">
                          <div className="form-group mb-0">
                            <label htmlFor="zip">Location</label>
                            <input type="number" className="form-control" id="zip" name="lat" required value={lat} onChange={(e) => setLat(e.target.value)} />
                            <input type="number" className="form-control" id="zip" name="lng" required value={lng} onChange={(e) => setLng(e.target.value)}/>
                          </div>
                          <br></br>
                          <br></br>
                          <Map
                            lat={terrain.lat}
                            setLat={setLat}
                            lng={terrain.lng}
                            setLng={setLng}
                            getLatLng={getLatLng}
                          />
                           
                          </div>
                          
                          
                        </div>
                        <br></br>
                          <br></br>
                       
                      </section>
                      
                      <section id="gallery" className="mb-5">
                      
                        <h3 className="text-muted border-bottom">Gallery</h3>
                       
                        <div className="file-uploaded-images">
                        {terrain.image.map((index) =>
                          <div className="image" key={index.id}>
                            <figure className="remove-image"><i className="fa fa-times" /></figure>
                            <img src={JSON.parse(index)} width="200" alt="" />
                          </div>
                         )}
                          
                        </div>
                       
                        <div className="file-upload-previews" />
                        <div className="file-upload">
                          <input type="file" name="files[]" className="file-upload-input with-preview" multiple title="Click to add files" maxLength={10} accept="gif|jpg|png" />
                          <span><i className="fa fa-plus-circle" />Click or drag images here</span>
                        </div>
                      </section>
                      {/*ADDITIONAL INFORMATION
                                =====================================================================================*/}
                      <section id="additional-information" className="mb-5">
                        {/*Title*/}
                        <h3 className="text-muted border-bottom">Additional Information</h3>
                        {/*Description*/}
                        <div className="form-group">
                          <label htmlFor="description">Description</label>
                          <textarea className="form-control" id="description" rows={4} name="description" defaultValue={terrain.description} onChange={(e) => setDescription(e.target.value)} />
                        </div>
                        {/*Row*/}
                        
                        {/*end row*/}
                        <div id="features-checkboxes">
                          <h6 className="mb-3">Features</h6>
                          {/*Checkboxes*/}
                          <div className="ts-column-count-3">
                            <div className="custom-control custom-checkbox">
                              <input type="checkbox" className="custom-control-input" id="ch_1" name="features[]" defaultValue="ch_1" defaultChecked />
                              <label className="custom-control-label" htmlFor="ch_1">Air conditioning</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                              <input type="checkbox" className="custom-control-input" id="ch_2" name="features[]" defaultValue="ch_2" defaultChecked />
                              <label className="custom-control-label" htmlFor="ch_2">Bedding</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                              <input type="checkbox" className="custom-control-input" id="ch_3" name="features[]" defaultValue="ch_3" />
                              <label className="custom-control-label" htmlFor="ch_3">Heating</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                              <input type="checkbox" className="custom-control-input" id="ch_4" name="features[]" defaultValue="ch_4" />
                              <label className="custom-control-label" htmlFor="ch_4">Internet</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                              <input type="checkbox" className="custom-control-input" id="ch_5" name="features[]" defaultValue="ch_5" />
                              <label className="custom-control-label" htmlFor="ch_5">Microwave</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                              <input type="checkbox" className="custom-control-input" id="ch_6" name="features[]" defaultValue="ch_6" />
                              <label className="custom-control-label" htmlFor="ch_6">Smoking allowed</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                              <input type="checkbox" className="custom-control-input" id="ch_7" name="features[]" defaultValue="ch_7" defaultChecked />
                              <label className="custom-control-label" htmlFor="ch_7">Terrace</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                              <input type="checkbox" className="custom-control-input" id="ch_8" name="features[]" defaultValue="ch_8" />
                              <label className="custom-control-label" htmlFor="ch_8">Balcony</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                              <input type="checkbox" className="custom-control-input" id="ch_9" name="features[]" defaultValue="ch_9" />
                              <label className="custom-control-label" htmlFor="ch_9">Iron</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                              <input type="checkbox" className="custom-control-input" id="ch_10" name="features[]" defaultValue="ch_10" />
                              <label className="custom-control-label" htmlFor="ch_10">Hi-Fi</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                              <input type="checkbox" className="custom-control-input" id="ch_11" name="features[]" defaultValue="ch_11" />
                              <label className="custom-control-label" htmlFor="ch_11">Beach</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                              <input type="checkbox" className="custom-control-input" id="ch_12" name="features[]" defaultValue="ch_12" />
                              <label className="custom-control-label" htmlFor="ch_12">Parking</label>
                            </div>
                          </div>
                          {/*end ts-column-count-3*/}
                        </div>
                        {/*end #features-checkboxes*/}
                      </section>
                      {/*end #additional-information*/}
                      <hr />
                      <section className="py-3">
                        <button className="btn btn-outline-secondary btn-lg float-left">
                          <i className="fa fa-times mr-2" />
                          Discard Changes
                        </button>
                        <button className="btn btn-primary btn-lg float-right" onClick={() => { EditTerrain() }} >
                          <i className="fa fa-save ts-opacity__50 mr-2" />
                          Save Changes
                        </button>
                      </section>
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
export default edit ;