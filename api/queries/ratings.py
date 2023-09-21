from pydantic import BaseModel, Field
from queries.client import Queries
from typing import List
from bson.objectid import ObjectId


class RatingIn(BaseModel):
    rating: int = Field(..., ge=1, le=5)
    comments: str


class RatingOut(RatingIn):
    id: str
    account_id: str
    recipe_id: str
    account_first_name: str
    account_last_name: str


class RatingOutWithoutRecipeId(RatingIn):
    id: str
    account_id: str


class Ratings(BaseModel):
    ratings: List[RatingOut]


class RatingRepo(Queries):
    COLLECTION = "rated_recipes"

    def create_rating(
            self,
            account_id: str,
            rating: RatingIn,
            recipe_id: str,
            account_first_name: str,
            account_last_name: str,
    ):
        rating["account_id"] = account_id
        rating["account_first_name"] = account_first_name
        rating["account_last_name"] = account_last_name
        rating["recipe_id"] = recipe_id
        self.collection.insert_one(rating)
        rating["id"] = str(rating["_id"])
        return RatingOut(**rating)

    def update_rating(self, account_id: str, rating: RatingIn, rating_id: str):
        updated_rating = rating
        self.collection.update_one(
            {
                "account_id": account_id,
                "_id": ObjectId(rating_id),
            },
            {"$set": updated_rating}
        )
        updated_rating["id"] = rating_id
        updated_rating["account_id"] = account_id
        return RatingOutWithoutRecipeId(**updated_rating)

    def get_list_ratings_by_account(self, account_id: str):
        results = []
        for rating in self.collection.find({"account_id": account_id}):
            rating["id"] = str(rating["_id"])
            results.append(rating)
        return results

    def get_list_ratings(self, recipe_id: str):
        results = []
        for rating in self.collection.find({"recipe_id": recipe_id}):
            rating["id"] = str(rating["_id"])
            results.append(rating)
        return results
