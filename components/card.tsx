import styles from '../styles/Card.module.css';

interface Card {
  data: string,
  description: string,
}

const Card = ({data, description}: Card) => {
  return (
    <div className={styles.card}>
      <h2>{data}</h2>
      <span>{description}</span>
    </div>
  )
}

export default Card;