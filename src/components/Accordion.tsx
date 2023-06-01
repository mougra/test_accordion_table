import React, { useState } from 'react'
import AccordionItem from './AccordionItem'
import data from '../data.json'
import '../styled/accordion.scss'

function Accordion() {
  const [clicked, setClicked] = useState('0')

  const handleToggle = (index: any) => {
    if (clicked === index) {
      return setClicked('0')
    }
    setClicked(index)
  }
  return (
    <ul className='accordion'>
      {data.map((faq: any, index: any) => (
        <AccordionItem
          key={index}
          faq={faq}
          onToggle={() => handleToggle(index)}
          active={clicked === index}
        />
      ))}
    </ul>
  )
}

export default Accordion
