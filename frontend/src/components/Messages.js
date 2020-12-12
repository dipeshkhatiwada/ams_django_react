import React from 'react';    
import { ToastContainer, toast } from 'react-toastify';    
import 'react-toastify/dist/ReactToastify.css';   
const Messages = (success,error) => {    
    if(success){  
        toast.success(success, {closeButton:false})
        return (<ToastContainer />)  
    }if(error){ 
        return "";   
    } 
}    
export default Messages;