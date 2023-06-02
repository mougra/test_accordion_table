import React, { useState } from 'react'
import AccordionItem from './AccordionItem'
import data from '../data.json'
import '../styled/accordion.scss'
import { IData } from '../models'

function Accordion() {
  const [clicked, setClicked] = useState<any>(1)

  const handleToggle = (index: any) => {
    if (clicked === index) {
      return setClicked('0')
    }
    setClicked(index)
  }

  return (
    <ul className='accordion'>
      {data.map((faq: IData, index: any) => (
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
