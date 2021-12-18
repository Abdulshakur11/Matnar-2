import "./Home.scss"


//images
import HeroVideo from "../../Assets/video/matnar.mp4"
import LogoHero from "../../Assets/image/matnar-hero.png"

function Home() {

    return (
        <>
            
            <div className="hero-section__wrapper">
                <video className="video-section" autoPlay loop muted  src={HeroVideo}></video>
                <div className="hero-section">
                    <div className="hero-image__wrap">
                        <img className="hero-logo" src={LogoHero} alt="logo" />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home;