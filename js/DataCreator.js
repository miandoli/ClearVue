/**
 * This function will create a location point for Matt and then return it
 * @author Luke Trujillo
 * @createDate 11/10/2018
 * @param {string} var name       This is the full name of the location
 * @param {number} var longitude This is the longitude of the location
 * @param {number} var latitude   This is the latitude of the location
 * @param {number} var index      From -100 to 100 to determine the size of the circle
 *
 * @return {object} A javascript object containing this data for later
 */
function createLocPoint(name, longitude, latitude, index) {
    return {
        "name": name,
        "longitude": longitude,
        "latitude": latitude,
        "value": index
    }; //returns the formatted object
}

/**
 * This return the data needed for the
 * @author Luke Trujillo
 * @param   {[[Type]]} code   [[Description]]
 * @param   {[[Type]]} name   [[Description]]
 * @param   {[[Type]]} change [[Description]]
 * @returns {object}   [[Description]]
 */
function createCountryShade(code, name, change) {
    return {
        "title": name,
        "id": code,
        "customData": change
    };
}
