import dragon from '../assets/gifs/dragon.gif'
import hello from '../assets/gifs/hello.gif'
import main from '../assets/gifs/Main.gif'
import meote from '../assets/gifs/meote.gif'
import walking from '../assets/gifs/walking.gif'

const Hero = () => {
    return (
        <div className="hero position-relative">
            {[
                { src: dragon, alt: "Dragon", style: {top:"20%", right:"45%"} },
                { src: hello, alt: "Hello", style: {top:"10%", left:"5%", width: "150px"} },
                // { src: main, alt: "Main", style: {bottom:"25%", right:"5%", width: "200px"} },
                { src: meote, alt: "Meote", style: {bottom:"5%", left:"15%", width: "250px"} },
                { src: walking, alt: "Walking", style: {bottom:"5%", right:"15%", width: "100px"} },
            ].map((item, index) => (
                <img
                    key={index}
                    className="position-absolute"
                    src={item.src}
                    alt={item.alt}
                    style={item.style}
                />
            ))}
            <h1>your favorite pokemon waiting</h1>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor quidem,
                repudiandae amet laborum odit velit quae hic perferleftis ut nostrum
                excepturi corrupti error nisi maiores fugit! Totam distinctio fuga sequi?
            </p>
        </div>
    );
}

export default Hero