import { Navigate } from "react-router-dom";



export default function PrivateRouter( { auth, children } ) {

    if ( !auth ) {
        return <Navigate to={'/login'} replace="true" />
    }

    return children
}