import React from 'react';
import {Close} from '@material-ui/icons'
import { useState } from 'react';
function Announce() {

    const [announceStyle ,setAnnounceStyle ]=useState('bg-[#8a4af3] font-bold text-white flex  item-center justify-center')
    const handleClose = () =>{
        setAnnounceStyle(announceStyle + "  hidden")
    }
    return (
        <div className={announceStyle}>
            <h2> Hurry up it's 70 % off now !!!</h2>
            <Close className='cursor-pointer' onClick={handleClose} />
        </div>
    );
}

export default Announce;