import React, { useState } from 'react'
import { Trans, useTranslation } from 'react-i18next'
import Navbar from './components/navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/about/About'
import ContentFilter from './components/contentFilter/ContentFilter'
import Meet from './components/Meet Creators/Meet'
import Plans from './components/Plans/Plans'
import Form from './components/Form/Form'
import Footer from './components/footer/Footer'
import './index.css'
import "./App.css"
import '@fortawesome/fontawesome-free/css/all.min.css';
import Whatsapp from './components/whatsapp/Whatsapp'

function App() {
const { t, i18n } = useTranslation();
  const [isRTL, setIsRTL] = useState(i18n.language === "ar");


  return (
    <>
 
    <Hero i18n={i18n} />
    <About isRTL={isRTL} t={t} i18n={i18n}/>
    <ContentFilter isRTL={isRTL} i18n={i18n}/>
    <Meet  isRTL={isRTL} i18n={i18n.language}/>
    <Plans  isRTL={isRTL} i18n={i18n.language}/>
    <Form/>
    <Whatsapp/>
    <Footer/>
  
   
   

    </>
  )
}

export default App











