import {recipes} from './../data/recipes.js'


const displayRecipes = () => {
    const section = document.querySelector('.section-recipes');
    recipes.forEach((recipe) => {
        const card = document.createElement('div')
        card.classList.add('card')
        card.classList.add('my-3')

        const cardContent = `
                <img src="./assets/img/img-card.png" alt="recipes" class="card-img-top">
                <div class="card-body bg-light">
                    <div class="body-card__heading row">
                        <div class="col-9">
                            <h5 class="card__title h2 fw-light">${recipe.name}</h5>
                        </div>
                        <div class="col-3">
                            <div class="card-duration fw-bold fs-3 d-flex align-content-center justify-content-evenly"><i class="bi bi-clock"></i><p>${recipe.time} min</p></div>
                        </div>
                    </div>
                    <div class="body-card__content row">
                        <div class="col">
                            <ul class="body-card__ingredientsList list-unstyled text-danger">
                                <li class="ingredient"><span class="fw-bold">Lait de coco:</span> 400ml</li>
                                <li class="ingredient"><span class="fw-bold">Jus de citron:</span> 2</li>
                                <li class="ingredient"><span class="fw-bold">Crème de coco:</span> 4 cuillères</li>
                                <li class="ingredient"><span class="fw-bold">Sucre:</span> 20g</li>
                                <li class="ingredient"><span class="fw-bold">Glaçons:</span> 2</li>
                            </ul>
                        </div>
                        <div class="col">
                            <p class="recipe">
                                ${recipe.description}
                            </p>
                        </div>
                    </div>
                </div>`

        card.innerHTML = cardContent;
        section.appendChild(card)
    })
}

displayRecipes()