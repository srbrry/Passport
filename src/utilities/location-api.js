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

    //PATCH location
export function updateLocation(location, locationId) {
    return sendRequest(`${BASE_URL}/${locationId}`, "PATCH", location)
}

    //DELETE location
export function deleteLocation(locationId) {
    return sendRequest(`${BASE_URL}/${locationId}`, "DELETE")
}