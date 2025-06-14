import { useEffect } from 'react';
import gawa from './assets/gawa.webp'
import themes from './assets/themes.webp'
import xpense from './assets/xpense.webp'
import motherly from './assets/motherly.png'
import kgr from './assets/kgr.jfif'
import gds from './assets/gds.jfif'
import ais from './assets/ais.jfif'
import bob from './assets/bob.jfif'
import tms from './assets/tms.jfif'
import Card from './components/Card';


function Projects() {
  useEffect(() => {
    document.title = 'Gene | Projects'; // Quick solution
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      <Card
        href={"/gawa"}
        src={themes}
        title='Themes' 
        text='Play this classic "Codenames" inspired game for your group gatherings!'
      />
      <Card
        href={"/gawa"}
        src={gawa}
        title='Gawa' 
        text='Co-developed a service aggregator app with a talented team using Flutter and Firebase. Presented the concept at PSC8, attracting interest from investors and LGUs. Ensured app quality by meticulously reviewing user flow details.'
      />
      <Card
        href={'/motherly'}
        src={motherly}
        title='Motherly' 
        text='Motherly is a comprehensive medical tracking application designed specifically for mothers to simplify the management of their children&apos;s healthcare needs.'
      />
      <Card 
        src={kgr}
        title='KaGawa Registration' 
        text='Crafted using Flutter with a backend powered by Firebase, is designed to offer service providers a seamless registration process as workers on the Gawa platform.'
      />
      <Card 
        src={xpense}
        title='Xpense' 
        text='Xpense is a smart financial tracker made for recording receipts, invoices, and business expenses. Link your bank account and It&apos;ll automatically label and organize expenses for you.'
      />
      <Card 
        src={gds}
        title='Gawa Demographic Survey' 
        text='Frontend interface using React.js and Tailwind CSS for a forest-classifier API that predicts our customer&apos;s demographic through a survey. '
      />
      <Card 
        src={ais}
        title='AI student classifier' 
        text='k-means and naive bayes classifier, which predicts a student&apos;s cluster based on their socioeconomic and demographic data.'
      />
      <Card 
        src={bob}
        title='Bob & Skeletor' 
        text='Bob and Skeletor is a multiplayer horror game developed using Unity and hosted using PHP, MySQL'
      />
      <Card
        src={tms}
        title='Trip Management System' 
        text='Boyemma TMS & PMS simplifies trip and billing management for trucking companies. It efficiently handles outgoing freights and crew operations.'
      />
    </div>
  )
}

export default Projects