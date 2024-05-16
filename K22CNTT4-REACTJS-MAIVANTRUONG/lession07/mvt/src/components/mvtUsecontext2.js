import React, { useContext } from 'react'
import { ThemeContext } from './mvtUsecontext'

export default function mvtUsecontext2() {
    const theme = useContext(ThemeContext);
  return (
    <div className={theme}>
      <h2>mvtUsecontext2</h2>
      <p><b>221090072</b>
      <b>mai văn trường</b>
      <i>cntt4</i></p>
    </div>
  )
}
