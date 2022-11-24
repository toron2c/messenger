import { Button } from "@mui/material";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleNewChatInput } from "../../../redux/actions";
import { getStatusFieldInput } from "../../../redux/reducers/chatsReducer/selectorChats";
import InputNewChat from "./InputNewChat";



export default function DialogsNewChat() {
    const dispatch = useDispatch();
    const getStatusInput = useMemo( () => getStatusFieldInput(), [] );
    const inputNewDialog = useSelector( getStatusInput );

    const setInputVisible = ( e ) => {
        e.preventDefault();
        dispatch( toggleNewChatInput() )
    }
    return ( <>
        {!inputNewDialog ? <Button onClick={setInputVisible} variant="contained">Add chat</Button> :
            <InputNewChat />
        }
    </> )
}