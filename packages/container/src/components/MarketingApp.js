import React, { useRef, useEffect } from 'react'
import { mount } from 'marketing/MarketingApp'


export default () => {
  const elRef = useRef(null)

  useEffect(() => {
    mount(elRef.current)
  })
  return <div ref={elRef} />
}