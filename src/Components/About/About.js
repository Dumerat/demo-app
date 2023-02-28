import './about.css'
import Collapse from '../Collapse/Collapse'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Banner from '../Banner/Banner'
import {AboutData} from '../Data/AboutData'


export default function About() {

    return (
        <>
            <Header/>
            <Banner/>
            <main className='about'>
                {AboutData.map((data) => {
                    return (
                        <div className='about-collapse' key={data.id}>
                            <Collapse title={data.title} content={data.content}/>
                        </div>
                    )}
                )}
            </main>
            <Footer/>
        </>
)}