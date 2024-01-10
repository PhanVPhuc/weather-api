// const axios = require("axios");

// export const geoApiOptions = {
//   method: "GET",
//   url: "https://wft-geo-db.p.rapidapi.com/v1/geo/cities",
//   headers: {
//     "X-RapidAPI-Key": "de59faef3bmshe576b4a778cc1cap19763fjsn9260e7b92552",
//     "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
//   },
// };

// try {
//   const response = await axios.request(geoApiOptions);
//   console.log(response.data);
// } catch (error) {
//   console.error(error);
// }
//  i will do axios later if i understand that api works

// const url = "https://wft-geo-db.p.rapidapi.com/v1/geo/cities";

// try {
//   const response = await fetch("/cities", geoApiOptions);
//   const result = await response.text();
//   console.log(result);
// } catch (error) {
//   console.error(error);
// }

export const geoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "de59faef3bmshe576b4a778cc1cap19763fjsn9260e7b92552",
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";
