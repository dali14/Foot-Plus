import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState, useEffect } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import styles from "../styles/Home.module.css";
import Footer from './components/Footer'
import NavBar from './components/NavBar'

const calendar = () => {

  const locales = {
    "de": require("date-fns/locale/de"),
  };
  const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
  });
  const events = [


    {
      title: "",
      start: "",
      end: ""

    },

  ];

  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState(events);
  const [value, setValue] = React.useState(new Date());
  const [etat, setEtat] = React.useState('');
  const [montant, setMontant] = React.useState('');


  


  useEffect(() => {


    fetch('http://localhost:3004/terrainres/'+localStorage.getItem("idTerrain"))
      .then(res => res.json())

      .then(res => setAllEvents([...res].map((reservation) => ({

        title: " ID reservation :" + reservation.id_Terrain + " | Etat : " + reservation.etat + " | Montant Payer :" + reservation.prixPayant,
        start: new Date(Date.parse(reservation.dateD)),
        end: new Date(Date.parse(reservation.dateF)),

      }))))

  }, [])

  // const handleChangestart = (newValue) => {
  //   setNewEvent({ ...newEvent, start: newValue });
  // };
  // const handleChangeend = (newValue) => {
  //   setNewEvent({ ...newEvent, end: newValue });
  // };

  const handleChange2 = (event) => {
    setEtat(event.target.value);
  };



  function handleAddEvent() {
    setAllEvents([...allEvents, newEvent]);
    console.log(((newEvent.end) - (newEvent.start)) / 60000);
    console.log(etat);


    fetch("http://localhost:3004/reservation", {
      method: 'post',
      headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        id_Terrain: localStorage.getItem("idTerrain"),
        name: newEvent.title,
        dateD: newEvent.start,
        dateF: newEvent.end,
        duree: ((newEvent.end) - (newEvent.start)) / 60000,
        etat: etat,
        prix: 50,
        prixPayant: montant,
      })
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);

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
      <title>Foot Plus Calendar </title>
      <div className="ts-page-wrapper ts-has-bokeh-bg" id="page-top">

        <header id="ts-header" className="fixed-top">
          {/*end #ts-primary-navigation.navbar*/}
        </header>
        <NavBar />

        <main id="ts-main">


          
            
              <h2 className={styles.titre}>Add New Reservation</h2>

              
             
              <div className={styles.formRes}>

                <TextField id="outlined-basic" label="Nom De Client" variant="outlined" value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />

                <TextField id="outlined-basic" label="Montant Payer" variant="outlined" value={montant} onChange={(c) => setMontant(c.target.value)} />
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DateTimePicker
                    label="Date&Time Debut"
                    value={value}
                    onChange={(start) => { setNewEvent({ ...newEvent, start }) }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                  <DateTimePicker
                    label="Date&Time Fin"
                    value={value}
                    onChange={(end) => { setNewEvent({ ...newEvent, end }) }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
                <InputLabel id="demo-simple-select-label">Etat de Reservation</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={etat}
                  label="etat"
                  onChange={handleChange2}
                >
                  <MenuItem value={"NonConfirmed"}>NonConfirmed</MenuItem>
                  <MenuItem value={"Confirmed"}>Confirmed</MenuItem>
                </Select>
                <Button variant="contained" onClick={handleAddEvent} >Add Event </Button>
                <br></br>
                <br></br>
                <br></br>
                <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: 400, width: 1000 }} />
              </div >

        </main>
      </div>
      <Footer />
    </div>






  );
}
export default calendar;

