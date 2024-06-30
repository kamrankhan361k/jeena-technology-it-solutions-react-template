import { memo, useState } from "react";

const PlusMinusBtn = () => {
  const [value, setValue] = useState(1);
  return (
    <div className="quantity-input">
      <button
        className="quantity-down"
        onClick={() => setValue(value == 1 ? 1 : value - 1)}
      >
        --
      </button>
      <input
        className="quantity"
        type="text"
        defaultValue={1}
        value={value}
        name="quantity"
      />
      <button className="quantity-up" onClick={() => setValue(value + 1)}>
        +
      </button>
    </div>
  );
};
export default memo(PlusMinusBtn);
