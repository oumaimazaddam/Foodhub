import ChiefCard from "./ChiefCard"

export default function ChiefsSection(){
    const chiefs = [
        {
            name: "Juan Carlos",
            img: "/img/top-chiefs/img_1.jpg",
            recipesCount: "10",
            cuisine: "Mexican",
        },
        {
            name: "Louis Gachet",
            img: "/img/top-chiefs/img_7.jpg",
            recipesCount: "25",
            cuisine: "swissra"
        },
        {
            name: "John Doe",
            img: "/img/top-chiefs/img_2.jpg",
            recipesCount: "05",
            cuisine: "Japanese",
        },
        {
            name: "Naoëlle d'Hainaut",
            img: "/img/top-chiefs/img_3.webp",
            recipesCount: "13",
            cuisine: "Italian",
        },
        {
            name: "Chris Brown",
            img: "/img/top-chiefs/img_4.jpg",
            recipesCount: "08",
            cuisine: "American"
        },
        {
            name: "Nadia Santini",
            img: "/img/top-chiefs/img_5.webp",
            recipesCount: "09",
            cuisine: "French"
        },
        {
            name: "Niki Nakayama",
            img: "/img/top-chiefs/img_6.webp",
            recipesCount: "04",
            cuisine: "Indian"
        }
    ]
    return (
        <div className="section chiefs">
            <h1 className="title">Our Top Chiefs</h1>
            <div className="top-chiefs-container">
                {/* <ChiefCard />
                <ChiefCard />
                <ChiefCard />
                <ChiefCard />
                <ChiefCard />
                <ChiefCard /> */}
                { chiefs.map(chief => <ChiefCard key={chief.name} chief={chief} />) }
            </div>
        </div>
    )
}
