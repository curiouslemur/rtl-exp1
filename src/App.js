import React, { useEffect, useState } from 'react';
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Routes, Route, useNavigate, useSearchParams } from 'react-router-dom';

// import ConsentEn from './locals/english/consentEn';
import * as navigator from './_components/_route'
import { colorCodes } from './stimuli/colors'

import './App.css';

import { StudyContext } from './_utils/contexts';
import { loadPages_inLang, loadStimuli_inLang } from './_utils/content-loader'
import { stimuli } from './stimuli/stimuli';

function App() {
  // Uncomment the two lines below to collect experiment language from the experiment link ?lang=en
  const [searchParams, setSearchParams] = useSearchParams();
  // const [expLang, setExplang] = useState('en')
  const [expLang, setExpLang] = useState(searchParams.get('lang') || sessionStorage.getItem('expLang'))// searchParams.get('lang'))

  sessionStorage.setItem('expLang', expLang)
  const expPages = loadPages_inLang(expLang) // these are the pages to be used depending on the language of the exp

  const stimuli = loadStimuli_inLang(expLang)

  const meta = {
    expLang: expLang,
    expName: expLang + '-rtl1', title: "rtl-exp1",
    sessionID: generateSessionID(),
    totalQs: stimuli
  }
  const navigate = useNavigate()
  const subdom = "/rtl-exp1"

  useEffect(() => { }, []);

  return (
    expLang ?
      <StudyContext.Provider value={{ expLang }}>
        <PageMeta meta={meta} />
        <Routes>
          <Route path={subdom} element={<navigator.Consent config={meta} navigate={navigate}
            nextUrl={subdom + "/intro"} expPages={expPages} expLang={expLang} />} />

          <Route path={subdom + "/intro"} element={<navigator.Intro config={meta} navigate={navigate}
            nextUrl={subdom + "/trial"} expPages={expPages} expLang={expLang} />} />

          <Route path={subdom + "/trial"} element={<navigator.Trial config={meta} navigate={navigate}
            nextUrl={subdom + "/outro"} expPages={expPages} expLang={expLang}
            stimuli={stimuli} />} />

          <Route path={subdom + "/outro"} element={<navigator.Outro config={meta} navigate={navigate}
            expPages={expPages} />} />
        </Routes>
      </StudyContext.Provider> :
      <h3> Language undefined </h3>
  );
}

const PageMeta = (props) => {
  if (props.meta.language === 'ar' || props.meta.language === "hebrew") {
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

const shuffle = (a) => { //Fisher-Yates shuffle
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i]; a[i] = a[j]; a[j] = x;
  } return a;
}

export default App;
