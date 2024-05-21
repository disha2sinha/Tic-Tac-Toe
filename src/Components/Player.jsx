import { useState } from 'react';

export default function Player({name, symbol, isActive}){
    const [isEditing, setisEditing] = useState(false);
    const [changeName,setChangeName] = useState(name);
    function handleEditClick(){
        setisEditing(() => !isEditing);
    }
    function handleChange(event){
        setChangeName(event.target.value)
    }
        let playerName = <span className='player-name'>{changeName}</span>
        if(isEditing){
            playerName = <input className='input-playerName' value = {changeName} onChange={handleChange} required/>;
        }

        return(
        <li className='player-content'>
        <span className='player-info'>
            <span className='player-name'>{playerName}</span>
            <span className='player-symbol'>{symbol}</span>
        </span>
        <button className='edit' onClick={handleEditClick}>{!isEditing? 'Edit':'Save'}</button>
        </li>
    )
}