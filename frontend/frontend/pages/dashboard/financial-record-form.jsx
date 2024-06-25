import { useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { useFinancialRecords } from "../../contexts/financial-record-context";

export const Financial_record_form = () => {
  const [Description, setDescription] = useState("");
  const [Amount, setAmount] = useState(0);
  const [Category, setCategory] = useState("");
  const [Payment, setPayment] = useState("");
  const { user } = useUser();
  const { addRecord } = useFinancialRecords(); // Get the addRecord function from context

  const HandleSubmit = (event) => {
    event.preventDefault();

    const newRecord = {
      userId: user?.id,
      date: new Date(),
      description: Description,
      amount: Amount,
      category: Category,
      paymentMethod: Payment,
    };

    addRecord(newRecord); // Call addRecord with the new record

    setDescription("");
    setAmount(0);
    setCategory("");
    setPayment("");
  };

  return (
    <div className="form_component">
      <form onSubmit={HandleSubmit}>
        <div className="formfield">
          <label>Description:</label>
          <input
            type="text"
            required
            className="input"
            value={Description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="formfield">
          <label>Amount:</label>
          <input
            type="number"
            required
            className="input"
            value={Amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="formfield">
          <label>Category:</label>
          <select
            required
            className="input"
            value={Category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">select a category</option>
            <option value="food">food</option>
            <option value="rent">rent</option>
            <option value="salary">salary</option>
            <option value="utilities">utilities</option>
            <option value="entertainment">entertainment</option>
            <option value="others">others</option>
          </select>
        </div>
        <div className="formfield">
          <label>Payment method:</label>
          <select
            required
            className="input"
            value={Payment}
            onChange={(e) => setPayment(e.target.value)}
          >
            <option value="">Choose a payment method</option>
            <option value="cash">cash</option>
            <option value="card">card</option>
            <option value="bankTransfer">Bank transfer</option>
          </select>
        </div>
        <button type="submit" className="button">
          Add Record
        </button>
      </form>
    </div>
  );
};
