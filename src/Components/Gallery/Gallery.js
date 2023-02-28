import './gallery.css'
import Card from '../Card/Card'
import Data from '../Data/Data'

export default function Gallery() {

    return (
        <main className='main-gallery'>
            {Data.map(data => {
                return (
                    <Card key={data.id} id={data.id} title={data.title} image={data.cover}/>
                )
            })}
        </main>
    )
}