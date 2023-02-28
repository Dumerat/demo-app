import './card.css'
import { Link } from 'react-router-dom';

export default function Card({props}) {
    return(
        <Link to={`/housing/${props.id}`} className="card-all">
            <img src={props.cover} alt={props.title} />
            <h3>{props.title}</h3>
        </Link>
    )
}