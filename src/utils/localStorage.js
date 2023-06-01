export const getLocalStorage = key => {
    const data = localStorage.getItem(key)
    if (data !== null) {
        return JSON.parse(data)
    }
    return {};
}

export const setLocalStorage = (key, geo) => {
    const {coords, adress} = geo
    const object = {coords: coords, adress: adress, timestamp: new Date().getTime()}
    localStorage.setItem(key, JSON.stringify(object));
    //localStorage.setItem(key, JSON.stringify(data))
}