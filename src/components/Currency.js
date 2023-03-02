import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
    const { dispatch,currency } = useContext(AppContext);
    return (
        <div className="alert alert-secondary">
            <div style={{backgroundColor: '#75f542'}}>
            <label>Currency (
            <select 
                id="currencySelector" 
                value={currency}
                style={{backgroundColor: '#75f542', border: 'none'}}
                onChange = {(event) => 
                dispatch({
                    type: 'CHG_CURRENCY',
                    payload: event.target.value
                })
                }
                >
                <option value="$" name="Dollar">$ Dollar</option>
                <option value="£" name="Pound">£ Pound</option>
                <option value="€" name="Euro">€ Euro</option>
                <option value="₹" name="Ruppee">₹ Ruppee</option>
            </select>
            )</label>
            </div>
        </div>
    );
};
export default Currency;