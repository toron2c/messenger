import { Navigate } from "react-router-dom";



export default function PublicRouter( { auth, children } ) {
    if ( auth ) {
        return <Navigate to={'/chats'} />
    }
    return children;
}