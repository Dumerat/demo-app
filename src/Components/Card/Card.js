import './card.css'
import { Link } from 'react-router-dom';

export default function Card({id, title, image}) {
    return(
        <Link to={`/housing/${id}`} className="card-all">
            <img src={image} alt={title} />
            <h3>{title}</h3>
        </Link>
    )
}