import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();

  function handleIncQuantity() {
    dispatch(increaseItemQuantity(pizzaId));
  }

  function handleDecQuantity() {
    dispatch(decreaseItemQuantity(pizzaId));
  }

  return (
    <div className="flex items-center gap-1 md:gap-2">
      <Button type={"round"} onClick={handleDecQuantity}>
        -
      </Button>
      {currentQuantity}
      <Button type={"round"} onClick={handleIncQuantity}>
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
