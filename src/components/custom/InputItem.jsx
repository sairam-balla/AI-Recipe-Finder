import { useState } from "react";

const items = [
  "Tomato",
  "Potato",
  "Onion",
  "Carrot",
  "Spinach",
  "Cabbage",
  "Cauliflower",
  "Pumpkin",
  "Bottle Gourd",
  "Brinjal",
  "Green Chilli",
  "Coriander",
  "Ginger",
  "Garlic",
  "Ladies Finger",
  "Drumstick",
  "Fenugreek Leaves",
  "Radish",
  "Beetroot",
  "Turnip",
  "Cucumber",
  "Capsicum",
  "Green Peas",
  "Sweet Corn",
  "Bitter Gourd",
  "Snake Gourd",
  "Cluster Beans",
  "Ivy Gourd",
  "Spring Onion",
  "Red Cabbage",
  "Zucchini",
  "Broccoli",
  "Amaranth Leaves",
  "Mustard Leaves",
  "Mint Leaves",
  "Parsley",
  "Celery",
  "Kohlrabi",
  "Jackfruit",
  "Sweet Potato",
  "Raw Banana",
  "Ash Gourd",
  "Elephant Foot Yam",
  "Colocasia Leaves",
  "Mushroom",
  "Leeks",
  "Edamame",
  "Sorrel Leaves",
  "Curry Leaves",
  "Water Spinach",
  "Indian Spinach",
  "Pointed Gourd",
  "Chicken",
  "Mutton",
  "Pork",
  "Beef",
  "Fish",
  "Prawns",
  "Crab",
  "Duck",
  "Quail",
  "Turkey",
  "Goat Meat",
  "Lamb",
  "Squid",
  "Octopus",
  "Lobster",
  "Shrimp",
  "Clams",
  "Scallops",
  "Oysters",
  "Rohu Fish",
  "Hilsa Fish",
  "Tilapia",
  "Salmon",
  "King Fish",
  "Pomfret",
  "Catla",
  "Sardines",
  "Anchovies",
  "Eggs",
  "Chicken Sausages",
  "Salami",
  "Bacon",
  "Ham",
  "Kebabs",
  "Fish Fillet",
  "Toor Dal",
  "Moong Dal",
  "Urad Dal",
  "Chana Dal",
  "Masoor Dal",
  "Green Gram",
  "Black Gram",
  "Horse Gram",
  "Lobia (Black-Eyed Peas)",
  "Rajma (Kidney Beans)",
  "Kabuli Chana (Chickpeas)",
  "White Peas",
  "Red Lentils",
  "Split Peas",
  "Yellow Moong Dal",
  "Bengal Gram",
  "Tur Dal",
  "Whole Masoor",
  "Matki (Moth Beans)",
  "Kulthi (Horse Gram)",
  "Pigeon Peas",
];

// eslint-disable-next-line react/prop-types
const InputItem = ({ onAddIngredients, isFindBtnShow, searchRecipes }) => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [activeOption, setActiveOption] = useState(0);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    if (value.length > 0) {
      const filteredSuggestions = items.filter((suggestion) =>
        suggestion.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (value) => {
    setInputValue(value);
    setSuggestions([]);
    setActiveOption(0);
  };

  const onKeyDownPress = (event) => {
    if (event.keyCode === 40 && suggestions !== undefined) {
      setActiveOption((prev) =>
        prev !== suggestions.length && prev !== 6 ? prev + 1 : prev
      );
    }
    if (event.keyCode === 38 && suggestions !== undefined) {
      setActiveOption((prev) => (prev !== 0 ? prev - 1 : prev));
    }

    if (event.keyCode === 13) {
      activeOption !== 0
        ? handleSuggestionClick(suggestions[activeOption - 1])
        : handleSuggestionClick(inputValue);
    }
  };

  const onClickAdd = () => {
    if (inputValue.trim() !== "") {
      setInputValue("");
      setSuggestions([]);
      onAddIngredients(inputValue);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-4 w-3/5 justify-center">
      <div className="relative lg:w-2/5 w-full">
        <div className="absolute w-full rounded-[20px] shadow-[1px_2px_14px_8px_rgba(0,_0,_0,_0.1)] border-1 border-gray-500 bg-white">
          <input
            placeholder="Enter Ingredient"
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={onKeyDownPress}
            className="p-2 px-6 w-full focus-visible:outline-none rounded-[20px]"

            // Additional props
          />
          {suggestions.length > 0 && (
            <ul className=" w-full">
              {suggestions.map(
                (suggestion, index) =>
                  index <= 5 && (
                    <li
                      className={`rounded-full mx-2 p-2 px-5 my-2 ${
                        activeOption - 1 === index
                          ? "bg-slate-300"
                          : "hover:bg-slate-300"
                      }`}
                      key={suggestion}
                      value={suggestion}
                      onClick={() => handleSuggestionClick(suggestion)}
                    >
                      {suggestion}
                    </li>
                  )
              )}
            </ul>
          )}
        </div>
      </div>

      <button
        className="bg-black text-white p-2 px-6 border-0 shadow-lg rounded-full mt-11 lg:mt-0"
        onClick={onClickAdd}
      >
        Add
      </button>

      <button
        className="bg-black text-white p-2 px-6 border-0 shadow-lg rounded-full disabled:hover:cursor-not-allowed"
        disabled={!isFindBtnShow ? true : false}
        onClick={() => {
          setInputValue("");
          setSuggestions([]);
          searchRecipes();
        }}
      >
        Find Recipe
      </button>
    </div>
  );
};

export default InputItem;
