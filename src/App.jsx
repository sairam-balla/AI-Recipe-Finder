import { useState } from "react";
import { chatSession } from "./components/service/aiModel";
import ItemCard from "./components/custom/ItemCard";
import InputItem from "./components/custom/InputItem";
import { AIPrompt } from "./components/service/aiModel";
import Recipes from "./components/custom/Recipes";
import { Atom } from "react-loading-indicators";

function App() {
  const [Ingredients, setIngredients] = useState([]);
  const [recipes, setRecipes] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const onAddIngredients = (value) => {
    !Ingredients.includes(value) && setIngredients((prev) => [...prev, value]);
  };

  const onCloseItem = (name) => {
    setIngredients((prev) => prev.filter((item) => item !== name));
  };

  const searchRecipes = async () => {
    setIsLoading(true);

    const FinalAIPrompt = AIPrompt.replace("{Ingredients}", [...Ingredients]);

    const result = await chatSession.sendMessage(FinalAIPrompt);
    const responseRecipes = result?.response?.text();
    setRecipes(await JSON.parse(responseRecipes).recipes);
    setIsLoading(false);
  };
  return (
    <div className="flex flex-col  min-h-screen items-center gap-4 p-4 pt-10 bg-gradient-to-r from-slate-900 to-slate-700">
      <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mt-6 bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 text-transparent bg-clip-text">
        AI Recipe Finder
      </h1>
      <p className="text-white mb-6 text-center text-sm md:text-md lg:text-lg">
        Add Ingredients and click on the find recipe to generate Recipes
      </p>
      <InputItem
        onAddIngredients={onAddIngredients}
        isFindBtnShow={Ingredients.length !== 0}
        searchRecipes={searchRecipes}
      />

      <ul className="flex">
        {Ingredients &&
          Ingredients.map((each) => {
            return (
              <ItemCard key={each} onCloseItem={onCloseItem} name={each} />
            );
          })}
      </ul>

      {isLoading && (
        <div className="m-8">
          <Atom color="#74ffec" size="medium" />
        </div>
      )}
      {recipes && !isLoading && <Recipes recipes={recipes} />}
    </div>
  );
}

export default App;
