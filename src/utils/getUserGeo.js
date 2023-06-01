import {getLocalStorage, setLocalStorage} from "./localStorage";


export const GetUserGeo = () => {
    const user_geo = getLocalStorage('user_geo');

    let now = Math.floor(Date.now() / 1000);
    let diff = 60 * 60 * 24 * 30;
    if (now - user_geo.timestamp > diff) {
        setLocalStorage('user_geo', {});
        return null;
    } else {
        //console.log(user_geo.coords)
        return user_geo;
    }
}