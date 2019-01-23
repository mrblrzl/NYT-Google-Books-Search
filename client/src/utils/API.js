import axios from "axios";
const BASEURL = "";
const APIKEY = `${process.env.REACT_APP_GBOOKS_API_KEY}`;


export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
    }
}