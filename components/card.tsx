interface Card {
  data: string,
  description: string,
}

const Card = ({data, description}: Card) => {
  return (
    <div className="w-1/2 p-5">
        <div className='bg-secondary-500 flex flex-col justify-between
        aspect-square rounded-3xl text-white p-3 shadow-2xl'>
          <h2 className="text-right text-3xl font-bold">{data}</h2>
          <span>{description}</span>
        </div>
    </div>
  )
}

export default Card;
