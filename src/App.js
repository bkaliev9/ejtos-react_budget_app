import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { AppProvider } from './context/AppContext';
import Budget from './components/Budget';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import RemainingBudget from './components/Remaining';

const currencies = [
    { code: 'USD', name: 'Dollar', symbol: '$' },
    { code: 'GBP', name: 'Pound', symbol: '£' },
    { code: 'EUR', name: 'Euro', symbol: '€' },
    { code: 'INR', name: 'Rupee', symbol: '₹' }
];

const App = () => {
    //const [selectedCurrency, setSelectedCurrency] = useState(null);
    const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleToggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleChangeCurrency = (currency) => {
        setSelectedCurrency(currency);
        setIsDropdownOpen(false);
    };

    return (
        <AppProvider>
            <div className="container">
                <h1 className="mt-3">bkaliev's lab: Company's Budget Allocation</h1>
                <div className="currency-dropdown">
                    <div className={`dropdown${isDropdownOpen ? ' show' : ''}`}>
                        <button
                            className="btn btn-success dropdown-toggle"
                            type="button"
                            onClick={handleToggleDropdown}
                        >
                            {selectedCurrency ? `Currency (${selectedCurrency.symbol} ${selectedCurrency.name})` : 'Currency'}
                        </button>

                        <ul className={`dropdown-menu${isDropdownOpen ? ' show' : ''}`} style={{ backgroundColor: selectedCurrency ? 'white' : 'white', borderColor: 'green' }}>
                            {currencies.map((currency) => (
                                <li key={currency.code}>
                                    <button
                                        className="dropdown-item"
                                        type="button"
                                        onClick={() => handleChangeCurrency(currency)}
                                        style={{
                                            color: selectedCurrency === currency ? 'black' : 'black',
                                            backgroundColor: selectedCurrency === currency ? 'lightgreen' : 'white'
                                        }}
                                    >
                                        {currency.symbol} {currency.name}
                                    </button>
                                </li>
                            ))}
                        </ul>


                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-sm">
                        <h3>Budget</h3>
                        <Budget selectedCurrency={selectedCurrency} />
                    </div>
                    <div className="col-sm">
                        <h3>Remaining</h3>
                        <RemainingBudget selectedCurrency={selectedCurrency} />
                    </div>
                    <div className="col-sm">
                        <h3>Spent so far</h3>
                        <ExpenseTotal selectedCurrency={selectedCurrency} />
                    </div>
                </div>
                <h3 className="mt-3">Allocation</h3>
                <div className="row">
                    <div className="col-sm">
                        <ExpenseList selectedCurrency={selectedCurrency} />
                    </div>
                </div>
                <h3 className="mt-3">Change allocation</h3>
                <div className="row mt-3">
                    <div className="col-sm">
                        <AllocationForm selectedCurrency={selectedCurrency} />
                    </div>
                </div>
            </div>
        </AppProvider>
    );
};

export default App;
