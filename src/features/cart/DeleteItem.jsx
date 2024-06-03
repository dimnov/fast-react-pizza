import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { removeItem } from "./cartSlice";

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();

  function handleItemRemove() {
    dispatch(removeItem(pizzaId));
  }

  return (
    <Button type="small" onClick={handleItemRemove}>
      Remove
    </Button>
  );
}

export default DeleteItem;
