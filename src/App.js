/* eslint-disable no-unreachable */
import {v4 as uuidv4} from 'uuid'
import Header from "./components/Header";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import FeedbackData from "./data/ComponentData";
import FeedbackList from "./components/ComponentList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import AboutPage from './pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'
import { useState } from "react";


function Smth(){

    const test = {
        bckg: 'blue',
        clr: 'red'
    }


    const addFeedback = (nFeed) => {
        nFeed.id = uuidv4()
        setFeedback([nFeed, ...feedback])
        console.log(nFeed)
    }


    const deleteFeedback = (id) => {

        if (window.confirm('Are you sure you want to delete?')){

            setFeedback( feedback.filter( (item) => item.id !== id) )

        }

        console.log('App and id', id)
    }



    const [feedback, setFeedback] = useState(FeedbackData)

    return (




    <Router>
    <Header test={test}/>
     <div className="container">

    <Routes>
     <Route exact path='/' element={
        <> 
     <FeedbackForm handleAdd={addFeedback}/>
     <FeedbackStats feedback={feedback} />
     <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
        </>
     }>
     </Route>

    <Route path='about' element={<AboutPage />} />
    </Routes>

    <AboutIconLink />
    </div>
    
    </Router>

    )
}

export default Smth;