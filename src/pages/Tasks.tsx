import React from 'react'
import Accordion from '../components/Accordion'

function Tasks() {
  return (
    <>
      <h2>Задачи</h2>
      <div className='table-main'>
        <h1 className='h1-title'>Строительно-монтажные работы</h1>
        <div className='table-info-title'>
          <div className='table-level'>Уровень</div>
          <div className='table-namework'>Наименование работ</div>
          <div className='table-3'>Основная з/п</div>
          <div className='table-4'>Оборудование</div>
          <div className='table-5'>Накладные расходы</div>
          <div className='table-6'>Сметная прибыль</div>
        </div>
      </div>
      <Accordion />
    </>
  )
}

export default Tasks
