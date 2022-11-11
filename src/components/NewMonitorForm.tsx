import { useEffect, useState } from "react";
import { BRAND_NAMES, IMonitorItem, SCREEN_SIZES } from "../interface/IMonitor";

type NewMonitorFormProps = {
  onAddItem: Function;
  productNumberArray: string[] | undefined;
};

export const NewMonitorForm: React.FC<NewMonitorFormProps> = ({
  onAddItem,
  productNumberArray,
}) => {
  const [activeBtnAdd, setActiveBtnAdd] = useState(true);

  const [NewProductNumber, setNewProductNumber] = useState('');
  const [NewBrand, setNewBrand] = useState('');
  const [NewSizeScreen, setNewSizeScreen] = useState('');
  const [NewPrice, setNewPrice] = useState('');
  const [NewQuantity, setNewQuantity] = useState('');

  const [errorMsg, setErrorMsg] = useState(false);

  const handleItem = () => {
    if (productNumberArray && !productNumberArray.includes(NewProductNumber)) {
      const createItem = {
        productNumber: NewProductNumber,
        brand: NewBrand,
        screenSize: NewSizeScreen,
        price: NewPrice,
        quantity: NewQuantity,
      };

      onAddItem(createItem);
      setNewProductNumber('');
      setNewBrand('');
      setNewSizeScreen('');
      setNewPrice('');
      setNewQuantity('');
    } else {
      setErrorMsg(true);
    }
  };

  useEffect(() => {
    if (
      NewProductNumber !== "" &&
      NewBrand !== "" &&
      NewSizeScreen !== "" &&
      NewPrice !== "" &&
      NewQuantity !== ""
    ) {
      setActiveBtnAdd(false);
    } else {
      setActiveBtnAdd(true);
    }
  }, [NewProductNumber, NewBrand, NewSizeScreen, NewPrice, NewQuantity]);

  return (
    <fieldset>
      <legend>Add to inventory</legend>
      <label htmlFor="productNumber">Product Number: </label>
      <input
        type="text"
        name="productNumber"
        value={NewProductNumber}
        onChange={(e) => {
          setErrorMsg(false);
          setNewProductNumber(e.target.value);
        }}
      />
      <a
        style={{
          display: errorMsg ? "" : "none",
          color: "red",
          position: "absolute",
        }}
      >
        {" "}
        Product number already exists!
      </a>
      <br />

      <label htmlFor="brand">Brand: </label>
      <select
        name="brand"
        value={NewBrand}
        onChange={(e) => setNewBrand(e.target.value)}
      >
        <option value="">-- Select --</option>
        {BRAND_NAMES.map((brand) => (
          <option value={brand}> {brand} </option>
        ))}
      </select>
      <br />

      <label htmlFor="screenSize">Screen Size: </label>
      <select
        name="screenSize"
        value={NewSizeScreen}
        onChange={(e) => setNewSizeScreen(e.target.value)}
      >
        <option value="0">-- Select --</option>
        {SCREEN_SIZES.map((size) => (
          <option value={size}> {size} </option>
        ))}
      </select>
      <br />

      <label htmlFor="price">Price: </label>
      <input
        type="number"
        name="price"
        value={NewPrice}
        onChange={(e) => setNewPrice(e.target.value)}
      />
      <br />

      <label htmlFor="quantity">Quantity: </label>
      <input
        type="number"
        name="quantity"
        value={NewQuantity}
        onChange={(e) => setNewQuantity(e.target.value)}
      />
      <br />

      <input
        type="button"
        disabled={activeBtnAdd}
        onClick={() => handleItem()}
        value="Add Monitor"
      />
    </fieldset>
  );
};
