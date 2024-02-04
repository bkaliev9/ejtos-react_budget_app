// ExpenseList.js
import React, { useContext } from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';

const ExpenseList = ({ selectedCurrency }) => {
    const { expenses } = useContext(AppContext);

    console.log(selectedCurrency);

    return (
        <table className='table'>
            <thead className="thead-light">
                <tr>
                    <th scope="col">Department</th>
                    <th scope="col">Allocated Budget</th>
                    <th scope="col">Increase by 10</th>
                    <th scope="col">Decrease by 10</th> {/* New column */}
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                {expenses.map((expense) => (
                    <ExpenseItem
                        key={expense.id}
                        id={expense.id}
                        name={expense.name}
                        cost={expense.cost}
                        selectedCurrency={selectedCurrency} // Pass selectedCurrency as a prop
                    />
                ))}
            </tbody>
        </table>
    );
};

export default ExpenseList;
