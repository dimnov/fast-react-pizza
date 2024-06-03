import Button from "../../ui/Button";

function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="mb-8 mt-12 font-semibold">
        Your cart is still empty. Start adding some pizzas :)
      </p>

      <Button type={"primary"} to="/menu">
        &larr; Back to menu
      </Button>
    </div>
  );
}

export default EmptyCart;
