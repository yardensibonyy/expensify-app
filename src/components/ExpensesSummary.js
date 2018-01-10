import React from 'react';
import numeral from 'numeral';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import expensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';

export const ExpensesSummary = (props) => {
    return (
        <div>
            <div className='page-header'>
            <div className='content-container'>
                <h2>Expenses Summary</h2>
                <p>
                    Viewing {
                        props.expenses.length === 1 ? (
                            <span>
                                only one expense for
                                <span className='page-header__title'>
                                    {numeral(props.expenses[0].amount / 100).format(' $0,0.00')}
                                </span>
                            </span>
                        ) : (
                            <span>
                                <span className='page-header__title'>{props.expenses.length}</span> expenses totalling
                                <span className='page-header__title'>    
                                    {numeral(expensesTotal(props.expenses) / 100).format(' $0,0.00')}
                                </span> 
                            </span>
                        )
                    }
                </p>
                <div className='page-header__actions'>
                    <Link to='/create' className='button'>Add Expense</Link>
                </div> 
            </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }; 
};

export default connect(mapStateToProps)(ExpensesSummary);