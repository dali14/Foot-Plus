import React ,{ useState, useEffect } from 'react'
import NavBar from '../../../components/NavBar'
import Footer from '../../../components/Footer'
import {useRouter} from 'next/router'
export default function Participe() {
  const router = useRouter();
  const [nom , setNom] = useState();
  const [ville , setVille] = useState();
  const [tel , setTel] = useState();
  const [nbPlayer , setNbPlayer] = useState();
  const [nbequipe , setNbequipe] = useState();
  const [compt , setCompt] = useState();

  useEffect(() => {

    fetch("http://localhost:3004/competition/"+window.location.pathname.split("/")[3])
    .then(res => res.json())

    .then((data) =>{
        if(data.error){
            console.log("erreur No data")
        }else
        {
            console.log(data.nbpar)
            setNbequipe(data.nbpar)
            
        }
       
    })
  }, [])


  const EditCompet = async () => {
  
    const payload = {
      nbpar : nbequipe+1,
    }
    const responce = await fetch("http://localhost:3004/competition/"+window.location.pathname.split("/")[3] ,{
       method: 'put',
       body: JSON.stringify(payload),
       headers: { 
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*',
         },
       })
      .then((res) => res.json() )
      .then(res => {
        console.log("ani jit ");
        });
      }



  const partcompt = async () => {
    const payload = {
      nom,
      tel,
      ville,
      nbPlayer,
      id_compt : window.location.pathname.split("/")[3], 
      id_user  :localStorage.getItem("iduser"),
    }
    const responce = await fetch("http://localhost:3004/equipe", {
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
        if(res._id) {
          EditCompet(nbequipe)
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
    <link rel="stylesheet" href="../../assets/bootstrap/css/bootstrap.min.css" />
    <link rel="stylesheet" href="../../assets/font-awesome/css/fontawesome-all.min.css" />
    <link rel="stylesheet" href="../../assets/css/leaflet.css" />
    <link rel="stylesheet" href="../../assets/css/style.css" />

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
        
        <section id="submit-form">
          <div className="container">
            <div className="row">
              <div className="offset-lg-1 col-lg-10">
                <div id="form-submit" className="ts-form" method="post">
                  
                  <section id="basic-information" className="mb-5">
                    
                    <h3 className="text-muted border-bottom"> Basic Information </h3>
                    
                    <div className="row">
                      
                      <div className="col-sm-8">
                        <div className="form-group">
                          <label htmlFor="title">Nom Equipe</label>
                          <input type="text" className="form-control" id="title" name="title" required onChange={(e) => setNom(e.target.value)}/>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-4">
                        <div className="row">
                          
                          <div className="col">
                            <div className="input-group">
                              <label htmlFor="area">Ville</label>
                              <input type="text" className="form-control border-right-0" id="area" onChange={(e) => setVille(e.target.value)}/>
                              <div className="input-group-append">
                                <span className="input-group-text bg-white border-left-0"></span>
                              </div>
                            </div>
                          </div>
                          <div className="col">
                            <div className="form-group">
                              <label htmlFor="rooms">Number Player</label>
                              <input type="number" className="form-control" id="rooms" name="number" min="6" required onChange={(e) => setNbPlayer(e.target.value)}/>
                            </div>
                          </div>
                        </div>
                        
                      </div>
                      
                      <div className="col-sm-12 col-md-4">
                        <div className="form-group">
                          <label htmlFor="area">Telephone</label>
                          <input type="text" className="form-control border-right-0" id="area" name="type"onChange={(e) => setTel(e.target.value)} />

  
                        </div>
                      </div>
                     
                    </div>
                    
                  </section>
                  <hr />
                  <button className="py-3" >
                    <i className="fa fa-save mr-2" />
                    Save Draft
                  </button>
                  <button className="btn btn-primary btn-lg float-right" onClick={() => { partcompt() }} >
                        <i className="fa fa-save ts-opacity__50 mr-2" />
                        Participe
                      </button>
                </div>
                
              </div>
              
            </div>
            
          </div>
          
        </section>
      </main>
      <Footer />
     
    </div>
    
  </div>
  )
}
