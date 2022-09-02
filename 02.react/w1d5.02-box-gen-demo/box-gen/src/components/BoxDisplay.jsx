import React from 'react'

const BoxDisplay = ({boxes}) => {
  return (
    <div className="d-flex flex-wrap justify-content-start align-items-center gap-3">
      {
        boxes.map((box, idx) => {
          return (
            <div
              key={idx}
              style={{
                backgroundColor: box,
                width: '100px',
                height: '100px'
              }}
            >
            </div>
          )
        })
      }
    </div>
  )
}

export default BoxDisplay
