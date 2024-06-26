import {BrowserRouter as Router,Routes,Route}from "react-router-dom";
import { Dashboard } from "../pages/dashboard";
import { Auth } from "../pages/auth";
import { FinancialRecordsProvider } from "../contexts/financial-record-context";

function App() {

  return (<Router>
    <div className="app-component">
      <Routes>
        <Route path="/" element={<FinancialRecordsProvider><Dashboard/></FinancialRecordsProvider>}/>
        <Route path="/auth" element={<Auth> </Auth>}/>

      </Routes>
    </div>
  </Router>
  )
}

export default App
