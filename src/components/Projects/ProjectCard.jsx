import { useState } from 'react'
import { motion } from 'framer-motion'
import styles from './ProjectCard.module.css'
import ImageLightbox from './ImageLightbox'

function ProjectCard({ project }) {
  const [lightboxOpen, setLightboxOpen] = useState(false)

  return (
    <motion.article
      className={styles.card}
      whileHover={{ y: -4 }}
      transition={{ type: 'tween', duration: 0.2 }}
    >
      <div
        className={styles.imageWrapper}
        onClick={() => setLightboxOpen(true)}
        style={{ cursor: 'pointer' }}
      >
        <img src={project.image} alt={project.title} className={styles.image} />
      </div>
      <ImageLightbox
        src={project.image}
        alt={project.title}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
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
      </div>
    </motion.article>
  )
}

export default ProjectCard
