// // Params: e: event, val: vlaue selected
export const onChangeSelect = (e, val, navigate, nextUrl) => {
    // add grayScale: value to demography    
    let dem = JSON.parse(sessionStorage.getItem('demography'))
    dem.grayScale = val
    sessionStorage.setItem("demography", JSON.stringify(dem))
    document.body.classList.remove('display-body')
    navigate(nextUrl)
}
