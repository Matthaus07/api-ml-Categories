import axios from "axios";

export default {
    getCategories: (url, resp) => {
        const baseURL = 'https://api.mercadolibre.com'
        axios.get(`${baseURL}/sites/MLB/${url}`).then((response) => {
            resp(response);
        })
            .catch(error => { console.log(error) })
    }
}
