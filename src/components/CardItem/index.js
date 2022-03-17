import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails

  return (
    <li className={`${className} card-container`}>
      <h1 className="card-title"> {title} </h1>
      <p className="card-description"> {description} </p>
      <img src={imgUrl} className="card-img" alt={title} />
    </li>
  )
}

export default CardItem
