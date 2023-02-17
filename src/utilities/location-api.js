import sendRequest from "./send-request"

const BASE_URL = "/api/locations"

    //GET locations
export function getLocation() {
    return sendRequest(BASE_URL)
}

    //POST location
export function addLocation(location) {
    return sendRequest(BASE_URL, "POST", location)
}


