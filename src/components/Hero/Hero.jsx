import { motion } from 'framer-motion'
import styles from './Hero.module.css'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <motion.div
        className={styles.content}
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p className={styles.greeting} variants={fadeUp}>
          Hello, I'm
        </motion.p>
        <motion.h1 className={styles.name} variants={fadeUp}>
            Pisute Chen
        </motion.h1>
        <motion.p className={styles.role} variants={fadeUp}>
          Information Communication and Technology Student
        </motion.p>
        <motion.p className={styles.tagline} variants={fadeUp}>
          I passionate about web development. I spend my free time building websites to practice my coding skills and continuously improve myself.
        </motion.p>
        <motion.div className={styles.cta} variants={fadeUp}>
          <a href="#projects" className={styles.btnPrimary}>
            View My Works
          </a>
          <a href="#contact" className={styles.btnSecondary}>
            Get in Touch
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
