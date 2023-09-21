import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  useGetFavoritesQuery,
  useGetRecipeByIdQuery,
  useFavoritesMutation,
  useDeleteFavoritesMutation,
} from "./app/apiSlice";

const FavoritesButton = () => {
  const [favorite, setFavorite] = useState(null);
  const { data: favorites } = useGetFavoritesQuery();
  const [addFavorite] = useFavoritesMutation();
  const [deleteFavorite] = useDeleteFavoritesMutation();
  const { recipeId } = useParams();
  const { data: recipe } = useGetRecipeByIdQuery(recipeId);

  useEffect(() => {
    if (favorites) {
      setFavorite(
        favorites.find((favorite) => favorite.recipe_id === +recipeId) || null
      );
    }
  }, [favorites, recipeId]);
  return (
    <>
      {!favorite && (
        <button
          className="btn btn-success"
          onClick={() =>
            addFavorite({
              recipe_id: recipeId,
              name: recipe.name,
              thumbnail_url: recipe.thumbnail_url,
            })
          }
        >
          Add to Favorites
        </button>
      )}
      {favorite && (
        <button
          className="btn btn-danger"
          onClick={() => deleteFavorite(favorite.id)}
        >
          Remove from Favorites
        </button>
      )}
    </>
  );
};

export default FavoritesButton;
