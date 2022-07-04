
import styles from '../styles/LedSwitch.module.css';

const LedSwitch = () => {
  return (
    <div className={styles.container}>
      <button className={`${styles['button']} ${styles['off']}`}>LED OFF</button>
      <button className={`${styles['button']} ${styles['on']}`}>LED ON</button>
    </div>
  )
}

export default LedSwitch;