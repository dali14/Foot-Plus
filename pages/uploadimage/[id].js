import React, { useEffect, useState } from 'react'
import styles from "../../styles/Home.module.css";
import { useRouter } from 'next/router'
import Footer from '../../components/Footer'
import NavBar from '../../components/NavBar'
export default function UploadImage() {
    const router = useRouter()
    const [id, setId] = useState();
    const [name, setName] = useState();
    const [imageSrc, setImageSrc] = useState();
    const [imagelink, setImagelink] = useState([]);
    const [uploadData, setUploadData] = useState();
    const [imagepreview, setImagepreview] = useState(false)
    function handleOnChange(changeEvent) {
        const reader = new FileReader();

        reader.onload = function (onLoadEvent) {
            setImageSrc(onLoadEvent.target.result);
            setUploadData(undefined);
        }

        reader.readAsDataURL(changeEvent.target.files[0]);
    }

    /**
     * handleOnSubmit
     * @description Triggers when the main form is submitted
     */

    async function handleOnSubmit(event) {
        event.preventDefault();

        const form = event.currentTarget;
        const fileInput = Array.from(form.elements).find(({ name }) => name === 'file');

        const formData = new FormData();

        for (const file of fileInput.files) {
            formData.append('file', file);
        }

        formData.append('upload_preset', 'foot-plus');

        const data = await fetch('https://api.cloudinary.com/v1_1/isetbizertepfe/image/upload', {
            method: 'POST',
            body: formData
        }).then(r => r.json());

        setImageSrc(data.secure_url);
        setUploadData(data);

    }
    useEffect(() => {
        setId(window.location.pathname.split("/")[2].split("+")[0]);
        setName(window.location.pathname.split("/")[2].split("+")[1])
        if (uploadData) {
            imagelink.push(uploadData.secure_url)
        }
        setImagepreview(true)        
        console.log(imagelink)
    }, [uploadData, imagelink, imageSrc])

    const updateImage = () => {
        if (imagelink) {
            imagelink.shift('',)
            fetch("http://localhost:3004/terrain/UpdateTerrain/" + id, {
                method: 'put',
                body: JSON.stringify({
                    image: imagelink,
                }),
                headers: {
                    "Content-Type": "application/json",
                    'Access-Control-Allow-Origin': '*',
                },
            })
                .then((res) => res.json())
                .then(res => {
                    console.log(res);
                    if(res.status = 200){
                        router.push("/submitted")
                    }
                });
        }
    }
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
            <title>Foot Plus </title>
            <div className="ts-page-wrapper ts-has-bokeh-bg" id="page-top">

                <header id="ts-header" className="fixed-top">

                    <NavBar />
                </header>

                <main id="ts-main">
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
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
        =============================================================================================================*/}
                    <section id="page-title">
                        <div className="container">
                            <div className="ts-title">
                                <h1>Images Properties {name}</h1>
                            </div>
                        </div>
                    </section>
                    {/*COMPARED PROPERTIES
        =============================================================================================================*/}
                    <section id="compared-properties">
                        <div className="container">
                            {/*COMPARE TABLE
                =====================================================================================================*/}
                            <div className="ts-compare-items-table">
                                {/*ITEM IMAGES
                    =================================================================================================*/}
                                <section id="images">
                                    <div className="row ts-cards-same-height">
                                        <div className="col">
                                            <div className="card border bg-transparent ts-shadow__none p-5 ts-center__both">
                                                <a href="#" className="btn btn-light mb-2 w-100">
                                                    <i className="fa fa-save mr-2 ts-opacity__30" />
                                                    Save
                                                </a>
                                                <a href="#" className="btn btn-light w-100">
                                                    <i className="fa fa-share mr-2 ts-opacity__30" />
                                                    Uplode
                                                </a>
                                                
                                                
                                            </div>
                                        </div>
                                        {/*Compare item*/}
                                        <div className="col">
                                            <div className="card ts-item ts-card">
                                                <a href="detail-02.html" className="card-img" data-bg-image="assets/img/img-item-thumb-01.jpg">
                                                    <div className="ts-remove" />
                                                    <figure className="ts-item__info">
                                                        <h4>Big Luxury Apartment</h4>
                                                        <aside>
                                                            <i className="fa fa-map-marker mr-2" />
                                                            1350 Arbutus Drive
                                                        </aside>
                                                    </figure>
                                                </a>
                                            </div>
                                        </div>
                                        {/*Compare item*/}
                                        <div className="col">
                                            <div className="card ts-item ts-card">
                                                <a href="detail-03.html" className="card-img" data-bg-image="assets/img/img-item-thumb-02.jpg">
                                                    <div className="ts-remove" />
                                                    <figure className="ts-item__info">
                                                        <h4>Cozy Design Studio</h4>
                                                        <aside>
                                                            <i className="fa fa-map-marker mr-2" />
                                                            925 Maple Street
                                                        </aside>
                                                    </figure>
                                                </a>
                                            </div>
                                        </div>
                                        {/*Compare item*/}
                                        <div className="col">
                                            <div className="card ts-item ts-card">
                                                <a href="detail-01.html" className="card-img" data-bg-image="assets/img/img-item-thumb-03.jpg">
                                                    <div className="ts-remove" />
                                                    <figure className="ts-item__info">
                                                        <h4>Family Villa</h4>
                                                        <aside>
                                                            <i className="fa fa-map-marker mr-2" />
                                                            3931 Brown Avenue
                                                        </aside>
                                                    </figure>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    {/*end row*/}
                                </section>
                            </div>
                        </div>
                    </section>
                    <div>
                        
                        <div className={styles.contentcontainer}>
                            <p className={styles.description}>
                               
                            </p>

                            <form className={styles.form} method="post" onChange={handleOnChange} onSubmit={handleOnSubmit}>
                                <section id="gallery" className="container">
                                    {/*Title*/}
                                    <h3 className="text-muted border-bottom">Gallery</h3>
                                    {/*File upload*/}
                                    <div className="file-upload-previews" />
                                    <div className="file-upload">
                                        <input type="file" name="file" className="file-upload-input with-preview" multiple title="Click to add files" maxLength={10} accept="gif|jpg|png" />
                                        <span><i className="fa fa-plus-circle" />Click or drag images here</span>
                                    </div>
                                </section>

                                <img src={imageSrc} />

                                {imageSrc && !uploadData && (
                                    <p>
                                        <button className="btn btn-light w-100" >Upload Image</button>
                                    </p>
                                )}
      

                            </form>
                        </div>
                    </div>
                    {imagelink ? <div> 
                                        {imagelink.map((img) => (
                                            <div className="grid grid-cols-3" key={img}>
                                                {img && <img src={img} className="images-preview" />}

                                            </div>
                                        ))}
                                    </div> : "No image uploaded"}
                                    
                    <button onClick={() => { updateImage() }} className="btn btn-primary btn-lg float-right">
                        Add Image
                    </button>
                </main>
                <Footer />
                {/*end #ts-footer*/}
            </div>
            {/*end page*/}
        </div>
    )
}

