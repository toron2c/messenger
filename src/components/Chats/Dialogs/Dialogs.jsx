import { List } from "@mui/material";
import DialogItem from "./DialogItem/DialogItem";



export default function Dialogs( { dialogs, removeDialog } ) {


    let list = dialogs.map( el => <DialogItem id={el.id} name={el.name} removeDialog={removeDialog} /> )
    return ( <div>
        <List dense>{list}</List>
    </div> )
}