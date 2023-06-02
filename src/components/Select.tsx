import React, { useState, useEffect, useRef } from 'react'
import type { MouseEventHandler } from 'react'
// import Styles from '../styled/index.module.css'
import '../styled/select.scss'

type Option = {
  title: string
  value: string
}
type OptionProps = {
  option: Option
  onClick: (value: Option['value']) => void
}
const OptionEl = (props: OptionProps) => {
  const {
    option: { value, title },
    onClick,
  } = props
  const optionRef = useRef<HTMLLIElement>(null)

  const handleClick =
    (clickedValue: Option['value']): MouseEventHandler<HTMLLIElement> =>
    () => {
      onClick(clickedValue)
    }

  useEffect(() => {
    const option = optionRef.current
    if (!option) return
    const handleEnterKeyDown = (event: KeyboardEvent) => {
      if (document.activeElement === option && event.key === 'Enter') {
        onClick(value)
      }
    }

    option.addEventListener('keydown', handleEnterKeyDown)
    return () => {
      option.removeEventListener('keydown', handleEnterKeyDown)
    }
  }, [value, onClick])

  return (
    <li
      className='option'
      value={value}
      onClick={handleClick(value)}
      tabIndex={0}
      data-testid={`select-option-${value}`}
      ref={optionRef}
    >
      {title}
    </li>
  )
}

type SelectProps = {
  selected: Option | null
  options: Option[]
  placeholder?: string
  valueSelect: string
  setValueSelect(valueSelect: string): void
  mode?: 'rows' | 'cells'
  status?: 'default' | 'invalid'
  onChange?: (selected: Option['value']) => void
  onClose?: () => void
}

const Select = (props: SelectProps) => {
  const {
    mode = 'rows',
    options,
    placeholder,
    valueSelect,
    setValueSelect,
    status = 'default',
    selected,
    onChange,
    onClose,
  } = props
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const placeholderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const { target } = event
      if (target instanceof Node && !rootRef.current?.contains(target)) {
        isOpen && onClose?.()
        setIsOpen(false)
      }
    }

    window.addEventListener('click', handleClick)

    return () => {
      window.removeEventListener('click', handleClick)
    }
  }, [onClose])

  useEffect(() => {
    const placeholderEl = placeholderRef.current
    if (!placeholderEl) return

    const handleEnterKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        setIsOpen((prev) => !prev)
      }
    }
    placeholderEl.addEventListener('keydown', handleEnterKeyDown)

    return () => {
      placeholderEl.removeEventListener('keydown', handleEnterKeyDown)
    }
  }, [])

  const handleOptionClick = (value: Option['value']) => {
    setIsOpen(false)
    onChange?.(value)
    console.log(value)
    if (value === '01') {
      setValueSelect('Выполнена')
    } else if (value === '02') {
      setValueSelect('На паузе')
    } else setValueSelect('В работе')
  }
  const handlePlaceHolderClick: MouseEventHandler<HTMLDivElement> = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <div
      className='selectWrapper'
      ref={rootRef}
      data-is-active={isOpen}
      data-mode={mode}
      data-testid='selectWrapper'
    >
      <div className='arrow'>
        <svg
          width='9'
          height='6'
          viewBox='0 0 9 6'
          fill='currentColor'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M4.5 5.5L9 0.5H0L4.5 5.5Z'
            fill='currentColor'
            fill-opacity='0.6'
          />
        </svg>
      </div>
      <div
        className={
          valueSelect === 'Выполнена'
            ? 'placeholder'
            : valueSelect === 'В работе'
            ? 'placeholder placeholder-working'
            : 'placeholder placeholder-pause'
        }
        data-status={status}
        data-selected={!!selected?.value}
        onClick={handlePlaceHolderClick}
        role='button'
        tabIndex={0}
        ref={placeholderRef}
      >
        {selected?.title || placeholder}
      </div>
      {isOpen && (
        <ul className='select' data-testid='selectDropdown'>
          {options.map((option) => (
            <OptionEl
              key={option.value}
              option={option}
              onClick={handleOptionClick}
            />
          ))}
        </ul>
      )}
    </div>
  )
}

export default Select
