import CustomImage from "./CustomImage"

export default function HeroSection(){
    const images = [
        "/img/gallery/img_1.jpg",
        "/img/gallery/img_2.webp",
        "/img/gallery/img_3.avif",
        "/img/gallery/img_4.jpg",
        "/img/gallery/img_5.jpg",
        "/img/gallery/img_6.jpg",
        "/img/gallery/img_7.jpg",
        "/img/gallery/img_8.jpg",
        "/img/gallery/img_9.jpg"
    ]
    return(
        <div className="section hero"> 
         <div className="col typography"> 
             <h1 className="title"> What Are We About</h1>
             <p className="info">FoodHub is a place where you can please your soul and tummy with delicious food recepies of all cuisine. And our service is absolutely free. So start exploring now.</p>
             <a href="./recipes"><button className="btn">Explore Now</button></a>
         </div>
         <div className="col gallery">
                { images.map((src, index) => (
                    <CustomImage key={index} imgSrc={src} pt={"90%"} />
                )) }
            </div>
        </div>
    )
}