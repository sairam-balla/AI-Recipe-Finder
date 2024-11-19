/* eslint-disable react/prop-types */
const Recipes = ({ recipes }) => {
  return (
    <div>
      <h2 className="text-xl md:text-2xl lg:text-3xl text-center font-bold  text-white">
        Recipes:
      </h2>
      <ul className="flex flex-col items-center gap-4">
        {recipes.map((each, index) => (
          <li
            key={index}
            className="border-2 w-4/5 m-4  flex flex-col gap-4 bg-gray-200 rounded-lg p-12 "
          >
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">
              {each.recipeName}
            </h3>
            <p className="text-md md:text-lg lg:text-xl">{each.description}</p>

            <ul className="">
              <li>
                <h3 className="text-md md:text-lg lg:text-xl font-semibold">
                  List of Ingredients
                </h3>
              </li>

              {each.ingredients.map((ingredient, index) => (
                <li key={index}>
                  <p className="text-md md:text-lg lg:text-xl">
                    {ingredient.item}-{ingredient.quantity}
                  </p>
                </li>
              ))}
            </ul>

            <ul>
              <li>
                <h3 className="text-md md:text-lg lg:text-xl font-semibold">
                  Cooking Steps
                </h3>
              </li>
              {each.instructions.map((instruction, index) => (
                <li key={index}>
                  <p className="text-md md:text-lg lg:text-xl">
                    <span className="font-semibold">
                      Step-
                      {instruction.step}:
                    </span>{" "}
                    {instruction.description}
                  </p>
                </li>
              ))}
            </ul>
            {each.optionalAdditions && (
              <p className="text-md md:text-lg lg:text-xl">
                <span className="text-md md:text-lg lg:text-xl font-semibold">
                  Optional Additions:{" "}
                </span>
                {each.optionalAdditions}
              </p>
            )}
            <p className="text-md md:text-lg lg:text-xl">
              <span className="text-md md:text-lg lg:text-xl font-semibold">
                Serving Suggestion:{" "}
              </span>
              {each.servingSuggestion}
            </p>
            {/* <p>{JSON.stringify(each)}</p> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recipes;
