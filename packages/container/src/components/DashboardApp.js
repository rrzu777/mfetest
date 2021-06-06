import React, { useRef, useEffect } from 'react'
import { mount } from 'dashboard/DashboardApp'


export default () => {
  const elRef = useRef(null)

  useEffect(() => {
    mount(elRef.current)
  })

  return <div ref={elRef} />
}