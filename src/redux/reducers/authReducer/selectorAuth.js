export function getStatusError() {
    return ( state ) => state.auth.error.isError;
}


export function getStatusAuth() {
    // console.log( `use getStatusAuth function ${++i}` )
    return ( state ) => state.auth.isAuth;
}