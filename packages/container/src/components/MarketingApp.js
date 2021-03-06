import React, { useRef, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { mount } from 'marketing/MarketingApp'


export default () => {
  const elRef = useRef(null)
  const history = useHistory()

  useEffect(() => {
    const { pathname } = history.location
    const marketingProps = {
      initialPath: pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        if (pathname !== nextPathname) {
          history.push(nextPathname)
        }
      }
    }
    const { onParentNavigate } = mount(elRef.current, marketingProps)
    history.listen(onParentNavigate)
  })
  return <div ref={elRef} />
}