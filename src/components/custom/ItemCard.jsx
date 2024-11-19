// eslint-disable-next-line react/prop-types
const ItemCard = ({ name, onCloseItem }) => {
  const onClose = () => {
    onCloseItem(name);
  };
  return (
    <li className="flex h-10 justify-between px-4 py-1 items-center text-gray-300  border-2 border-gray-300 rounded-full m-2">
      <div>
        <p>{name}</p>
      </div>

      <button
        className="bg-transparent  text-gray-300 text-xs p-0 ml-2 w-4 h-4 text-center hover:bg-transparent hover:text-red-600"
        onClick={onClose}
      >
        X
      </button>
    </li>
  );
};

export default ItemCard;
