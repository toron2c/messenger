export function getStatusError() {
    return ( state ) => state.auth.error.isError;
}


export function getStatusAuth() {
    return ( state ) => state.auth.isAuth;
}