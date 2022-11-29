import { Button, Checkbox, FormControlLabel, TextField } from '@mui/material'
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { saveName, setName, setShowName, setToggleNewName } from '../../redux/actions';
import style from './Profile.module.scss'

export default function Profile() {

    const dispatch = useDispatch();
    const name = useSelector( state => state.profile.name );
    const showName = useSelector( state => state.profile.showName );
    const showInputNewName = useSelector( state => state.profile.showFieldInputNewName )
    const toggleShowName = useCallback(
        () => {
            dispatch( setShowName() )
        },
        [dispatch],
    )

    const setNewNameHandler = useCallback(
        () => {
            dispatch( setToggleNewName() )
        },
        [dispatch],
    )

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
        <div className={style.checkBox}><FormControlLabel control={<Checkbox checked={showName} onChange={toggleShowName} />} label="Show name" /></div>
        {showName && ( showInputNewName ? <div className={style.inputs}><TextField onChange={onChangeName} id="outlined-basic" value={name} label="Name" variant="outlined" /><Button className={style.inputsButton} onClick={saveNameHandler} variant="contained">Save</Button></div> : <div onDoubleClick={setNewNameHandler} className={style.name}>{name}</div> )}
    </div> )
}