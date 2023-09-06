import React from 'react'
import { useState } from 'react'

function ComponentItem({item}) {

    const [rating, setRating] = useState(7)
    const [text, setText] = useState("This is default text") 

    
    const handleClick = () => {

        setRating( (prev) => {

            return prev+45;
        })
    }


  return (
    <div>

                <div className="card">
                        <div className="num-display">
                            {item.rating}
                        </div>
                        <div className="text-display">
                            {item.text}
                        </div>
                        <button onClick={handleClick}>Uncle Click</button>
                    </div>        
    </div>
  )
}

export default ComponentItem
