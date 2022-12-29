import React from "react";
import {AiOutlineBell} from 'react-icons/ai';


function NotificationBell(){
    return(
        <button className="btn btn-secondary rounded-circle m-1">
            <AiOutlineBell/>
        </button>
    )
}
export default NotificationBell;