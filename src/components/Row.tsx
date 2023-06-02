import { IContent } from '../models'
import '../styled/aside.scss'
import Select from './Select'
import options from '../option.json'
import { useState } from 'react'

interface RowProps {
  content: IContent
}

function Row({ content }: RowProps) {
  const [month, setMonthValue] = useState('')
  const handleMonthSelect = (value: string) => {
    setMonthValue(value)
  }
  const selectedMonth = options.find((item: any) => item.value === month)

  const [valueSelect, setValueSelect] = useState(content.status)

  return (
    <div
      className={
        valueSelect === 'В работе'
          ? 'table-info-title table-info-title-working'
          : 'table-info-title'
      }
    >
      <div className='table_date'>{content.date}</div>
      <div className='table_cipher-tasks'>{content['cipher-tasks']}</div>
      <div className='table_cipher-project'>{content['cipher-project']}</div>
      <div className='table_task'>{content.task}</div>
      <div className='table_status'>
        <Select
          // mode='cells'
          options={options}
          selected={selectedMonth || null}
          onChange={handleMonthSelect}
          placeholder={content.status}
          valueSelect={valueSelect}
          setValueSelect={setValueSelect}
        />
      </div>
      <div className='table_responsible'>{content.responsible}</div>
      <div className='table_reassign'>{content.reassign}</div>
      <div className='table_priority'>{content.priority}</div>
      <div className='table_comment'>{content.comment}</div>
      <div className='table_plan-time'>{content['plan-time']}</div>
      <div className='table_fact-time'>{content['fact-time']}</div>
      <div className='table_start'>{content.start}</div>
      <div className='table_finish'>{content.finish}</div>
    </div>
  )
}

export default Row
