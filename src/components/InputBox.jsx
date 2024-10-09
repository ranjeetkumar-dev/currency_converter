import { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
}) {
  const amountInputId = useId();
  return (
    <>
      <div className="bg-white p-3 rounded-lg text-sm flex">
        <div className=" w-1/2 ">
          <label
            htmlFor={amountInputId}
            className=" text-black/40 mb-2 inline-block"
          >
            {label}
          </label>
          <input
            type="number"
            id={amountInputId}
            placeholder="Amount"
            value={amount}
            disabled={amountDisable}
            onChange={(e) =>
              onAmountChange && onAmountChange(Number(e.target.value))
            }
            className=" outline-none w-full bg-transparent py-1.5"
          />
        </div>
        <div className=" w-1/2 flex flex-wrap justify-end text-right">
          <p className=" text-black/40  mb-2 w-full ">Currency Type</p>
          <select
            value={selectCurrency}
            onChange={(e) =>
              onCurrencyChange && onCurrencyChange(e.target.value)
            }
            disabled={currencyDisable}
          >
            {currencyOptions.map((currency) => (
              <option value={currency} key={currency}>
                {currency.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}

export default InputBox;
