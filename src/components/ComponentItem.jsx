import React from 'react'
import { FaTimes } from 'react-icons/fa'
import Card from './shared/Card'
import { useState } from 'react'
import ComponentList from './ComponentList'

function ComponentItem({item, handleDelete}) {


  return (

                <Card reverse={true}>

                        <div className="num-display">
                            {item.rating}
                        </div>

                        <button onClick={() => handleDelete(item.id)} className="close">
                                <FaTimes color={"purple"} />
                        </button>

                        <div className="text-display">
                            {item.text}
                        </div>

                </Card>
  )
}

export default ComponentItem
