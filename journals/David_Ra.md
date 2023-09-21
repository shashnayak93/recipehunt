6/26
It was a wild ride today, it felt like I don't really know what I'm doing.
set up the docker yaml for utilizing react and mongoDB
went through the documentation to set up the account creation function for P.gamma and successfully set up the function

6/27
Today was big on progress as we were able to complete parts of the backend and create the get functionality of tastyAPI and SpoonacularAPI.
My team is very tactful with how we approach troubleshooting issues. We were able to make most of the backend CRUD functions work and stopped at the delete function

6/28
Riley's walkthrough of the backend using mongoDB was a tremendous help and we were able to get the all the CRUD functions established for the backend of Recipehunt.
-finished the CRUD functions of the backend
-created ingredient file for routers and queries,
-created the ability to let a user rate a recipe using keys from an API to see as a proof of concept

7/10
Went over previous concepts in FastAPI and looked into how to use/implement modals for react. Did not code in the module 3 project. Spent time recalibrating on things that diminished over the week break.

7/11
We finished the functionality for the login, logout, signin, and signup pages for RecipeHunt. Also built the authentication for user accounts using redux. Created the baseline for the main page and completed the functionality of it.

7/12
We created the Details page for RecipeHunt. Decided on using React Redux to build the frontend. added apiSlice.js, recipeSlice.js, store.js, and RecipeDetails.js. My teammates are truly great. Also found out that spoonacular has two different API keys that somehow work on multiple parts of their website.

7/13
We created the functionality to favorite a recipe and add it to your account page.
Added apiSlice, recipeSlice, searchSlice. Javier and Sophia were able to dice out how to add the "Unfavorite" button on the frontend as well.

7/14
We created the test units for RecipeHunt such as test_create, test_delete, test_get_all_ingredients. Not sure if I fully understand, but I get the notion. We added backend functionality for the TastyAPI to get a single recipe.

7/17
We got a lot done today. The team decided that spoonacular's recipe image quality was subpar and so we replaced all of the recipe endpoints from spoonacular to tastyAPI's endpoints on the frontend. We created a user review form and thinkered with the properties to show the user's name and their posted rating. We also figured how to get the URL links from the TastyAPI so that its images and videos are displayed along with the recipes. It felt very satisfying to see all of the replacement work on the frontend be switched out without much difficulty.

7/18
We added the functionality for adding ingredients to the ProfilePage. We added the delete button and functionality for ingredients which was simple and clean. Then we tried adding the edit button and functionality. There was a lot of difficulty figuring out how to implement a modal form with or without using a seperate file/form to pull ingredients.id from. We consulted Riley about how we should approach it and he recommended without using a modal, but Javier came in clutch with an implementation that uses modals and we were able to replace the ingredient edit functionality we the modal design. Added a route for ingredients.

7/19
We quickly built a surprise me button that randomly selects a recipe using math.random. It was nice. Sophia and Shash tackled the searchpage to sort the recipes on it alphabetically. We experienced some roughness on this part and will consult Riley after lunch. Sophia is the goat once again was able to figure out the issue that we ran into about a <Object> value. We also ran into trouble with sorting the recipe list on the search page using two submit handlers, but opted to just pass a form instead until we find a better way to implement what we wanted.

to do tomorrow:
-sort page my ingredientlist

to do next week:
-css styling for the front end
-stretch goals

what to look at:
-react/jsx methods/hooks
-how to run a submithandler un-asynchronusously
-look back at react forms and pages

7/20
Shash and Sophia lead the charge today by figuring out how to sort recipes through the amount of ingredients a user has selected.

-move signup and login on navbar
-figure out how to do the ingredient ordered search
-add a list for favorites

7/24
-We took a day to reflect and rest up after the practice assessment

-work on the making the website look better with bootstrap and css

7/25
Javier and Sophia added CSS styling to the recipe ratings and comments. I am reminded about how jsx syntax is like sorta convienient with how you implement features onto the frontend portion of the application. The group did really well coordinating what changes we wanted to implement. I feel like I'm not really sure what I'm doing.

7/26
Today we added more CSS and styling into our profile page, the search page. We added a background for the main page but that seems prone for change. I've started to made css for a dark/light mode theme but am struggling to implement it. I'll ask for help later. But to be honest not sure if it will even work.

-add an image url for the backend for the profile page
-move surprise me to right of the recipe list

7/27
We started the day cleaning up our project's code, making sure that unused code was removed and removing console logs from it as well. We adjusted the css for the recipe detail pages and the layout of the recipe carousel. We had some difficulty adjusting the card background but Sophia came to the rescue. Javier and Shash implemented the profile image on the frontend and tune it up to make it look nice. After that, Javier implemented a function to change a profile image on the backend.
