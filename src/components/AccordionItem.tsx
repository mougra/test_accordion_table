import React, { useEffect, useRef, useState } from 'react'
import '../styled/accordion.scss'
import Row from './Row'
import { IContent, IData } from '../models'

interface itemsProps {
  faq: IData
  onToggle: any
  active: any
}

const AccordionItem = ({ faq, onToggle, active }: itemsProps) => {
  const { title, content } = faq
  const contentEl = useRef<any>(0)

  // useEffect(() => {
  //   setHeigth(contentEl.current?.scrollHeight)
  //   console.log(contentEl.current?.scrollHeight)
  // }, [])

  // const [height, setHeigth] = useState(0)

  return (
    <li className={`accordion_item ${active ? 'active' : ''}`}>
      <button className='button' onClick={onToggle}>
        <span className='button-title'>{title}</span>
        <div className={active ? 'arrow arrow-active' : 'arrow'}>
          <span className='arrow-left' />
          <span className='arrow-right' />
        </div>
        {/* <span className='control'>{active ? '—' : '+'} </span> */}
      </button>
      <div
        ref={contentEl}
        className='answer_wrapper'
        style={
          active
            ? { height: contentEl.current?.scrollHeight }
            : { height: '0px' }
        }
        // style={active ? { height: height } : { height: '0px' }}
      >
        {content.map((contentOne: IContent, index: any) => (
          <Row key={index} content={contentOne} />
        ))}
      </div>
    </li>
  )
}

export default AccordionItem
