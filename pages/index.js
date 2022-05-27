import Head from 'next/head'
import 'mapbox-gl/dist/mapbox-gl.css';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
      <title>FOOT + </title>
				<link
      href="https://api.mapbox.com/mapbox-gl-js/v1.10.1/mapbox-gl.css"
      rel="stylesheet" />

      </Head>
    </div>
  )
}
