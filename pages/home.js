
import React ,{ useState ,useEffect } from 'react'
import Link from 'next/link'
// import Map from './components/Map'
import Map from './components/homeMap'
import Footer from './components/Footer';
import {useRouter} from 'next/router'
export default function home() {
  const router = useRouter()

    const [lng, setLng] = useState(null);
    const [lat, setLat] = useState(null); 
    const [user, setUser] = useState(null);
    const [terrain, setTerrain] = useState(
      [{
          nameTerrain: "",
          price: "",
          area: "",
          capaciteJoueur: "",
          id_user: "",
          valide: "",
          address: "",
          ville: "",
          description:"",
          image:["0","0"],
          lng:"",
          lat:"",
  
          
      }]
      )  
      function logout(){
        localStorage.clear()
        router.push('/login')
      }
      useEffect(() => { 
        
        fetch("http://localhost:3004/terrain/AllTerrain")
        .then(res => res.json())
        .then(res =>{
          setTerrain(res)
          
          console.log(res)
        })
         
        
      }, [])
      useEffect(() => {
  
        if(localStorage.getItem("token")) {

          fetch("http://localhost:3004/api/details", {headers: {"x-access-token": localStorage.getItem("token")}})
          .then(res => res.json())
          .then(res => {
              setUser(res)
          })
      } 
  }, [])
         
  


     
      
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
          <header id="ts-header" className="fixed-top" style={{position: "unset"}}>
          <nav id="ts-secondary-navigation" className="navbar p-0">
    <div className="container justify-content-end justify-content-sm-between">
      {/*Left Side*/}
      <div className="navbar-nav d-none d-sm-block">
        {/*Phone*/}
        <span className="mr-4">
          <i className="fa fa-phone-square mr-1" />
          +1 123 456 789
        </span>
        {/*Email*/}
        <a href="#">
          <i className="fa fa-envelope mr-1" />
          hello@example.com
        </a>
      </div>
      {/*Right Side*/}
      <div className="navbar-nav flex-row">
        {/*Search Input*/}
        <input type="text" className="form-control p-2 border-left bg-transparent w-auto" placeholder="Search" />
        {/*Currency Select*/}
        <select className="custom-select bg-transparent ts-text-small border-left" id="currency" name="currency">
          <option value={1}>GBP</option>
          <option value={2}>USD</option>
          <option value={3}>EUR</option>
        </select>
        {/*Language Select*/}
        <select className="custom-select bg-transparent ts-text-small border-left border-right" id="language" name="language">
          <option value={1}>EN</option>
          <option value={2}>FR</option>
          <option value={3}>DE</option>
        </select>
      </div>
      {/*end navbar-nav*/}
    </div>
    {/*end container*/}
          </nav>
  <nav id="ts-primary-navigation" className="navbar navbar-expand-md navbar-light">
              <div className="container">
                {/*Brand Logo*/}
                <a className="navbar-brand" href="/home">
                  <img src="assets/img/logo.png" alt="" />
                </a>
                {/*Responsive Collapse Button*/}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarPrimary" aria-controls="navbarPrimary" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                {/*Collapsing Navigation*/}
                <div className="collapse navbar-collapse" id="navbarPrimary">
                  {/*LEFT NAVIGATION MAIN LEVEL
                    =================================================================================================*/}
                  <ul className="navbar-nav">
                    {/*HOME (Main level)
                        =============================================================================================*/}
                    <li className="nav-item ts-has-child">
                      {/*Main level link*/}
                      <a className="nav-link active" href="/home">
                        Home
                        <span className="sr-only">(current)</span>
                      </a>
                      {/* List (1st level) */}
                     
                      {/*end List (1st level) */}
                    </li>
                    {/*end HOME nav-item*/}
                    {/*LISTING (Main level)
                        =============================================================================================*/}
                    <li className="nav-item ts-has-child">
                      {/*Main level link*/}
                      <a className="nav-link" href="/competition">Competition</a>
                      {/* List (1st level) */}
                     
                      {/*end List (1st level) */}
                    </li>
                    {/*end LISTING nav-item*/}
                    {/*PAGES (Main level)
                        =============================================================================================*/}
                    <li className="nav-item ts-has-child">
                      {/*Main level link*/}
                      <a className="nav-link" href="/myterrain">My Terrain</a>
                      {/* List (1st level) */}
                      
                      {/*end List (1st level) */}
                    </li>
                    {/*end PAGES nav-item*/}
                    {/*ABOUT US (Main level)
                        =============================================================================================*/}
                    <li className="nav-item">
                    <a className="nav-link" href="/abonement">Abonnement</a>
                    </li>
                    {/*end ABOUT US nav-item*/}
                    {/*CONTACT (Main level)
                        =============================================================================================*/}
                    <li className="nav-item">
                      <a className="nav-link mr-2" href="/contact">Contact</a>
                    </li>
                    {/*end CONTACT nav-item*/}
                  </ul>
                  {/*end Left navigation main level*/}
                  {/*RIGHT NAVIGATION MAIN LEVEL
                    =================================================================================================*/}
                  <ul className="navbar-nav ml-auto">
                    {/*LOGIN (Main level)
                        =============================================================================================*/}
                    <li className="nav-item">
                      {user?.name ? <a className="btn btn-outline-primary btn-sm m-1 px-3" href="/Myterrain" >Hello : {user?.name} </a> :<a href="/login" className="nav-link">Login</a>}
                    </li>
                    {/*REGISTER (Main level)
                        =============================================================================================*/}
                    <li className="nav-item">
                      {user?.name ?  <a className="btn btn-outline-primary btn-sm m-1 px-3" onClick={() => { logout() }}>Logout </a>:<a className="nav-link text-dark" href="/register">Register</a>}
                    </li>
                    {/*SUBMIT (Main level)
                        =============================================================================================*/}

                      {user?.name ?
                    <li className="nav-item">
                      <a className="btn btn-outline-primary btn-sm m-1 px-3" href="/submit">
                        <i className="fa fa-plus small mr-2" />
                        Add Property
                      </a>
                    </li> : <li className="nav-item">
                      <a className="btn btn-outline-primary btn-sm m-1 px-3" href="/login">
                        <i className="fa fa-plus small mr-2" />
                        Add Property
                      </a>
                    </li> }
                  </ul>
                  {/*end Right navigation*/}
                </div>
                {/*end navbar-collapse*/}
              </div>
              {/*end container*/}
            </nav>
            
          </header>
          {/*end Header*/}
          {/* HERO MAP
    =================================================================================================================*/}
          <section id="ts-hero" className=" mb-0">
            {/*Fullscreen mode*/}
            <div className="ts-full-screen ts-has-horizontal-results w-1001 d-flex1 flex-column1">
              {/* MAP
            =========================================================================================================*/}
              <div className="ts-map ts-shadow__sm">
                {/* FORM
                =====================================================================================================*/}
                <div className="ts-form__map-search ts-z-index__2">
                  {/*Form*/}
                  <form className="ts-form">
                    {/*Collapse button*/}
                    <a href=".ts-form-collapse" data-toggle="collapse" className="ts-center__vertical justify-content-between">
                      <h5 className="mb-0">Search Filter</h5>
                    </a>
                    {/*Form*/}
                    <div className="ts-form-collapse ts-xs-hide-collapse collapse show">
                      {/*Keyword*/}
                      <div className="form-group my-2 pt-2">
                        <input type="text" className="form-control" id="keyword" name="keyword" placeholder="Address, City or ZIP" />
                      </div>
                      {/*Category*/}
                      <select className="custom-select my-2" id="type" name="category">
                        <option value>Type</option>
                        <option value={"Couvert"}>Couvert </option>
                        <option value={"Non Couvert"}>Non Couvert</option>
                       
                      </select>
                      {/*Status*/}
                      <select className="custom-select my-2" id="status" name="status">
                        <option value>Status</option>
                        <option value={1}>Sale</option>
                        <option value={2}>Rent</option>
                      </select>
                      {/*Max Price*/}
                      <select className="custom-select my-2" id="price" name="price">
                        <option value>Max Price</option>
                        <option value={5000}>$40</option>
                        <option value={10000}>$50</option>
                        <option value={50000}>$60</option>
                        <option value={100000}>$80</option>
                        <option value="100000>">&gt; $100</option>
                      </select>
                      {/*Submit button*/}
                      <div className="form-group mt-2 mb-3">
                        <button type="submit" className="btn btn-primary w-100" id="search-btn">Search</button>
                      </div>
                      {/*More Options Button*/}
                      <a href="#more-options-collapse" className="collapsed" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="more-options-collapse">
                        <i className="fa fa-plus-circle ts-text-color-primary mr-2 ts-visible-on-collapsed" />
                        <i className="fa fa-minus-circle ts-text-color-primary mr-2 ts-visible-on-uncollapsed" />
                        More Options
                      </a>
                      {/*Hidden Form*/}
                      <div className="collapse" id="more-options-collapse">
                        {/*Padding*/}
                        <div className="pt-4">
                          {/*Row*/}
                          <div className="form-row">
                            {/*Bedrooms*/}
                            <div className="col-sm-6">
                              <div className="form-group">
                                <label htmlFor="bedrooms">Bedrooms</label>
                                <input type="number" className="form-control" id="bedrooms" name="bedrooms" min={0} />
                              </div>
                            </div>
                            {/*Bathrooms*/}
                            <div className="col-sm-6">
                              <div className="form-group">
                                <label htmlFor="bathrooms">Bathrooms</label>
                                <input type="number" className="form-control" id="bathrooms" name="bathrooms" min={0} />
                              </div>
                            </div>
                          </div>
                          {/*end row*/}
                          {/*Checkboxes*/}
                          <div id="features-checkboxes" className="w-100">
                            <h6 className="mb-3">Features</h6>
                            <div className>
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
                                <label className="custom-control-label" htmlFor="ch_6">Smoking
                                  allowed</label>
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
                            {/*end ts-column-count-3*/}
                          </div>
                          {/*end #features-checkboxes*/}
                        </div>
                        {/*end Padding*/}
                      </div>
                      {/*end more-options-collapse*/}
                    </div>
                    {/*end ts-form-collapse*/}
                  </form>
                  {/*end ts-form*/}
                </div>
                {/*end ts-form__map-search*/}
                <Map
                            lat={lat}
                            setLat={setLat}
                            lng={lng}
                            setLng={setLng}
                            
                           />
              </div>
              {/* RESULTS
            =========================================================================================================*/}
              <div id="ts-results" className="ts-results__horizontal scrollbar-inner dragscroll">
                <div className="ts-results-wrapper" />
              </div>
            </div>
            {/*end full-screen*/}
          </section>
          {/*end ts-hero*/}
          {/***********************************************************************************************************/}
          {/* MAIN ****************************************************************************************************/}
          {/***********************************************************************************************************/}
          <main id="ts-main">
            {/* FEATURED PROPERTIES
        =============================================================================================================*/}
            <section id="featured-properties" className="ts-block pt-5">
              <div className="container">
                {/*Title*/}
                <div className="ts-title text-center">
                  <h2>Featured Properties</h2>
                </div>
                <div className="row">
                  {/*Item*/}
                  {terrain.map((index) =>
                  <div className="col-sm-6 col-lg-4" key={index.id}>
                    <div className="card ts-item ts-card ts-item__lg">
                      {/*Ribbon*/}
                      <div className="ts-ribbon">
                        <i className="fa fa-thumbs-up" />
                      </div>
                      {/*Card Image*/}
                      
                      <a  className="card-img ts-item__image"  >
                        <img src={index.image[0]} width={350} height={290}></img>
                        <div className="ts-item__info-badge">
                        {index.price}
                        </div>
                        <figure className="ts-item__info">
                          <h4>{index.nameTerrain}</h4>
                          <aside>
                            <i className="fa fa-map-marker mr-2" />
                            {index.address}
                          </aside>
                        </figure>
                        </a>
                      {/*Card Body*/}
                      <div className="card-body">
                        <div className="ts-description-lists">
                          <dl>
                            <dt>Area</dt>
                            <dd>{index.area}m<sup>2</sup></dd>
                          </dl>
                          <dl>
                            <dt>Capacite Joueur</dt>
                            <dd>{index.capaciteJoueur}</dd>
                          </dl>
                          <dl>
                            <dt>Ville</dt>
                            <dd>{index.ville}</dd>
                          </dl>
                        </div>
                      </div>
                      {/*Card Footer*/}
                      <Link href={`/terrainp/${encodeURIComponent(index._id)}`}>
                      <a className="card-footer">
                        <span className="ts-btn-arrow">Detail</span>
                      </a>
                      </Link>
                    </div>
                    {/*end ts-item*/}
                  </div> )}
                  {/*end Item col-md-4*/}
                  {/*Item*/}
                  
                  {/*end Item col-md-4*/}
                </div>
                {/*end row*/}
                {/*All properties button*/}
                <div className="text-center mt-3">
                  <a href="listing-category-icons.html" className="btn btn-outline-dark ts-btn-border-muted">Show All Properties</a>
                </div>
              </div>
              {/*end container*/}
            </section>
            {/* FEATURES
        =============================================================================================================*/}
            <section className="ts-block bg-white">
              <div className="container py-4">
                <div className="row">
                  {/*Feature*/}
                  <div className="col-sm-6 col-md-3">
                    <div className="ts-feature">
                      <figure className="ts-feature__icon p-2">
                        <span className="ts-circle">
                          <i className="fa fa-check" />
                        </span>
                        <img src="../public/assets/img/icon-house.png" alt="" />
                      </figure>
                      <h4>Terrain at Great Prices</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                  </div>
                  {/*Feature*/}
                  <div className="col-sm-6 col-md-3">
                    <div className="ts-feature">
                      <figure className="ts-feature__icon p-2">
                        <span className="ts-circle">
                          <i className="fa fa-check" />
                        </span>
                        <img src="../public/assets/img/icon-pin.png" alt="" />
                      </figure>
                      <h4>Everything on One Place</h4>
                      <p>In dictum ac augue et suscipit. Vivamus ac tellus ut massa</p>
                    </div>
                  </div>
                  {/*Feature*/}
                  <div className="col-sm-6 col-md-3">
                    <div className="ts-feature">
                      <figure className="ts-feature__icon p-2">
                        <span className="ts-circle">
                          <i className="fa fa-check" />
                        </span>
                        <img src="../public/assets/img/icon-agent.png" alt="" />
                      </figure>
                      <h4>Local Agents</h4>
                      <p>Vivamus ac tellus ut massa bibendum aliquam vitae ac diam. </p>
                    </div>
                  </div>
                  {/*Feature*/}
                  <div className="col-sm-6 col-md-3">
                    <div className="ts-feature">
                      <figure className="ts-feature__icon p-2">
                        <span className="ts-circle">
                          <i className="fa fa-check" />
                        </span>
                        <img src="assets/img/index-images/icon-calculator.png" alt="" />
                      </figure>
                      <h4>Free Reservation h24/7</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                  </div>
                </div>
                {/*end row*/}
              </div>
              {/*end container*/}
            </section>
            {/*end ts-block*/}
            {/* SUBSCRIBE
        =============================================================================================================*/}
            <section id="subscribe" className="ts-block" data-bg-pattern="assets/img/bg-pattern-topo.png" data-bg-color="#f4f4f4">
              <div className="container">
                <div className="offset-lg-1 col-lg-10">
                  <h3>Subscribe for great offers!</h3>
                  <form className="ts-form ts-form-email" data-php-path="assets/php/email.php">
                    <div className="row">
                      {/*Input*/}
                      <div className="col-sm-8 col-md-10">
                        <div className="form-group mb-0">
                          <input type="email" className="form-control" id="email-subscribe" aria-describedby="subscribe" name="email" placeholder="Email Address" required />
                          <small className="form-text mt-2 ts-opacity__50">*You’ll get only relevant news once a week </small>
                        </div>
                      </div>
                      {/*Button*/}
                      <div className="col-sm-4 col-md-2">
                        <button type="submit" className="btn btn-outline-dark w-100">Submit</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </section>
            {/*LATEST LISTINGS
        =============================================================================================================*/}
            <section id="latest-listings" className="ts-block">
              <div className="container">
                {/*Title*/}
                <div className="ts-title">
                  <h2>Latest Listings</h2>
                </div>
                {/*Row*/}
                <div className="row">
                  {/*Item*/}
                  {terrain.map((index) =>
                  <div className="col-sm-6 col-lg-3" key={index.id}>
                    <div className="card ts-item ts-card">
                      {/*Ribbon*/}
                      <div className="ts-ribbon">
                        <i className="fa fa-thumbs-up" />
                      </div>
                      {/*Card Image*/}
                      
                      <a href="detail-01.html" className="card-img ts-item__image" data-bg-image="assets/img/img-item-thumb-01.jpg">
                      <img className="card-img ts-item__image" src={index.image[0]}></img>
                        <div className="ts-item__info-badge">
                          ${index.price}
                        </div>
                        <figure className="ts-item__info">
                          <h4>{index.nameTerrain}</h4>
                          <aside>
                            <i className="fa fa-map-marker mr-2" />
                            {index.address}
                          </aside>
                        </figure>
                      </a>
                      {/*Card Body*/}
                      <div className="card-body">
                        <div className="ts-description-lists">
                          <dl>
                            <dt>Area</dt>
                            <dd>{index.area}m<sup>2</sup></dd>
                          </dl>
                          <dl>
                            <dt>NB Player</dt>
                            <dd>{index.capaciteJoueur}</dd>
                          </dl>
                          <dl>
                            <dt>Ville</dt>
                            <dd>{index.ville}</dd>
                          </dl>
                        </div>
                      </div>
                      {/*Card Footer*/}
                      <a href="detail-01.html" className="card-footer">
                        <span className="ts-btn-arrow">Detail</span>
                      </a>
                    </div>
                    {/*end ts-item*/}
                  </div>)}
                  
                  <div className="col-sm-6 col-lg-3">
                    <div className="card ts-item ts-card">
                      <div className="badge badge-dark">Full Time this day </div>
                      {/*Card Image*/}
                      <a href="detail-01.html" className="card-img ts-item__image" data-bg-image="assets/img/img-item-thumb-08.jpg">
                        <figure className="ts-item__info">
                          <h4>Apartment for Rent</h4>
                          <aside>
                            <i className="fa fa-map-marker mr-2" />
                            4831 Worthington Drive
                          </aside>
                        </figure>
                        <div className="ts-item__info-badge">
                          <span>$480</span>
                          <small>/ month</small>
                        </div>
                      </a>
                      {/*Card Body*/}
                      <div className="card-body ts-item__body">
                        <div className="ts-description-lists">
                          <dl>
                            <dt>Area</dt>
                            <dd>325m<sup>2</sup></dd>
                          </dl>
                          <dl>
                            <dt>Bedrooms</dt>
                            <dd>2</dd>
                          </dl>
                          <dl>
                            <dt>Bathrooms</dt>
                            <dd>1</dd>
                          </dl>
                        </div>
                      </div>
                      {/*Card Footer*/}
                      <a href="detail-01.html" className="card-footer">
                        <span className="ts-btn-arrow">Detail</span>
                      </a>
                    </div>
                    {/*end ts-item ts-card*/}
                  </div>
                  {/*end Item col-md-4*/}
                </div>
                {/*end row*/}
              </div>
              {/*end container*/}
            </section>
            {/*PRICING
        =============================================================================================================*/}
            <section id="pricing" className="ts-block pt-0">
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
                        <img class="card-img ts-item__image" src="freee.jpg" ></img>
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
                        <a href="#" className="btn btn-outline-primary">Select Now</a>
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
                          <img class="card-header" src="prm.jpg" width={370}  height={400}></img>
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
                        <a href="#" className="btn btn-primary">Select Now</a>
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
                        <img class="card-header" src="prof.jpg" width={370}  height={350}></img>
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
                        <a href="#" className="btn btn-outline-primary">Select Now</a>
                      </div>
                    </div>
                  </div>
                  {/*end price-box*/}
                </div>
                {/*end row*/}
              </div>
              {/*end container*/}
            </section>
            {/*ITEM CAROUSEL
        =============================================================================================================*/}
            <section className="ts-block" data-bg-pattern="assets/img/bg-pattern-dot.png">
              {/*Title*/}
              <div className="ts-title text-center">
                <h2>Our Top Picks</h2>
              </div>
              {/*Carousel*/}
              <div className="owl-carousel ts-items-carousel" data-owl-items={5} data-owl-dots={1}>
                {/*Item*/}
                <div className="slide">
                  <div className="card ts-item ts-card ts-item__lg">
                    {/*Ribbon*/}
                    <div className="ts-ribbon">
                      <i className="fa fa-thumbs-up" />
                    </div>
                    {/*Card Image*/}
                    <a href="detail-01.html" className="card-img ts-item__image" data-bg-image="assets/img/img-item-thumb-01.jpg">
                      <div className="ts-item__info-badge">
                        $350,000
                      </div>
                      <figure className="ts-item__info">
                        <h4>Big Luxury Apartment</h4>
                        <aside>
                          <i className="fa fa-map-marker mr-2" />
                          1350 Arbutus Drive
                        </aside>
                      </figure>
                    </a>
                    {/*Card Body*/}
                    <div className="card-body">
                      <div className="ts-description-lists">
                        <dl>
                          <dt>Area</dt>
                          <dd>325m<sup>2</sup></dd>
                        </dl>
                        <dl>
                          <dt>Bedrooms</dt>
                          <dd>2</dd>
                        </dl>
                        <dl>
                          <dt>Bathrooms</dt>
                          <dd>1</dd>
                        </dl>
                      </div>
                    </div>
                    {/*Card Footer*/}
                    <a href="detail-01.html" className="card-footer">
                      <span className="ts-btn-arrow">Detail</span>
                    </a>
                  </div>
                  {/*end ts-item*/}
                </div>
                {/*end slide*/}
                {/*Item*/}
                <div className="slide">
                  <div className="card ts-item ts-card ts-item__lg">
                    {/*Ribbon*/}
                    <div className="ts-ribbon-corner">
                      <span>Updated</span>
                    </div>
                    {/*Card Image*/}
                    <a href="detail-01.html" className="card-img ts-item__image" data-bg-image="assets/img/img-item-thumb-02.jpg">
                      <figure className="ts-item__info">
                        <h4>Cozy Design Studio</h4>
                        <aside>
                          <i className="fa fa-map-marker mr-2" />
                          4831 Worthington Drive
                        </aside>
                      </figure>
                      <div className="ts-item__info-badge">$125,000</div>
                    </a>
                    {/*Card Body*/}
                    <div className="card-body ts-item__body">
                      <div className="ts-description-lists">
                        <dl>
                          <dt>Area</dt>
                          <dd>325m<sup>2</sup></dd>
                        </dl>
                        <dl>
                          <dt>Bedrooms</dt>
                          <dd>2</dd>
                        </dl>
                        <dl>
                          <dt>Bathrooms</dt>
                          <dd>1</dd>
                        </dl>
                      </div>
                    </div>
                    {/*Card Footer*/}
                    <a href="detail-01.html" className="card-footer">
                      <span className="ts-btn-arrow">Detail</span>
                    </a>
                  </div>
                  {/*end ts-item ts-card*/}
                </div>
                {/*end slide*/}
                {/*Item*/}
                <div className="slide">
                  <div className="card ts-item ts-card ts-item__lg">
                    {/*Card Image*/}
                    <a href="detail-01.html" className="card-img ts-item__image" data-bg-image="assets/img/img-item-thumb-03.jpg">
                      <figure className="ts-item__info">
                        <h4>Family Villa</h4>
                        <aside>
                          <i className="fa fa-map-marker mr-2" />
                          4127 Winding Way
                        </aside>
                      </figure>
                      <div className="ts-item__info-badge">$45,900</div>
                    </a>
                    {/*Card Body*/}
                    <div className="card-body ts-item__body">
                      <div className="ts-description-lists">
                        <dl>
                          <dt>Area</dt>
                          <dd>325m<sup>2</sup></dd>
                        </dl>
                        <dl>
                          <dt>Bedrooms</dt>
                          <dd>2</dd>
                        </dl>
                        <dl>
                          <dt>Bathrooms</dt>
                          <dd>1</dd>
                        </dl>
                      </div>
                    </div>
                    {/*Card Footer*/}
                    <a href="detail-01.html" className="card-footer">
                      <span className="ts-btn-arrow">Detail</span>
                    </a>
                  </div>
                  {/*end ts-item ts-card*/}
                </div>
                {/*end slide*/}
                {/*Item*/}
                <div className="slide">
                  <div className="card ts-item ts-card ts-item__lg">
                    {/*Card Image*/}
                    <a href="detail-01.html" className="card-img ts-item__image" data-bg-image="assets/img/img-item-thumb-04.jpg">
                      <div className="ts-item__info-badge">
                        $860,000
                      </div>
                      <figure className="ts-item__info">
                        <h4>Traditional Restaurant</h4>
                        <aside>
                          <i className="fa fa-map-marker mr-2" />
                          1350 Arbutus Drive
                        </aside>
                      </figure>
                    </a>
                    {/*Card Body*/}
                    <div className="card-body">
                      <div className="ts-description-lists">
                        <dl>
                          <dt>Area</dt>
                          <dd>325m<sup>2</sup></dd>
                        </dl>
                        <dl>
                          <dt>Bedrooms</dt>
                          <dd>2</dd>
                        </dl>
                        <dl>
                          <dt>Bathrooms</dt>
                          <dd>1</dd>
                        </dl>
                      </div>
                    </div>
                    {/*Card Footer*/}
                    <a href="detail-01.html" className="card-footer">
                      <span className="ts-btn-arrow">Detail</span>
                    </a>
                  </div>
                  {/*end ts-item*/}
                </div>
                {/*end slide*/}
                {/*Item*/}
                <div className="slide">
                  <div className="card ts-item ts-card ts-item__lg">
                    {/*Card Image*/}
                    <a href="detail-01.html" className="card-img ts-item__image" data-bg-image="assets/img/img-item-thumb-05.jpg">
                      <figure className="ts-item__info">
                        <h4>White Cubes Resort</h4>
                        <aside>
                          <i className="fa fa-map-marker mr-2" />
                          4831 Worthington Drive
                        </aside>
                      </figure>
                      <div className="ts-item__info-badge">$435,000</div>
                    </a>
                    {/*Card Body*/}
                    <div className="card-body ts-item__body">
                      <div className="ts-description-lists">
                        <dl>
                          <dt>Area</dt>
                          <dd>325m<sup>2</sup></dd>
                        </dl>
                        <dl>
                          <dt>Bedrooms</dt>
                          <dd>2</dd>
                        </dl>
                        <dl>
                          <dt>Bathrooms</dt>
                          <dd>1</dd>
                        </dl>
                      </div>
                    </div>
                    {/*Card Footer*/}
                    <a href="detail-01.html" className="card-footer">
                      <span className="ts-btn-arrow">Detail</span>
                    </a>
                  </div>
                  {/*end ts-item ts-card*/}
                </div>
                {/*end slide*/}
                {/*Item*/}
                <div className="slide">
                  <div className="card ts-item ts-card ts-item__lg">
                    {/*Card Image*/}
                    <a href="detail-01.html" className="card-img ts-item__image" data-bg-image="assets/img/img-item-thumb-06.jpg">
                      <figure className="ts-item__info">
                        <h4>Bristol Tower Complex</h4>
                        <aside>
                          <i className="fa fa-map-marker mr-2" />
                          4127 Winding Way
                        </aside>
                      </figure>
                      <div className="ts-item__info-badge">$85,900</div>
                    </a>
                    {/*Card Body*/}
                    <div className="card-body ts-item__body">
                      <div className="ts-description-lists">
                        <dl>
                          <dt>Area</dt>
                          <dd>325m<sup>2</sup></dd>
                        </dl>
                        <dl>
                          <dt>Bedrooms</dt>
                          <dd>2</dd>
                        </dl>
                        <dl>
                          <dt>Bathrooms</dt>
                          <dd>1</dd>
                        </dl>
                      </div>
                    </div>
                    {/*Card Footer*/}
                    <a href="detail-01.html" className="card-footer">
                      <span className="ts-btn-arrow">Detail</span>
                    </a>
                  </div>
                  {/*end ts-item ts-card*/}
                </div>
                {/*end slide*/}
                {/*Item*/}
                <div className="slide">
                  <div className="card ts-item ts-card ts-item__lg">
                    {/*Card Image*/}
                    <a href="detail-01.html" className="card-img ts-item__image" data-bg-image="assets/img/img-item-thumb-07.jpg">
                      <figure className="ts-item__info">
                        <h4>River Apartments</h4>
                        <aside>
                          <i className="fa fa-map-marker mr-2" />
                          1350 Arbutus Drive
                        </aside>
                      </figure>
                      <div className="ts-item__info-badge">
                        $120,000
                      </div>
                    </a>
                    {/*Card Body*/}
                    <div className="card-body">
                      <div className="ts-description-lists">
                        <dl>
                          <dt>Area</dt>
                          <dd>325m<sup>2</sup></dd>
                        </dl>
                        <dl>
                          <dt>Bedrooms</dt>
                          <dd>2</dd>
                        </dl>
                        <dl>
                          <dt>Bathrooms</dt>
                          <dd>1</dd>
                        </dl>
                      </div>
                    </div>
                    {/*Card Footer*/}
                    <a href="detail-01.html" className="card-footer">
                      <span className="ts-btn-arrow">Detail</span>
                    </a>
                  </div>
                  {/*end ts-item*/}
                </div>
                {/*end slide*/}
                {/*Item*/}
                <div className="slide">
                  <div className="card ts-item ts-card ts-item__lg">
                    <div className="badge badge-primary">Rent</div>
                    {/*Card Image*/}
                    <a href="detail-01.html" className="card-img ts-item__image" data-bg-image="assets/img/img-item-thumb-08.jpg">
                      <figure className="ts-item__info">
                        <h4>Apartment for Rent</h4>
                        <aside>
                          <i className="fa fa-map-marker mr-2" />
                          4831 Worthington Drive
                        </aside>
                      </figure>
                      <div className="ts-item__info-badge">
                        <span>$480</span>
                        <small>/ month</small>
                      </div>
                    </a>
                    {/*Card Body*/}
                    <div className="card-body ts-item__body">
                      <div className="ts-description-lists">
                        <dl>
                          <dt>Area</dt>
                          <dd>325m<sup>2</sup></dd>
                        </dl>
                        <dl>
                          <dt>Bedrooms</dt>
                          <dd>2</dd>
                        </dl>
                        <dl>
                          <dt>Bathrooms</dt>
                          <dd>1</dd>
                        </dl>
                      </div>
                    </div>
                    {/*Card Footer*/}
                    <a href="detail-01.html" className="card-footer">
                      <span className="ts-btn-arrow">Detail</span>
                    </a>
                  </div>
                  {/*end ts-item ts-card*/}
                </div>
                {/*end slide*/}
              </div>
            </section>
            {/*end ts-block*/}
            {/*SUBMIT BANNER
        =============================================================================================================*/}
            <section id="submit-banner" className="ts-block">
              <div className="container">
                <div className="ts-block-inside text-center ts-separate-bg-element" data-bg-image-opacity=".2" data-bg-image="assets/img/bg-chair.jpg" data-bg-color="#fff">
                  <figure className="h1 font-weight-light mb-2">Have Some Property For Sale?</figure>
                  <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                  <a href="submit.html" className="btn btn-dark">Submit Your Own</a>
                </div>
              </div>
            </section>
            {/*PARTNERS
        =============================================================================================================*/}
            <section id="partners" className="ts-block pt-4 pb-0">
              <div className="container">
                {/*Logos*/}
                <div className="d-block d-md-flex justify-content-between align-items-center text-center ts-partners py-3">
                  <a href="#">
                    <img src="assets/img/logo-01.png" alt="" />
                  </a>
                  <a href="#">
                    <img src="assets/img/logo-02.png" alt="" />
                  </a>
                  <a href="#">
                    <img src="assets/img/logo-03.png" alt="" />
                  </a>
                  <a href="#">
                    <img src="assets/img/logo-04.png" alt="" />
                  </a>
                  <a href="#">
                    <img src="assets/img/logo-05.png" alt="" />
                  </a>
                </div>
                {/*end logos*/}
              </div>
            </section>
          </main>
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

