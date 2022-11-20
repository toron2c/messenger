import { Button, TextField } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { saveName, setName, setToggleNewName } from '../../redux/actions';
import style from './Profile.module.scss'

export default function Profile() {


    const dispatch = useDispatch();
    const name = useSelector( state => state.profile.name );
    const showInputNewName = useSelector( state => state.profile.showFieldInputNewName )


    const setNewNameHandler = () => {
        dispatch( setToggleNewName() )
    }
    const onChangeName = ( e ) => {
        e.preventDefault();
        dispatch( setName( e.target.value ) );

    }


    const saveNameHandler = ( e ) => {
        e.preventDefault();
        dispatch( saveName() );
    }


    return ( <div>
        <div><h1 className={style.title}>Profile</h1></div>
        {showInputNewName ?
            <div className={style.inputs}><TextField onChange={onChangeName} id="outlined-basic" value={name} label="Name" variant="outlined" />
                <Button className={style.inputsButton} onClick={saveNameHandler} variant="contained">Save</Button></div> :
            <div title="Double click to change name" onDoubleClick={setNewNameHandler} className={style.name}>{name}</div>}
    </div> )
}