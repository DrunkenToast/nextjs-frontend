
import styles from '../styles/LedSwitch.module.css';

const LedSwitch = () => {
  return (
    <div className={styles.container}>
      <button onClick={() => switchLed(false)} className={`${styles['button']} ${styles['off']}`}>LED OFF</button>
      <button onClick={() => switchLed(true)} className={`${styles['button']} ${styles['on']}`}>LED ON</button>
    </div>
  )
}

function switchLed(state: boolean) {
    console.log(process.env.NEXT_PUBLIC_API_HOST, state);
}

export default LedSwitch;
