# RecipeHunt
* Sophia Tony-Egbuniwe
* Shashwath Nayak
* Javier Hernandez
* David Ra

RecipeHunt - Add. Search. Make.

# Design
-   [API Design](docs/api.md)
-   [Data Models](docs/data-model.md)
-   [GHI](docs/ghi.md)
-   [Integrations](docs/integrations.md)

# Intended Market

-   We are targeting an audience of consumers who are looking for a new perspective on cooking recipes or interest in finding something unfamiliar to try. We are unique in our targeted recipe search function, as you can easily find those recipes that already include ingredients found in your pantry. Foodies and casual chefs alike are able to create, share, and explore new recipes to their taste buds content!

# Functionality

-   Account creation
-   About page with a general welcome to the application

*   Search recipes page where a list of recipes are fetched from Tasty API.
    -   Surprise me button onclick randomizes the fetched recipes
    -   Search function to sort by name
    -   Sort by function that allows users to sort alphabetically or by their ingredients list
*   Recipe details page
    -   Where users can see the information for a given recipe
    -   Users can create a favorites list to "save" their favorite recipes.
    -   Users can remove a favorited/saved recipe.
    -   Color coded ingredients. Red = Not in users ingredients list. Green = In users ingredients list.
    -   Review/Rating system
*   Favorites Page
    -   List style page indicating the current logged in users favorited recipes with picture and link.
*   Account Page
    -   Automatic carousel displaying favorited recipes
    -   Profile section displays current logged in users profile information
    -   Ingredients section where the user inputs their fridges content of ingredients to later sort by recipes in their ingredients collection
    -   Ability to update and delete ingredients

# Project Initialization

1. Clone the repository down to your local machine
2. CD into the new project directory
3. Create a `.env` file, set the `REACT_APP_API_HOST=http://localhost:8000`,
   set the `SIGNING_KEY={32hexadecimal value}`
4. Get an API key from TastyAPI (https://rapidapi.com/apidojo/api/tasty)
5. Create an keys.py under the `api` folder, set it as `TASTY_API_KEY = {tasty api key}`
6. Run `docker volume create recipehunt`
7. Run `docker compose build`
8. Run `docker compose up`
9. Enjoy using recipehunt!
