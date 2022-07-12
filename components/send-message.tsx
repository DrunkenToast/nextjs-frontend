import styles from '../styles/SendMessage.module.css';

const SendMessage = () => {
  return (
    <div className={styles.container}>
      <input type='text' className={styles.input} 
      maxLength={32} placeholder="Send message (max. 32)"
        name="message" id="message"/>
      <input type="submit" className={styles.button} value="Send"/>
    </div>
  )
}

export default SendMessage;
