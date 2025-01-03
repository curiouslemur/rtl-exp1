import React, { useEffect, useState } from 'react';
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Routes, Route, useNavigate, useSearchParams } from 'react-router-dom';

import * as navigator from './_components/_route'
import * as dao from './_utils/firebase-config'

import './App.css';

import { StudyContext } from './_utils/contexts';
import { loadTexts_inLang } from './_utils/content-loader'

function App() {
  // Uncomment the two lines below to collect experiment language from the experiment link ?lang=en
  const [searchParams, setSearchParams] = useSearchParams();
  // const [expLang, setExplang] = useState('en')
  const [expLang, setExpLang] = useState(searchParams.get('lang') || sessionStorage.getItem('expLang'))// searchParams.get('lang'))

  const [firstBlock, setFirstBlock] = useState(null)
  const [firstChartType, setFirstChartType] = useState(null)

  const [secondBlock, setSecondBlock] = useState(null)
  const [secondChartType, setSecondChartType] = useState(null)

  const [sessionID, setSessionID] = useState(null)

  sessionStorage.setItem('expLang', expLang)

  // const stimuliBar = loadStimuli_inLang(expLang, "bar")
  // const stimuliRadial = loadStimuli_inLang(expLang, "radial")


  const meta = {
    expLang: expLang,
    expName: expLang + '-rtl1', title: "rtl-exp1",
    expText: loadTexts_inLang(expLang),
    // sessionID: generateSessionID(),
    firstBlock: firstBlock,
    // totalQs: stimuli
  }

  const navigate = useNavigate()
  const subdom = "/rtl-exp1"

  useEffect(() => {
    if (expLang === "ar" || expLang === "he") {
      document.documentElement.lang = "ar"
      document.documentElement.dir = "rtl"
    }
  });

  useEffect(() => {
    dao.getExpFirstBlock("first-block", expLang).then((data) => {
      if (data.block1 === "bar") {
        setSessionID(generateSessionID() + "-B")
        setFirstBlock("B"); setFirstChartType("bar")
        setSecondBlock("R"); setSecondChartType("radial")
        dao.setNextFirstBlock("first-block", expLang, "radial")
      } else {
        setSessionID(generateSessionID() + "-R")
        setFirstBlock("R"); setFirstChartType("radial")
        setSecondBlock("B"); setSecondChartType("bar")
        dao.setNextFirstBlock("first-block", expLang, "bar")
      }
    })
  }, [])

  // read first block name 
  // const firstBlock = dao.getExpFirstBlock("first-block", meta.expLang).block1

  return (
    expLang ?
      <StudyContext.Provider value={{ expLang, firstBlock }}>
        <PageMeta meta={meta} />
        <Routes>
          <Route path={subdom} element={<navigator.Consent meta={meta} navigate={navigate} sessionID={sessionID}
            // nextUrl={subdom + "/introB"} />} /> 
            nextUrl={subdom + "/intro" + firstBlock} />} />

          <Route path={subdom + "/intro" + firstBlock} element={<navigator.Intro meta={meta} navigate={navigate}
            nextUrl={subdom + "/trial" + firstBlock} chartType={firstChartType} />} />

          <Route path={subdom + "/trial" + firstBlock} element={<navigator.Trial meta={meta} navigate={navigate}
            // nextUrl={subdom + "/break"} chartType={"bar"}
            nextUrl={subdom + "/break"} chartType={firstChartType} />} />

          <Route path={subdom + "/break"} element={<navigator.Break meta={meta} navigate={navigate}
            nextUrl={subdom + "/intro" + secondBlock} />} />

          <Route path={subdom + "/intro" + secondBlock} element={<navigator.Intro meta={meta} navigate={navigate}
            nextUrl={subdom + "/trial" + secondBlock} chartType={secondChartType} />} />

          <Route path={subdom + "/trial" + secondBlock} element={<navigator.Trial meta={meta} navigate={navigate}
            nextUrl={subdom + "/outro"} chartType={secondChartType} />} />

          <Route path={subdom + "/outro"} element={<navigator.Outro meta={meta} />} />
        </Routes>
      </StudyContext.Provider> :
      <h3> Language undefined </h3>

  );
}

const PageMeta = (props) => {
  if (props.meta.language === 'ar' || props.meta.language === "he") {
    return (
      <HelmetProvider>
        <Helmet htmlAttributes={{ lang: 'ar', dir: 'rtl' }}>
          <title>{props.meta.title}</title>
        </Helmet>
      </HelmetProvider >
    )
  } else {
    return (
      <HelmetProvider>
        <Helmet>
          <title>{props.meta.title}</title>
        </Helmet>
      </HelmetProvider>
    )
  }
}

const generateSessionID = () => {
  const D = new Date();
  let m = D.getMonth() + 1
  let month = m < 10 ? "0" + m : m // if month is Jan --> 01 instead of just 1
  let d = D.getDate()
  let day = d < 10 ? "0" + d : d
  return "2024" + month + day + "-" + D.getHours() + D.getMinutes() + "-" + D.getSeconds() + D.getMilliseconds()
}


export default App;
