import React from 'react'

export default function TitlePage({title, children}) {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mt-2 pb-2 border-bottom border-1">
        <h2 className='pt-3'>{title}</h2>
        {children}
      </div> 
    </>
  )
}