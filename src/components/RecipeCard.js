import CustomImage from "./CustomImage"

export default function RecipeCard({recipe}){
    return (
        <div className="recipe-card">
            <CustomImage imgSrc={recipe.image} pt="65%"/>
            <div className="recipe-card-info">
                <img className="auther-img" src={recipe.authorImg} alt=""/>
                <p className="recipe-title">{recipe.title}</p>
                <p className="recipe-desc">{recipe.desc}</p>
                <a className="view-btn" href="#!">VIEW RECIPE</a>
            </div>
        </div>
    )
}
