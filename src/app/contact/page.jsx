import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
              src="/contact.png"
              alt=""
              fill={true}
              className={styles.image}
          />
        </div>
        <form className={styles.form}></form>
      </div>
    </div>
  )
}

export default Contact
