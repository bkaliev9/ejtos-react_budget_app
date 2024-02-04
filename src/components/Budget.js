import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = ({ selectedCurrency }) => {
    const { budget, expenses } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    };

    const handleBlur = () => {
        const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0);
        const enteredBudget = parseFloat(newBudget);
        const maxBudget = 20000;

        if (enteredBudget < totalExpenses) {
            alert('The budget cannot be lower than total expenses');
            setNewBudget(budget);
        } else if (enteredBudget > maxBudget) {
            if (selectedCurrency) { // Check if selectedCurrency is defined
                alert(`The budget cannot exceed ${selectedCurrency.symbol}${maxBudget}`);
            } else {
                alert(`The budget cannot exceed ${maxBudget}`);
            }
            setNewBudget(budget);
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            event.target.blur();
        }
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {selectedCurrency ? selectedCurrency.symbol : ''}</span>
            <input type="number" step="10" max="20000" value={newBudget} onBlur={handleBlur} onChange={handleBudgetChange} onKeyUp={handleKeyPress}></input>
        </div>
    );
};

export default Budget;
