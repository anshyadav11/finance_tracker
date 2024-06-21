import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import{ClerkProvider} from "@clerk/clerk-react"

const Publishable_key=import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if(!Publishable_key){
  throw new Error("Clerk publishable key is not set");
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={Publishable_key}>
    <App />
    </ClerkProvider>
  </React.StrictMode>,
)
