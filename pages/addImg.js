import * as React from 'react';
import Header from "./components/Header";
import LeftNavbar from "./components/LeftNavbar";
import styles from "../styles/Home.module.css";
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
import { useState } from 'react';

export default function addImg() {
  
    const [imageSrc, setImageSrc] = useState();
    const [uploadData, setUploadData] = useState();
  
    /**
     * handleOnChange
     * @description Triggers when the file input changes (ex: when a file is selected)
     */
  
    function handleOnChange(changeEvent) {
      const reader = new FileReader();
  
      reader.onload = function(onLoadEvent) {
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
  
      for ( const file of fileInput.files ) {
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
  return (
      <div>
    <LeftNavbar />
    <Header />
    <div className={styles.contentcontainer}>
    <p className={styles.description}>
          Upload your image to Cloudinary!
        </p>

        <form className={styles.form} method="post" onChange={handleOnChange} onSubmit={handleOnSubmit}>
          <p>
            <input type="file" name="file" />
          </p>
          
          <img src={imageSrc} />
          
          {imageSrc && !uploadData && (
            <p>
              <button>Upload Files</button>
            </p>
          )}

          {uploadData && (
            <code><pre>{(uploadData, null, 2)}</pre></code>
          )}
        </form>
        <CloudinaryContext cloudName="isetbizertepfe">
        <Image  publicId="terrain/pyhlfdeyo4axtl9g0fev" width="200" height="200" />
        </CloudinaryContext>
    </div>
    
    </div>
    
  );
}