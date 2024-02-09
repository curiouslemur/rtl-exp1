import React, { useEffect, useState } from 'react';
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Routes, Route, useNavigate, useSearchParams } from 'react-router-dom';

// import ConsentEn from './locals/english/consentEn';
import * as navigator from './_components/_route'
import { colorCodes } from './stimuli/colors'

import './App.css';

import { StudyContext } from './_utils/contexts';
import { loadPages_inLang, loadConcepts_inLang } from './_utils/content-loader'

function App() {
  // Uncomment the two lines below to collect experiment language from the experiment link ?lang=en
  const [searchParams, setSearchParams] = useSearchParams();
  // const [expLang, setExplang] = useState('en')
  const [expLang, setExpLang] = useState(searchParams.get('lang') || sessionStorage.getItem('expLang'))// searchParams.get('lang'))

  sessionStorage.setItem('expLang', expLang)

  const expPages = loadPages_inLang(expLang) // these are the pages to be used depending on the language of the exp
  const concepts = loadConcepts_inLang(expLang)

  const meta = { language: expLang, expName: expLang + 'exp1', title: "color-exp1", sessionID: generateSessionID() }
  const navigate = useNavigate()
  const subdom = "/rtl-exp1"

  useEffect(() => { }, []);

  return (
    <StudyContext.Provider value={{ expLang, concepts }}>
      <PageMeta meta={meta} />
      <Routes>
        <Route path={subdom} element={<navigator.Consent config={meta} navigate={navigate}
          nextUrl={subdom + "/intro"} expPages={expPages} expLang={expLang} />} />

        <Route path={subdom + "/intro"} element={<navigator.Intro config={meta} navigate={navigate}
          nextUrl={subdom + "/trial"} expPages={expPages} conceptList={concepts} />} />

        <Route path={subdom + "/trial"} element={<navigator.Trial config={meta} navigate={navigate}
          nextUrl={subdom + "/outro"} expPages={expPages}
          conceptList={shuffle(concepts)} colorCodes={shuffle(colorCodes)} />} />

        <Route path={subdom + "/outro"} element={<navigator.Outro config={meta} navigate={navigate}
          expPages={expPages} />} />
      </Routes>
    </StudyContext.Provider>
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
  const d = new Date();
  let m = d.getMonth() + 1
  return "2024" + m + d.getDate() + "-" + d.getHours() + d.getMinutes() + "-" + d.getSeconds() + d.getMilliseconds()
}

const shuffle = (a) => { //Fisher-Yates shuffle
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i]; a[i] = a[j]; a[j] = x;
  } return a;
}

export default App;
