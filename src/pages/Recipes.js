import PreviousSearches from "../components/PreviousSearches"
import RecipeCard from "../components/RecipeCard"

export default function Recipes(){
    const recipes = [
        {
            title: "Chicken Pan Pizza",
            image: "/img/gallery/img_1.jpg",
            desc:" Crispy, soft crust, with tomato basil pizza sauce, topped with favorite toppings and sprinkled with generous amount of mozzarella cheese.",
            authorImg: "/img/top-chiefs/img_1.jpg",
        }, 
        {
            title: "Spaghetti and Meatballs",
            image: "/img/gallery/img_4.jpg",
            desc:"Spaghetti and meatballs is an Italian-American pasta dish consisting of spaghetti, tomato sauce, and meatballs.  .",
            authorImg: "/img/top-chiefs/img_2.jpg",
        },
        {
            title: "Sandwich American",
            image: "/img/gallery/img_3.avif",
            desc:" coupez les en rondelles. Faites les cuire à la poêle dans du beurre jusqu’à ce qu’elles deviennent tendres et dorées.  ",
            authorImg: "/img/top-chiefs/img_3.webp",
        },
        {
            title: "Japanese Sushi",
            image: "/img/gallery/img_10.jpg",
            desc:"The chef places neta on a bed of rice and then tightly rolls it up with a bamboo mat to produce the distinctive shape.  ",
            authorImg: "/img/top-chiefs/img_5.webp",
        },
        {
            title: " Miso à la viande",
            image: "/img/gallery/img_9.jpg",
            desc:"400 g de viande chevaline en un seul morceau (macreuse ou jumeau à bifteck, poire, bavette d’aloyau, onglet…) ",
            authorImg: "/img/top-chiefs/img_6.webp",
        },
        {
            title: "Salad Japanese",
            image: "/img/gallery/img_8.jpg",
            desc:"is a classic Japanese dressing used in many salad recipes. Sesame seeds are gently toasted in a frying pan until fragrant,",
            authorImg: "/img/top-chiefs/img_4.jpg",
        }, 
        {
            title: "Grilled chicken",
            image: "/img/gallery/img_7.jpg",
            desc:"Commencez par parer le poulet, autrement dit de découper les excédents de peau au niveau du cou et du croupion.  ",
            authorImg: "/img/top-chiefs/img_2.jpg",
        },
        {
            title: "Mutton Biryani",
            image: "/img/gallery/img_6.jpg",
            desc:"Begin with washing the mutton pieces and drain the excess water. Make sure you squeeze out the excess water . ",
            authorImg: "/img/top-chiefs/img_3.webp",
        },
        {
            title: "American Cheese Burger",
            image: "/img/gallery/img_5.jpg",
            desc:"The better the beef, the better the flavour, but I would never turn my nose up at a burger made with everyday supermarket beef.  ",
            authorImg: "/img/top-chiefs/img_5.webp",
        },
        {
            title: "Spaghetti and Meatballs",
            image: "/img/gallery/img_4.jpg",
            desc:"Spaghetti and meatballs is an Italian-American pasta dish consisting of spaghetti, tomato sauce, and meatballs. ",
            authorImg: "/img/top-chiefs/img_6.webp",
        },
        {
            title: "Fruit De Mer",
            image: "/img/gallery/img_11.avif",
            desc:"Dans un premier temps, prenez le temps de brosser les carapaces de vos crustacés avant de les cuisiner, et passez-les sous l’eau fraîche. ",
            authorImg: "/img/top-chiefs/img_3.webp",
        },
        {
            title: "Chicken Salad On Spaghetti",
            image: "/img/gallery/img_2.webp",
            desc:"In a large pot of salted boiling water, cook fusilli according to package directions until al dente. Drain and transfer to large bowl. ",
            authorImg: "/img/top-chiefs/img_5.webp",
        }
    ].sort(() => Math.random() - 0.5)

    return (
        <div>
            <PreviousSearches />
            <div className="recipes-container">
                {/* <RecipeCard /> */}
                {recipes.map((recipe, index) => (
                    <RecipeCard key={index} recipe={recipe} />
                ))}
            </div>
        </div>
    )
}
