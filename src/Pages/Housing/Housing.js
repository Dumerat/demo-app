import './housing.css'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Data from '../../Components/Data/Data'
import Carrousel from '../../Components/Carrousel/Carrousel'
import Collapse from '../../Components/Collapse/Collapse'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { Navigate } from 'react-router-dom';

export default function Housing(){
    const currentImg = useParams().id;
    const data = Data.filter(item => item.id === currentImg);
    
    //insère les images dans le state
    const [sliderImage, setSliderImage] = useState([]);
    useEffect(() => { 
        const data = Data.filter(item => item.id === currentImg);
        if(data[0]){
            setSliderImage(data[0].pictures);
        }
    },[currentImg]);

    if(data[0] === undefined) { return <Navigate to="*"/> }
    const hostName = data[0].host.name.split(' ')

    //gestion de la note d'une location
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if (i <= data[0].rating) {
        stars.push(<img key={i} src="/images/red-star.svg" className="star-rating" alt='red star'></img>);
        } else {
        stars.push(<img key={i} src="/images/white-star.svg" className="star-rating" alt='grey star'></img>);
        }
    }

    return(
        <>
            <Header/>
            <Carrousel sliderImage={sliderImage}/>
            <main className='housing-content'>
                <div className='housing-first-container'>
                    <h1 className='housing-title'>{data[0].title}</h1>
                    <p className='housing-desc'>{data[0].location}</p>
                    <div className='housing-tag-container'>
                        {data[0].tags.map((tag, index) => {
                            return(
                                <span key={index} className='housing-tag'>{tag}</span>
                                )
                            })}
                    </div>
                </div>
                <div className='housing-second-container'>
                    <div className='housing-host'>
                        <p className='host-name'>{hostName[0]}<br/>{hostName[1]}</p>
                        <img className='host-img' src={data[0].host.picture} alt="host"/>
                    </div>
                    <div className='housing-rating'>{stars}</div>
                </div>
            </main>
                <div className='collapse-container'>
                    <div className='collapse-item'>
                        <Collapse title="Description" content={data[0].description} />
                    </div>
                    <div className='collapse-item'>
                        <Collapse title="Équipements" content={data[0].equipments} />
                    </div>
                </div>
            <Footer/>
        </>
    );
}