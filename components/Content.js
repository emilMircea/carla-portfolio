import React from 'react'

const Content = (props) => {
  return (
    <div className="Content" style={{
      margin: '3rem',
      padding: '1rem 1rem 0 1rem',
      lineHeight: '2rem'
    }}>
      {props.children}
    </div>
  )
}

export default Content
