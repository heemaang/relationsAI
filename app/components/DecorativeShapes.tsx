'use client'

import { motion } from 'framer-motion'
import styles from './DecorativeShapes.module.css'

export default function DecorativeShapes() {
  // Animation variants for floating/momentum effect
  const floatingAnimation = {
    y: [0, -30, 0],
    x: [0, 15, 0],
    scale: [1, 1.05, 1],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }

  const floatingAnimation2 = {
    y: [0, -40, 0],
    x: [0, 0, 0],
    scale: [1, 1.08, 1],
    transition: {
      duration: 7,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 0.5
    }
  }

  const floatingAnimation3 = {
    y: [0, -35, 0],
    x: [0, 25, 0],
    scale: [1, 1.06, 1],
    transition: {
      duration: 6.5,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 1
    }
  }

  return (
    <div className={styles.shapesContainer}>
      <motion.div 
        className={styles.shape} 
        style={{ background: '#FF29E5' }}
        animate={floatingAnimation}
        initial={{ y: 0, x: 0, scale: 1 }}
      />
      <motion.div 
        className={styles.shape} 
        style={{ background: '#FACB12' }}
        animate={floatingAnimation2}
        initial={{ y: 0, x: 0, scale: 1 }}
      />
      <motion.div 
        className={styles.shape} 
        style={{ background: '#4348DC' }}
        animate={floatingAnimation3}
        initial={{ y: 0, x: 0, scale: 1 }}
      />
    </div>
  )
}
