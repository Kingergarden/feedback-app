import FeedbackItem from './ComponentItem'

import React from 'react'



function ComponentList({feedback, handleDelete}) {

    if (!feedback || feedback.length === 0)
        {
            return <p>No feedback yet</p>
        }

        return(
            <div className="feedback-list">
                { feedback.map( (item) => (
                        <FeedbackItem  
                        key={item.id} 
                        item={item} 
                        handleDelete={handleDelete}
                        />
                ))}
            </div>
        )
}

export default ComponentList
