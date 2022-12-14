import Head from 'next/head'
import Image from 'next/image'
import Homemain from '../components/Homemain';
import Slider from '../components/Slider';
import {SliderData} from '../components/SliderData';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Andres Photography</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Homemain heading='Andres Photography' message='I see the beauty in life and the little moments that make it unique, that is worth saving as a memory or even better, a picture.'/>
      <Slider slides={SliderData}/>
    </div>
  );
}