import styles from "../styles/Home.module.css";

import React , { useEffect, useState } from 'react'
import {useRouter} from 'next/router'
import withAdmin from './withAdmin'

const NavBar = (props) => {
const router = useRouter()

function logout(){
  localStorage.clear()
  router.push('/login')
}

useEffect(() => {
  console.log("hello  nav  ",props)
}, [props])



  return (
    <div> 
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
                <a  href="/home">
                  <img src="../assets/img/logo.png" alt="" />
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
                      <a className="nav-link" href="#">MyTerrain</a>
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
                      {props?.user?.role =="Proprtire Terrain" ?
                       <a className="btn btn-outline-primary btn-sm m-1 px-3" href="/Myterrain" >Terrain De : {props?.user?.name}</a>
                        :
                        <a className="btn btn-outline-primary btn-sm m-1 px-3" >hello : {props?.user?.name} </a>
                        }
                    </li>
                    {/*REGISTER (Main level)
                        =============================================================================================*/}
                    <li className="nav-item">
                      {props?.user?.name ?  <a className="btn btn-outline-primary btn-sm m-1 px-3" onClick={() => { logout() }}>Logout </a>:<a className="nav-link text-dark" href="/register">Register</a>}
                    </li>
                    {/*SUBMIT (Main level)
                        =============================================================================================*/}

                      {props?.user?.name ?
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
  
  
  </div>
  )
}
export default withAdmin(NavBar);