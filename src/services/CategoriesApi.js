import axios from "axios";

export default {
    getCategories: async (url, resp) => {
        try {
            const baseURL = 'https://api.mercadolibre.com'
            const res = await axios.get(`${baseURL}/sites/MLB/${url}`)
            return resp(res)
        }
        catch (err) {
            console.log(err)
        }
    }
}
