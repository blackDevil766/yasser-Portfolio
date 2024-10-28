import React from "react";

const portfolioImgs = ({
    development: "https://rainbowit.net/html/inbio/assets/images/portfolio/portfolio-01.jpg",
    application: "https://rainbowit.net/html/inbio/assets/images/portfolio/portfolio-02.jpg",
    photoShop: "https://rainbowit.net/html/inbio/assets/images/portfolio/portfolio-03.jpg",
})


function CardCreator(props) {

    // const [isHovered, setIsHovered] = useState(false);
 
    // const handleMouseEnter = () => {
    //   setIsHovered(true);
    // //   isHovered = "autoPlay"
    // };
   
    // const handleMouseLeave = () => {
    //   setIsHovered(false);
    // //   isHovered = ""

    // };
   
    // const Mouseoverit = isHovered ? 'autoPlay' : '';



    return (
        <div data-aos="fade-up" data-aos-duration={props.time} onClick={props.show}  className="portfolio-container2">
            
            <a id={props.gameID}  className="Portfo-img" href={props.link} >
                {/* <img id="portfolio-img" className="imgHover" src={props.img} alt="" /> */}
                <video  id="portfolio-img" className="vid imgHover"   onMouseOver={event => event.target.play()} onMouseOut={event => event.target.pause()}  muted loop  >
                        <source  autoPlay type="video/mp4"  src={props.img} />
                </video>
            </a>
           
            
        </div>
    )
}

export default CardCreator;
export { portfolioImgs };