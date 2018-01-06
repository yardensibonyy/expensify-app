import React from 'react';
import numeral from 'numeral';
import { connect } from 'react-redux';
import expensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';

export const ExpensesSummary = (props) => {
    return (
        <div>
            <br/>
            <h2>Expenses Summary</h2>
            <p>
                You had {
                    props.expenses.length === 1 ? (
                        <span>
                            only one expense for{numeral(props.expenses[0].amount / 100).format(' $0,0.00')}
                        </span>
                    ) : (
                        <span>
                            {props.expenses.length} expenses in a total of 
                            {numeral(expensesTotal(props.expenses) / 100).format(' $0,0.00')} 
                        </span>
                    )
                } 
            </p>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }; 
};

export default connect(mapStateToProps)(ExpensesSummary);