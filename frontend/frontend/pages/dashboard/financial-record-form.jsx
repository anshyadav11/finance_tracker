export const Financial_record_form=()=>{
    return(<div className="form_component">
        <form >
            <div className="formfield">
                <label >Description:</label>
                <input type="text" required className="input" />

            </div>
            <div className="formfield">
                <label>Amount:</label>
                <input type="number" required className="input" />
            </div>
            <div className="formfield">
                <label>Category:</label>
                <select required className="input">
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
                <label>payment method:</label>
                <select required className="input">
                    <option value="">Choose a payment method</option>
                    <option value="cash">cash</option>
                    <option value="card">card</option>
                    <option value="bankTransfer">Bank transfer</option>
                </select>
            </div>
            <button type="submit" className="button">Add Record</button>
        </form>
        </div>)
}