import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = ({ selectedCurrency }) => {
    const { expenses, budget } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    // Check if budget is defined before performing calculations
    const remainingBudget = budget ? budget - totalExpenses : 0;

    // Determine alert type based on remaining budget
    const alertType = remainingBudget < 0 ? 'alert-danger' : 'alert-success';

    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: {selectedCurrency ? selectedCurrency.symbol : ''}{remainingBudget}</span>
        </div>
    );
};

export default Remaining;
