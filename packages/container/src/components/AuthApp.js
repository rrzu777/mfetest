import React, { useRef, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { mount } from 'auth/AuthApp'


export default ({ onSignIn }) => {
  const elRef = useRef(null)
  const history = useHistory()

  useEffect(() => {
    const { pathname } = history.location
    const authProps = {
      initialPath: pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        if (pathname !== nextPathname) {
          history.push(nextPathname)
        }
      },
      onSignIn
    }
    const { onParentNavigate } = mount(elRef.current, authProps)
    history.listen(onParentNavigate)
  })
  return <div ref={elRef} />
}