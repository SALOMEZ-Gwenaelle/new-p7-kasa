import Banner from "../components/Banner";
import bannerImg from '../assets/bannerFullHome.jpg';
import HomeGrid from '../components/HomeGrid'
import Thumb from '../components/Thumb'
import appartments from '../datas/logements.json'

function Home() {

    return (
        <div className="home">
            <Banner picture={bannerImg} text={'Chez vous, partout et ailleurs'} />
            <HomeGrid>
                {appartments.map((appart, index) => 
                    <Thumb key={index} appart={appart}/>
                )}
            </HomeGrid>
        </div>

    )
}



export default Home;
