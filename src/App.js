/* eslint-disable no-unreachable */
import Header from "./components/Header";
import FeedbackData from "./data/ComponentData";
import FeedbackList from "./components/ComponentList"
import FeedbackStats from "./components/FeedbackStats"
import { useState } from "react";


function Smth(){

    const test = {
        bckg: 'blue',
        clr: 'red'
    }

    const deleteFeedback = (id) => {

        if (window.confirm('Are you sure you want to delete?')){

            setFeedback( feedback.filter( (item) => item.id !== id) )

        }

        console.log('App and id', id)
    }

    const [feedback, setFeedback] = useState(FeedbackData)

    return (




    <>
    <Header test={test}/>
     <div className="container">
     <FeedbackStats feedback={feedback} />
     <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
     </div>
    </>

    )
}

export default Smth;