import { useState } from 'react';

export default function Player({placeholder, symbol, isActive, onNameChange}){
    const [isEditing, setisEditing] = useState(false);
    const [changeName,setChangeName] = useState(placeholder);
    const [flag, setflag] = useState(0)
    function handleEditClick(){
        setisEditing(() => !isEditing);
        setflag(()=> flag + 1);

        //to check if editing is finished, then make name change
        if (isEditing){
            onNameChange(symbol,changeName)
        }
    }
    function handleFocus(){
        setChangeName('');
    }
    function handleChange(event){
        setChangeName(event.target.value);
    }
    
    let playerName = <span className='player-name'>{changeName}</span>
    if(isEditing){
        playerName = <input className='input-playerName' onFocus = {handleFocus} placeholder = {placeholder} value = {changeName} onChange={handleChange} required/>;
    }
        return(
        <li className='player-content'>
        <span className='player-info'>
            <span className='player-name'>{playerName}</span>
            <span className='player-symbol'>{symbol}</span>
        </span>
        {flag <=1 && <button className='edit' onClick={handleEditClick}>{!isEditing? 'Edit':'Save'}</button>}
        </li>
    )
}