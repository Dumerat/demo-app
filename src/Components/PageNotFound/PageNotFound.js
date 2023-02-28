import { Link } from "react-router-dom";
import './pageNotFound.css'
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

export default function PageNotFound() {
    return (
        <div>
            <Header />
            <div className="page-not-found">
                <h1 className="not-found">404</h1>
                <p className='not-found-infos'>Oups! La page que vous recherchez n'existe pas.</p>
                <Link to="/" className="back-not-found">Go Home</Link>
            </div>
            <Footer />
        </div>
    )
}
