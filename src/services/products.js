import axios from "axios";

const org_id = "c1c221bdceb44e4a8189aa93c6400ec5"
const api_id = "NS2N1212O6VPHSD"
const api_key = "c77697ebeafc4a8e8807af77c38652ea20240713124009209053"

const url = `https://timbu-get-all-products.reavdev.workers.dev/products?organization_id=${org_id}&reverse_sort=false&Appid=${api_id}&Apikey=${api_key}`
const getProducts = () => {
    return axios.get(url).then(res => res.data).catch(err =>  err.message)
}

export default {
    getProducts
}