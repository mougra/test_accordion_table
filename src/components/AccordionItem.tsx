import React, { useRef } from 'react'
// import './../styled/accordion'
// import '../styled/Accordion'
// import '../styled/Accordion'
// import '../index.css'
import '../styled/accordion.scss'

interface itemsProps {
  faq: any
  onToggle: any
  active: any
}

const AccordionItem = ({ faq, onToggle, active }: itemsProps) => {
  const { title, content } = faq
  const contentEl = useRef<HTMLDivElement | null>(null)
  return (
    <li className={`accordion_item ${active ? 'active' : ''}`}>
      <button className='button' onClick={onToggle}>
        {title}
        <span className='control'>{active ? '—' : '+'} </span>
      </button>
      <div
        ref={contentEl}
        className='answer_wrapper'
        style={
          active
            ? { height: contentEl.current?.scrollHeight }
            : { height: '0px' }
        }
      >
        <div className='answer'>{content}</div>
      </div>
    </li>
  )
}

export default AccordionItem
