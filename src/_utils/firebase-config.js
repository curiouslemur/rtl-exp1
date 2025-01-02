// import { initializeApp } from 'firebase/app'
import firebase from 'firebase/compat/app'
import { doc, getFirestore, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDERID,
    appId: process.env.REACT_APP_APPID
}

const app = firebase.initializeApp(firebaseConfig) // initialize firebase
const fsdb = getFirestore(app) // initialize cloud Firestore 

export const logFs = async (id, record, expLang, expName) => {
    const path = `${expName}/${id}`
    return await setDoc(doc(fsdb, expLang + "-" + path), record, { merge: true })
}

// read data from Firestore
export const getExpFirstBlock = async (fsRoot, lang) => {
    try {
        const docRef = doc(fsdb, fsRoot, lang);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            return docSnap.data()
        } else {
            console.log("No such document!");
        }
    } catch (e) {
        console.error("Error reading document: ", e);
    }
}

export const setNextFirstBlock = async (fsRoot, lang, nextBlockName) => {
    return await setDoc(doc(fsdb, fsRoot, lang), { block1: nextBlockName }, { merge: true })
}

// // Params: id: sessionID, demData: data in JSON format
export const logDem_ = async (dem) => {
    if (dem.countryResLen === '999') {
        return await setDoc(doc(fsdb, "test-" + dem.expLang + "-" + dem.expName + "-dem", dem.sessionID), dem, { merge: true })
    } else if (dem.expCountry === 'revisit') {
        return await setDoc(doc(fsdb, "revisit-" + dem.expLang + "-" + dem.expName + "-dem", dem.sessionID), dem, { merge: true })
    } else {
        return await setDoc(doc(fsdb, dem.expLang + "-" + dem.expName + "-dem", dem.sessionID), dem, { merge: true })
    }
}

export const logDem = async (pathDem, dem) => {
    if (dem.countryResLen === '999') {
        return await setDoc(doc(fsdb, "test-" + pathDem), dem, { merge: true })
    } else if (dem.expCountry === 'revisit') {
        return await setDoc(doc(fsdb, "revisit-" + pathDem), dem, { merge: true })
    } else {
        return await setDoc(doc(fsdb, pathDem), dem, { merge: true })
    }
}

/*
 * @param {*} id 
 * @param {*} record 
 * @param {*} expLang 
 * @param {*} expName 
 * @param {*} test (bool): 1 this is a test data, 0 this is an actual data
 * @returns 
 */
export const logData_ = async (id, record, expLang, expName, test) => { // log data under en-color1/sessionID/
    const path = `${expName}/${id}`
    if (test) {
        return await setDoc(doc(fsdb, "test-" + expLang + "-" + path), record, { merge: true })
    } else {
        return await setDoc(doc(fsdb, expLang + "-" + path), record, { merge: true })
    }
}

// export const logData = async (dem, record) => {
export const logData = async (path, dem, record) => {
    // const path = dem.expName + '/' + dem.sessionID + "-" + firstBlock
    if (dem.countryResLen === '999') {
        return await setDoc(doc(fsdb, "test-" + path), record, { merge: true })
    } else if (dem.expCountry === 'revisit') {
        return await setDoc(doc(fsdb, "revisit-" + path), record, { merge: true })
    } else {
        return await setDoc(doc(fsdb, path), record, { merge: true })
    }
}
