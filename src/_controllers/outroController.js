export const isProlificUser = () => {
    let dem = JSON.parse(sessionStorage.getItem('demography'))
    if (dem.prolificID) { return true } else { return false }
}