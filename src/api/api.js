import axios from "axios";


const instance = axios.create( {
    baseURL: 'https://rickandmortyapi.com/api',

} )


export const apiGetCharacters = async ( page ) => {
    return await instance.get( `/character?page=${page}` )
}