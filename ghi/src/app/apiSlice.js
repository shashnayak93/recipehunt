import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const recipeHuntApi = createApi({
  reducerPath: "recipeHuntApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_HOST,
  }),
  tagTypes: ["Account", "Favorites", "Ingredient", "Recipes", "Ratings"],
  endpoints: (builder) => ({
    getAccount: builder.query({
      query: () => ({
        url: `/token`,
        credentials: "include",
      }),
      transformResponse: (response) => (response ? response.account : null),
      providesTags: ["Account"],
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/token",
        method: "DELETE",
        credentials: "include",
      }),
      invalidatesTags: [
        { type: "Account" },
        { type: "Favorites", id: "mine" },
        { type: "Ingredient", id: "mine" },
      ],
    }),
    signup: builder.mutation({
      query: (body) => ({
        url: `/api/accounts`,
        method: "POST",
        body,
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ["Account", "Favorites", "Ingredient"],
    }),
    login: builder.mutation({
      query: ({ username, password }) => {
        const body = new FormData();
        body.append("username", username);
        body.append("password", password);
        return {
          url: `/token`,
          method: "POST",
          body,
          credentials: "include",
        };
      },
      invalidatesTags: ["Account", "Favorites", "Ingredient"],
    }),
    getIngredientByAccount: builder.query({
      query: () => ({
        url: `/api/ingredients/mine`,
        credentials: "include",
      }),
      providesTags: ["Ingredient"],
      transformResponse: (response) => response.ingredients,
    }),
    createIngredient: builder.mutation({
      query: (body) => ({
        url: `/api/ingredients`,
        method: "POST",
        body,
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ["Ingredient", "Account"],
    }),
    deleteIngredient: builder.mutation({
      query: (ingredient_id) => ({
        url: `/api/ingredients/${ingredient_id}`,
        method: "DELETE",
        credentials: "include",
      }),
      invalidatesTags: ["Ingredient", "Account"],
    }),
    updateIngredient: builder.mutation({
      query: ({ body, ingredient_id }) => ({
        url: `/api/ingredients/${ingredient_id}`,
        body,
        method: "PUT",
        credentials: "include",
      }),
      transformResponse: (response) => response.ingredients,
      invalidatesTags: ["Ingredient", "Account"],
    }),
    getRecipeById: builder.query({
      query: (recipeId) => ({
        url: `/api/tasty-recipes/${recipeId}`,
        credentials: "include",
      }),
    }),
    getRecipes: builder.query({
      query: () => ({
        url: "/api/tasty-recipes",
        credentials: "include",
      }),
      providesTags: ["Recipes"],
      transformResponse: (response) => response.recipes,
    }),
    getFavorites: builder.query({
      query: () => ({
        url: "/api/favorites/mine",
        credentials: "include",
      }),
      transformResponse: (response) => response.favorites,
      providesTags: ["Favorites"],
    }),
    favorites: builder.mutation({
      query: (body) => ({
        url: `/api/favorites`,
        method: "POST",
        body,
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ["Favorites", "Account"],
    }),
    deleteFavorites: builder.mutation({
      query: (favorite_id) => ({
        url: `/api/favorites/${favorite_id}`,
        method: "DELETE",
        credentials: "include",
      }),
      invalidatesTags: ["Favorites", "Account"],
    }),
    getAllRatings: builder.query({
      query: (recipe_id) => ({
        url: `/api/recipes/${recipe_id}/ratings`,
        credentials: "include",
      }),
      transformResponse: (response) => response.ratings,
      providesTags: ["Ratings"],
    }),
    ratings: builder.mutation({
      query: ({ body, recipe_id }) => ({
        url: `/api/recipes/${recipe_id}/ratings`,
        method: "POST",
        body,
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ["Ratings"],
    }),
  }),
});

export const {
  useGetAccountQuery,
  useLogoutMutation,
  useLoginMutation,
  useSignupMutation,
  useGetIngredientByAccountQuery,
  useCreateIngredientMutation,
  useDeleteIngredientMutation,
  useUpdateIngredientMutation,
  useGetRecipeByIdQuery,
  useGetRecipesQuery,
  useGetFavoritesQuery,
  useFavoritesMutation,
  useDeleteFavoritesMutation,
  useRatingsMutation,
  useGetAllRatingsQuery,
} = recipeHuntApi;
