
    const ingredients = {
        upper_Bun: 1,
        Lettuce: 10,
        Patty: 10,
        Tomato: 10,
        Onion: 10,
        middle_Bun :10,
        Pickles: 10,
        Patty2: 10,
        Cheese: 10,
        lower_Bun: 1
};

let burger = {};

const addIngredient = (ingredient) => {
    if (ingredients[ingredient] > 0) {
    ingredients[ingredient]--;
    burger[ingredient] = (burger[ingredient] || 0) + 1;
    updateBurger();
    }
};

const removeIngredient = (ingredient) => {
    if (burger[ingredient] > 0) {
    ingredients[ingredient]++;
    burger[ingredient]--;
    }
};

const resetBurger = () => {
    burger = {};
    Object.keys(ingredients).forEach((ingredient) => {
    ingredients[ingredient] = 1;
    updateBurger()
    });
};

const reset_button = document.getElementById("reset-button");
reset_button.addEventListener("click", () => resetBurger());

const ingredientButtons = document.getElementById("ingredients");

Object.keys(ingredients).forEach((ingredient) => {
    const button = document.createElement("button");
    button.className = "ingredient_button"
    button.innerHTML = ingredient;
    button.addEventListener("click", () => addIngredient(ingredient));
    ingredientButtons.appendChild(button);
});

const burgerDiv = document.getElementById("burger");

const updateBurger = () => {
    burgerDiv.innerHTML = "";
    Object.keys(burger).forEach((ingredient) => {
    for (let i = 0; i < burger[ingredient]; i++) {
        const ingredientDiv = document.createElement("div");
        const ingredientImg = document.createElement("img");
        ingredientImg.src = `images/${ingredient}.png`;
        ingredientDiv.appendChild(ingredientImg);
        burgerDiv.appendChild(ingredientDiv);
    }
    });
};


updateBurger();