import dragon from '../assets/gifs/dragon.gif'
import hello from '../assets/gifs/hello.gif'
import meote from '../assets/gifs/meote.gif'
import walking from '../assets/gifs/walking.gif'

const Hero = () => {
    // Images to be displayed on the hero section as Deck
    const images = [
        { src: dragon, alt: "Dragon", style: { top: "20%", right: "45%" } },
        { src: hello, alt: "Hello", style: { top: "10%", left: "5%", width: "150px" } },
        { src: meote, alt: "Meote", style: { bottom: "5%", left: "15%", width: "250px" } },
        { src: walking, alt: "Walking", style: { bottom: "5%", right: "15%", width: "100px" } },
    ];
    return (
        <section className="hero position-relative">
            <div className='hero-container'>
                {images.map((item, index) => (
                    <img
                        key={index}
                        title={item.alt}
                        className="position-absolute"
                        src={item.src}
                        alt={item.alt}
                        style={item.style}
                    />
                ))}
                <h1 title="Hero Title">Your Favorite Pokemon Are Waiting</h1>
                <p title='Hero Description'>
                    Welcome to the Pokemon Dashboard Plus! 
                    Here, you can explore a collection of your favorite Pokemon. 
                    Add them to your favorites and view detailed information about each Pokemon. 
                    Start your Pokemon journey now!
                </p>
            </div>
        </section>
    );
}

export default Hero