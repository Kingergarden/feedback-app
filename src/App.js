/* eslint-disable no-unreachable */
import Header from "./components/Header";
import FeedbackData from "./data/ComponentData";
import FeedbackList from "./components/ComponentList"
import { useState } from "react";


function Smth(){

    const test = {
        bckg: 'blue',
        clr: 'red'
    }

    const [feedback, setFeedback] = useState(FeedbackData)

    return (




    <>
    <Header test={test}/>
     <div className="container">
     <FeedbackList feedback={feedback} />
     </div>
    </>

    )
}

export default Smth;