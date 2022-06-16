import React ,{ useState ,useEffect } from 'react'
import Link from 'next/link'
import styles from "../../styles/Home.module.css";
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
export default function index() {

    const [isLoading, setLoading] = useState(false)
    const [resv , setResv] = useState();
    

    useEffect(() => {

        setLoading(true)
        fetch('http://localhost:3004/terrainres/'+localStorage.getItem("idTerrain"))
          .then(res => res.json())
          .then((data) =>{
            if(data.error){
                console.log("erreur No data")
                setLoading(false)

            }else{
                setResv(data)
                setLoading(false)
                console.log("data here ... :) ")
            }
           
        })
        //   .then(res => setAllEvents([...res].map((reservation) => ({
        //     setLoading(false),

        //     title: " ID reservation :" + reservation.id_Terrain + " | Etat : " + reservation.etat + " | Montant Payer :" + reservation.prixPayant,
        //     start: new Date(Date.parse(reservation.dateD)),
        //     end: new Date(Date.parse(reservation.dateF)),
    
        //   }))))
    
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
      </div>

    )
    
    

    if (!resv) return  (
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
    <link rel="stylesheet" href="assets/css/style.css" />
    <title>Foot Plus Competition</title>
   
    <div className="ts-page-wrapper ts-has-bokeh-bg" id="page-top">
     
      <header id="ts-header" className="fixed-top">
       <NavBar />
      </header>
     
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
            <div className="ts-title">
              <h1>Agencies List</h1>
            </div>
          </div>
        </section>
        
        <section id="agencies-list">
          <div className="container">
            
            <section id="display-control" className="clearfix">
              
              <div className="container">
                <div className="ts-title">
              <h1>Reservation Liste</h1>
            </div>
          </div>
              
              <div className="float-none float-sm-right pl-2 ts-center__vertical">
                <label htmlFor="sorting" className="mb-0 mr-2 text-nowrap">Sort by:</label>
                <select className="custom-select bg-transparent" id="sorting" name="sorting">
                  <option value>Default</option>
                  <option value={1}>Price lowest first</option>
                  <option value={2}>Price highest first</option>
                  <option value={3}>Distance</option>
                </select>
              </div>
            </section>
            {/*AGENCIES
                =================================================================================================*/}
            <section id="agencies">
              {/*Agency*/}
              {resv.map((index) =>
              <div className="card ts-item ts-item__list ts-item__company ts-card" key={index.id}>
                {/*Ribbon*/}
                
                {/*Card Image*/}
                <a href="agency-detail.html" className="card-img" >
                    {index.etat =="Confirmed" ? <img src="assets/img/booking-confirmed.png" alt=""  width={250}   height={150}/>
                    :index.etat =="review"? <img src="assets/img/bookOnReview.png" alt=""  width={250}   height={150}/>
                    :<img src="assets/img/booking-cancel.png" alt=""  width={250}   height={150}/> }
                  
                </a>
                {/*Card Body*/}
                <div className="card-body">
                  <figure className="ts-item__info">
                    <h4>{index.name}</h4>
                        <a>
                        <span className="ts-btn-arrow">Date : {index.dateD}</span>
                        <span>{index.dateF}</span>
                        </a>
                  </figure>
                  <div className="ts-company-info">
                    <div className="ts-company-contact mb-2 mb-sm-0">
                      <div>
                        <i className="fa fa-phone" />
                        <span>310-338-8339</span>
                      </div>
                      <div>
                        <i className="fa fa-envelope" />
                        <a href="#">hello@example.com</a>
                      </div>
                    </div>
                    <div className="ts-description-lists">
                      <dl>
                        <dt>Etat </dt>
                        <dd>{index.etat}</dd>
                      </dl>
                      <dl>
                        <dt>Montant payee </dt>
                        <dd>{index.prixPayant} DT</dd>
                      </dl>
                    </div>
                  </div>
                </div>
                {/*Card Footer*/}
                <div className="card-footer">
                <Link href={`/reservation/${encodeURIComponent(index._id)}`}>
                  <a href="agency-detail.html" className="ts-btn-arrow">Detail</a>
                  </Link>
                </div>
              </div>
                        )}
            </section>
            {/*end #agencies*/}
            {/*PAGINATION
                =================================================================================================*/}
            <section id="pagination">
              <div className="container">
                {/*Pagination*/}
                <nav aria-label="Page navigation">
                  <ul className="pagination ts-center__horizontal">
                    <li className="page-item active">
                      <a className="page-link" href="#">1</a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">2</a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">3</a>
                    </li>
                    <li className="page-item">
                      <a className="page-link ts-btn-arrow" href="#">Next</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </section>
          </div>
          {/*end container*/}
        </section>
        {/*end #items-list*/}
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
