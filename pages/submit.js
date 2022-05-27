import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Map from './components/Map'
import withAdmin from './components/withAdmin'

const submit = (props) => {
  const EditUser = async () => {

    const payload = {
      withfeild: true,
    }
    const responce = await fetch("http://localhost:3004/Users/UpdateUser/" + localStorage.getItem("iduser"), {
      method: 'put',
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*',
      },
    })
      .then((res) => res.json())
      .then(res => {
        console.log("ani jit ");
      });
  }



  useEffect(() => {
    console.log(props?.user?.withfeild)
    if (localStorage.getItem("role") === "Client") {
      window.location = "/abonement"
    }

  }, [])

  // States
  const [nameTerrain, setNameTerrain] = useState();
  const [price, setPrice] = useState();
  const [area, setArea] = useState();
  const [capaciteJoueur, setCapaciteJoueur] = useState();
  const [valide, setValide] = useState("open");
  const [type, setType] = useState();
  const [address, setAdress] = useState();
  const [ville, setVilla] = useState()
  const [description, setDescription] = useState()
  const [email, setEmail] = useState()
  const [tel, setTel] = useState()



  const router = useRouter();
  const [lng, setLng] = useState(10.1);
  const [lat, setLat] = useState(36.8);

  function getLatLng() {
    console.log({ lat: lat })
    console.log({ lng: lng })
  }
  const addTerrin = async () => {
    const payload = {
      nameTerrain,
      price,
      area,
      capaciteJoueur,
      id_user: localStorage.getItem("iduser"),
      valide,
      type,
      address,
      ville,
      lat: lat.toString(),
      lng: lng.toString(),
      coordinates: [lng, lat],
      description,
      valide,
      email,
      tel,

    }
    const responce = await fetch("http://localhost:3004/terrain/new", {
      method: 'post',
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*',
      },
    })
      .then((res) => res.json())
      .then(res => {
        console.log(res);
        if (res._id) {
          EditUser()
          router.push("/uploadimage/" + res._id + "+" + res.nameTerrain)
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
                            <input type="text" className="form-control" id="title" name="title" required onChange={(e) => setNameTerrain(e.target.value)} />
                          </div>
                        </div>
                        {/*Price*/}
                        <div className="col-sm-4">
                          <div className="input-group">
                            <label htmlFor="price">Price</label>
                            <input type="text" className="form-control border-right-0" id="price" onChange={(e) => setPrice(e.target.value)} />
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
                                <input type="text" className="form-control border-right-0" id="area" onChange={(e) => setArea(e.target.value)} />
                                <div className="input-group-append">
                                  <span className="input-group-text bg-white border-left-0">m<sup>2</sup></span>
                                </div>
                              </div>
                            </div>
                            {/*Rooms*/}
                            <div className="col">
                              <div className="form-group">
                                <label htmlFor="rooms">Number Player</label>
                                <input type="number" className="form-control" id="rooms" name="number" min="6" required onChange={(e) => setCapaciteJoueur(e.target.value)} />
                              </div>
                            </div>
                          </div>
                          {/*end row*/}
                        </div>
                        {/*end col-md-4*/}
                        {/*Type Select*/}
                        <div className="col-sm-6 col-md-4">
                          <div className="form-group">
                            <label htmlFor="type">Type</label>
                            <select className="custom-select" id="type" name="type" onChange={(e) => setType(e.target.value)}>
                              <option value>Select Type</option>
                              <option value={"Terrain Couvert"}>Terrain Couvert</option>
                              <option value={"Terrain Non Couvert"}>Terrain Non Couvert</option>
                            </select>
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
                      <div className="row">
                        <div className="col-sm-6">
                          {/*Address*/}
                          <div className="input-group">
                            <label htmlFor="address">Address</label>
                            <input type="text" className="form-control border-right-0" id="address" onChange={(e) => setAdress(e.target.value)} />
                            <div className="input-group-append" data-toggle="tooltip" data-placement="top" title="Find My Location">
                              <a href="#" className="input-group-text bg-white border-left-0 ">
                                <i className="fa fa-map-marker ts-text-color-primary" />
                              </a>
                            </div>
                          </div>
                          {/*City*/}
                          <div className="form-group">
                            <label htmlFor="city">City</label>
                            <input type="text" className="form-control" id="city" name="city" required onChange={(e) => setVilla(e.target.value)} />
                          </div>
                          {/*State*/}
                          <div className="form-group">
                            <label htmlFor="state">Email</label>
                            <input type="text" className="form-control" id="state" name="email" required onChange={(e) => setEmail(e.target.value)} />
                          </div>
                          {/*ZIP*/}
                          <div className="form-group mb-0">
                            <label htmlFor="zip">Telephone</label>
                            <input type="number" className="form-control" id="zip" name="tel" required onChange={(e) => setTel(e.target.value)} />
                          </div>
                          <div className="form-group mb-0">
                            <label htmlFor="zip">Location</label>
                            <input type="number" className="form-control" id="zip" name="zip" required value={lat} />
                            <input type="number" className="form-control" id="zip" name="zip" required value={lng} />
                          </div>
                        </div>
                        {/*end col-md-6*/}
                        {/*Map*/}
                        <div className="col-sm-5">
                          <Map
                            lat={lat}
                            setLat={setLat}
                            lng={lng}
                            setLng={setLng}
                            getLatLng={getLatLng}
                          />
                        </div>
                        {/*end col-md-6*/}
                      </div>

                      {/*end row*/}
                    </section>
                    {/*end #location*/}
                    {/*GALLERY
                                  =====================================================================================*/}


                    {/*ADDITIONAL INFORMATION
                                  =====================================================================================*/}
                    <section id="additional-information" className="mb-5">
                      {/*Title*/}
                      <h3 className="text-muted border-bottom">Additional Information</h3>
                      {/*Description*/}
                      <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea className="form-control" id="description" rows={4} name="description" defaultValue={""} onChange={(e) => setDescription(e.target.value)} />
                      </div>
                      {/*Row*/}
                      {/*end row*/}
                      <div id="features-checkboxes">
                        <h6 className="mb-3">Features</h6>
                        {/*Checkboxes*/}
                        <div className="ts-column-count-3">
                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="ch_1" name="features[]" defaultValue="ch_1" />
                            <label className="custom-control-label" htmlFor="ch_1">Air conditioning</label>
                          </div>
                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="ch_2" name="features[]" defaultValue="ch_2" />
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
                            <input type="checkbox" className="custom-control-input" id="ch_7" name="features[]" defaultValue="ch_7" />
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
                      </div>
                    </section>
                    <hr />
                    <button className="py-3" >
                      <i className="fa fa-save mr-2" />
                      Save Draft
                    </button>
                    {props?.user?.withfeild ? <button className="btn btn-primary btn-lg float-right">
                      <i className="fa fa-save ts-opacity__50 mr-2" />
                      No Permission
                    </button>
                      :
                      <button className="btn btn-primary btn-lg float-right" onClick={() => { addTerrin() }} >
                        <i className="fa fa-save ts-opacity__50 mr-2" />
                        Save And Add Images
                      </button>
                    }

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
  );
}
export default withAdmin(submit)