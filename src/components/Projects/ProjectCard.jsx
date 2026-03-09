import { motion } from 'framer-motion'
import styles from './ProjectCard.module.css'

function ProjectCard({ project }) {
  return (
    <motion.article
      className={styles.card}
      whileHover={{ y: -4 }}
      transition={{ type: 'tween', duration: 0.2 }}
    >
      <div className={styles.imageWrapper}>
        <img src={project.image} alt={project.title} className={styles.image} />
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
        <div className={styles.tech}>
          {project.tech.map((t) => (
            <span key={t} className={styles.tag}>
              {t}
            </span>
          ))}
        </div>
        <div className={styles.links}>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkBtn}
          >
            GitHub
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkBtn}
          >
            Live Demo
          </a>
        </div>
      </div>
    </motion.article>
  )
}

export default ProjectCard
