import axios from "axios";


const instance = axios.create( {
    baseURL: 'https://cataas.com/',

} )


export const apiGetCats = async () => {
    return await instance.get( 'cat?json=true' )
}