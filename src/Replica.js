import { useState } from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Test from "./components/TestTS";
import SignupPage from "./pages/Signup";
import LoginPage from "./pages/Login";

function RepFunction() { 

    return (
        <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
         <Router>
            <Routes>
                <Route path="/" element={<LoginPage/>} />
                <Route path="/signup" element={<SignupPage/>} />
            </Routes>
          </Router>
          <Test />

        </div>
      </div>


    );


}


export default RepFunction