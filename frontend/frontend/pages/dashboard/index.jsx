import {useUser}from "@clerk/clerk-react"
export const Dashboard=()=>{
    const {user}=useUser();

    return(
        
        <div className="dashboard_component">
        <h1>   hii {user?.firstName} here are your finances </h1>
        </div>
    )
}