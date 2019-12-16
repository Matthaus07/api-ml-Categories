import axios from "axios";

export default {
   
    getCategories: async (url, resp) => {
        try {
            const baseURL = 'https://api.mercadolibre.com'
            const options ={
                url: `${baseURL}/sites/MLB/${url}`,
                method: 'get',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                }
            }
            const res = await axios(options)
            return resp(res)
        }
        catch (err) {
            console.log(err)
        }
    }
}
