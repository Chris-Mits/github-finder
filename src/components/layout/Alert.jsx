import React from 'react'
import {AlertContext} from '../../context'

export const Alert = () => {
  const {alert} = React.useContext(AlertContext)

  return alert !== null && (
    <p className='flex items-start mb-4 space-x-2'>
      {alert.type === 'error' && (
        <svg
          className='w-6 h-6 stroke-current mr-3'
          fill='none'
          viewBox='0 0 24 24'
        > 
          <circle 
            cx='12' 
            cy='12' 
            r='12' 
            fill='#fecdd3'
          />
          <path
            d='M8 8l8 8M16 8l-8 8'
            stroke='#b91c1c'
            strokeWidth='2'
          />
        </svg>
      )}
      <span className="flex-1 text-base font-semibold leading-7 text-white">
        <strong>{alert.message}</strong>
      </span>
    </p>
  )
}