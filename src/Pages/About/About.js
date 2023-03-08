import './about.css'
import Collapse from '../../Components/Collapse/Collapse'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Banner from '../../Components/Banner/Banner'
import {AboutData} from '../../Components/Data/AboutData'


export default function About() {

    return (
        <>
            <Header/>
            <Banner/>
            <main className='about'>
                {AboutData.map((data) => { //créer les collapses du menu "About"
                    return (
                        <div className='about-collapse' key={data.title}>
                            <Collapse title={data.title} content={data.content}/>
                        </div>
                    )}
                )}
            </main>
            <Footer/>
        </>
)}