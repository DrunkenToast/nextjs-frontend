import styles from '../styles/SendMessage.module.css';

const SendMessage = () => {
  return (
    <div className={styles.container}>
      <input type='text' className={styles.input} placeholder="Send message"
        name="message" id="message"/>
      <button className={styles.button}>{'>'}</button>
    </div>
  )
}

export default SendMessage;