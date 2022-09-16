import React from 'react'
import { Outlet } from 'react-router-dom'

const RecordContext = () => {
  const baseUrl = 'http://localhost:8000/api/records'
  return (
    <fieldset>
      <legend>Record Context</legend>
      <Outlet context={{ baseUrl }} />
    </fieldset>
  )
}

export default RecordContext