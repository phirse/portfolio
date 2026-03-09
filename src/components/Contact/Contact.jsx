import { motion } from 'framer-motion'
import styles from './Contact.module.css'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

//{label:'', url:''} format
const socials = [
]

function Contact() {
  return (
    <section id="contact" className={`${styles.contact} section`}>
      <motion.h2
        className="section-title"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Get in Touch
      </motion.h2>

      <motion.div
        className={styles.grid}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className={styles.contactDetails}>
          <div className={styles.contactItem}>
            <span>Email</span>
            <a href="mailto:portncf112st@gmail.com" className={styles.contactLink}>
              portncf112st@gmail.com
            </a>
          </div>
          <div className={styles.contactItem}>
            <span>Phone</span>
            <a href="tel:0970985753" className={styles.contactLink}>
              +66 0970985753
            </a>
          </div>
          <div className={styles.contactItem}>
            <span>Instagram</span>
            <a
              href="https://instagram.com/chxnjh"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactLink}
            >
              @chxnjh
            </a>
          </div>
        </div>

        <div className={styles.info}>
          <h3 className={styles.infoTitle}>Let's connect</h3>
          <p className={styles.infoText}>
            I'm always open to new opportunities and collaborations. Feel free
            to reach out via the details below or connect with me on social media.
          </p>
          <div className={styles.socials}>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact
