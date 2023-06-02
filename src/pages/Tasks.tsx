import React from 'react'
import Accordion from '../components/Accordion'
import '../styled/tasks.scss'

function Tasks() {
  return (
    <div className='tasks'>
      <h2 className='tasks-title'>Задачи</h2>

      <div className='table-info-title'>
        <div className='table_date'>Уровень</div>
        <div className='table_cipher-tasks'>Шифр задачи</div>
        <div className='table_cipher-project'>Шифр проекта</div>
        <div className='table_task'>Задача</div>
        <div className='table_status'>Статус</div>
        <div className='table_responsible'>Ответственный</div>
        <div className='table_reassign'>Переназначить</div>
        <div className='table_priority'>Приоритет</div>
        <div className='table_comment'>Комментарий</div>
        <div className='table_plan-time'>План время</div>
        <div className='table_fact-time'>Факт время</div>
        <div className='table_start'>Начал</div>
        <div className='table_finish'>Завершил</div>
      </div>

      <Accordion />
    </div>
  )
}

export default Tasks
