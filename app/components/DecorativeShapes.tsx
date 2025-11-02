'use client'

import { useSpring, animated, to } from '@react-spring/web'
import { useState, useEffect } from 'react'
import styles from './DecorativeShapes.module.css'

export default function DecorativeShapes() {
  const [isHoveringFirst, setIsHoveringFirst] = useState(false)
  const [isHoveringThird, setIsHoveringThird] = useState(false)

  // Floating animation for pink ellipse with hover interaction
  const [pinkFloating, setPinkFloating] = useState({ y: 0, x: 0, scale: 1 })
  useEffect(() => {
    let frame = 0
    const animate = () => {
      frame += 0.02
      const y = Math.sin(frame) * 30
      let baseX = 0
      if (isHoveringThird) {
        baseX = 120 // Move toward blue
      } else {
        // Natural momentum: move closer (right) then back
        baseX = Math.sin(frame * 0.5) * 60 + 15
      }
      const scale = 1 + Math.sin(frame) * 0.05
      setPinkFloating({ y, x: baseX, scale })
      requestAnimationFrame(animate)
    }
    animate()
  }, [isHoveringThird])

  const pinkSpring = useSpring({
    ...pinkFloating,
    config: { tension: 50, friction: 25 }
  })

  // Floating animation for yellow ellipse with hover interaction
  const [yellowFloating, setYellowFloating] = useState({ y: 0, x: 0, scale: 1 })
  useEffect(() => {
    let frame = 0.5
    const animate = () => {
      frame += 0.015
      const y = Math.sin(frame) * 40
      const scale = 1 + Math.sin(frame) * 0.08
      let baseX = 0
      if (isHoveringFirst) {
        baseX = -120 // Move toward pink
      } else if (isHoveringThird) {
        baseX = 180 // Move toward blue
      } else {
        // Natural momentum: stays centered but can have slight movement
        baseX = 0
      }
      setYellowFloating({ y, x: baseX, scale })
      requestAnimationFrame(animate)
    }
    animate()
  }, [isHoveringFirst, isHoveringThird])

  const yellowSpring = useSpring({
    ...yellowFloating,
    config: { tension: 40, friction: 25 }
  })

  // Floating animation for blue ellipse with hover interaction
  const [blueFloating, setBlueFloating] = useState({ y: 0, x: 0, scale: 1 })
  useEffect(() => {
    let frame = 1
    const animate = () => {
      frame += 0.018
      const y = Math.sin(frame) * 35
      const scale = 1 + Math.sin(frame) * 0.06
      let baseX = 0
      if (isHoveringFirst) {
        baseX = -180 // Move toward pink
      } else if (isHoveringThird) {
        baseX = 0
      } else {
        // Natural momentum: move closer (left) then back
        baseX = -Math.sin(frame * 0.5) * 60 - 15
      }
      setBlueFloating({ y, x: baseX, scale })
      requestAnimationFrame(animate)
    }
    animate()
  }, [isHoveringFirst, isHoveringThird])

  const blueSpring = useSpring({
    ...blueFloating,
    config: { tension: 40, friction: 25 }
  })

  return (
    <div className={styles.shapesContainer}>
      <animated.div 
        className={styles.shape} 
        style={{ 
          background: '#FF29E5',
          transform: to([pinkSpring.x, pinkSpring.y, pinkSpring.scale], (x, y, scale) => 
            `translate(${x}px, ${y}px) scale(${scale})`
          )
        }}
        onMouseEnter={() => setIsHoveringFirst(true)}
        onMouseLeave={() => setIsHoveringFirst(false)}
      />
      <animated.div 
        className={styles.shape} 
        style={{ 
          background: '#FACB12',
          transform: to([yellowSpring.x, yellowSpring.y, yellowSpring.scale], (x, y, scale) => 
            `translate(${x}px, ${y}px) scale(${scale})`
          )
        }}
      />
      <animated.div 
        className={styles.shape} 
        style={{ 
          background: '#4348DC',
          transform: to([blueSpring.x, blueSpring.y, blueSpring.scale], (x, y, scale) => 
            `translate(${x}px, ${y}px) scale(${scale})`
          )
        }}
        onMouseEnter={() => setIsHoveringThird(true)}
        onMouseLeave={() => setIsHoveringThird(false)}
      />
    </div>
  )
}
