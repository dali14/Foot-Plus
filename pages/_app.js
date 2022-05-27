import '../styles/globals.css'
import '../styles/Home.module.css';
import "@fullcalendar/common/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import './components/Map.css'
import 'mapbox-gl/dist/mapbox-gl.css';


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
