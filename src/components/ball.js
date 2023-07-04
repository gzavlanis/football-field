import React, { useEffect } from 'react'
import Lottie from 'lottie-web'
import ball from '../lotties/soccer-ball.json'

export default function Ball() {
  useEffect(() => {
    Lottie.loadAnimation({
      container: document.querySelector('#soccer-ball'), // the dom element
      animationData: ball,
      renderer: "svg",
      autoplay: true,

      rendererSettings: {
        preserveAspectRatio: "xMinYMin slice",
      }
    })
  }, [])

  return <div style = {{width: "50px", height: "50px"}} id="soccer-ball" />
}
