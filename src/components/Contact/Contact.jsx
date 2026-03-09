import { motion } from 'framer-motion'
import styles from './Contact.module.css'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const socials = [
  { label: 'GitHub', url: 'https://github.com' },
  { label: 'LinkedIn', url: 'https://linkedin.com' },
  { label: 'Twitter', url: 'https://twitter.com' },
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
        <form
          className={styles.form}
          action="mailto:hello@example.com"
          method="POST"
          encType="text/plain"
        >
          <div className={styles.field}>
            <label htmlFor="name" className={styles.label}>
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className={styles.input}
              placeholder="Your name"
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className={styles.input}
              placeholder="your@email.com"
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="message" className={styles.label}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className={styles.textarea}
              placeholder="Your message..."
            />
          </div>
          <button type="submit" className={styles.submit}>
            Send Message
          </button>
        </form>

        <div className={styles.info}>
          <h3 className={styles.infoTitle}>Let's connect</h3>
          <p className={styles.infoText}>
            I'm always open to new opportunities and collaborations. Feel free
            to reach out through the form or connect with me on social media.
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
