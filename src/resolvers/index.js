const { Query } = require("./Query");
const { Mutation } = require("./Mutation");
const { Recipe } = require("./Recipe.js");
const { Ingredient } = require("./Ingredient");

const resolvers = {
  Query,
  Mutation,
  Recipe,
  Ingredient,
};

module.exports = resolvers;
