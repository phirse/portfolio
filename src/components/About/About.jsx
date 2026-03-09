import { motion } from 'framer-motion'
import styles from './About.module.css'

const skills = [
  'JavaScript',
  'React',
  'Node.js',
  'Python',
  'HTML & CSS',
  'Git',
  'REST APIs',
  'MongoDB',
  'PostgreSQL',
  'Docker',
  'Figma',
  'TypeScript',
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

function About() {
  return (
    <section id="about" className={`${styles.about} section`}>
      <motion.h2
        className="section-title"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      <div className={styles.grid}>
        <motion.div
          className={styles.bio}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p>
            I'm a passionate full-stack developer with a love for building
            clean, user-friendly applications. With experience across the
            entire development stack, I enjoy turning complex problems into
            simple, elegant solutions.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies,
            contributing to open-source projects, or sharing knowledge with
            the developer community.
          </p>
        </motion.div>

        <motion.div
          className={styles.skillsWrapper}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className={styles.skillsTitle}>Skills & Technologies</h3>
          <div className={styles.skills}>
            {skills.map((skill) => (
              <span key={skill} className={styles.chip}>
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
