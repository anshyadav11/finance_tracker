import {useUser}from "@clerk/clerk-react"
import { Financial_record_list } from "./financial-record-list";
import { Financial_record_form } from "./financial-record-form";

export const Dashboard=()=>{
    const {user}=useUser();

    return(
        
        <div className="dashboard_component">
        <h1>   hii {user?.firstName} !  here are your finances </h1>
        <Financial_record_form/>
        <Financial_record_list/>
        </div>
    )

}


