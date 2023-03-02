import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { dispatch,budget,remaining,currency } = useContext(AppContext);
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}
                <input 
                type="number" 
                id="budget" 
                name="budget" 
                step="10" 
                max="20000"
                value={budget}
                onChange = {(event) => {
                    let newBudget = event.target.value
                    if(event.target.value > 20000) {
                        alert("The value cannot exceed £ 20000");
                        newBudget = 20000
                    }
                    else if (event.target.value < budget-remaining) {
                        alert("You cannot reduce the budget value lower than the spending")
                        newBudget = budget-remaining
                    }
                    dispatch({
                        type: 'SET_BUDGET',
                        payload: newBudget
                    })
                }
                }
                ></input>
                    
                </span>
        </div>
    );
};
export default Budget;
