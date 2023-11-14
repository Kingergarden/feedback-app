import React from 'react'
import { useState } from 'react'
import Card from './shared/Card'
import Button from './Button'
import RatingSelect from './RatingSelect'

function FeedbackForm({handleAdd}) {

   const handleSubmit = (e) => {
    e.preventDefault()

        if(text.trim().length >= 10 ){
          const newFeedback = {
            text,
            rating,
          }
          handleAdd(newFeedback)
        }


   }

    const [text, setText] = useState('')
    const [btnDisabled, setBtnDisabled] = useState('true')
    const [message, setMessage] = useState('')
    const [rating, setRating] = useState(10)

    const handleTextChange = (e) => {
        if (text === '' ){
          setBtnDisabled('true')
          setMessage(null)
        } else if (text !== '' && text.trim().length <= 10) {
            setMessage('Text must be at least 10 characters')
            setBtnDisabled(true)
        } else {
            setBtnDisabled(false)
            setMessage(null)
        }
      
        setText(e.target.value)
        

    }

  return (

    <Card>
            <form onSubmit={handleSubmit}> 
                    <h2>How would you rate your service with us?</h2>
                    <RatingSelect select={(prime) => { setRating(prime) }}></RatingSelect>

                    <div className="input-group">
                        
                        <input
                        value={text}
                        onChange={handleTextChange}
                        type='text'
                        placeholder='Write a review'
                        />
                        
                        <Button type='submit' isDisabled={btnDisabled} > Send </Button>

                    </div>

                    {message && <div className='message'> {message} </div>}
            </form>

    </Card>
  )
}

export default FeedbackForm