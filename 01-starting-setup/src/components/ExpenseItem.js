import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from './Card';

const ExpenseItem = (props) => {    

    const {date: expenseDate, title: expenseTitle, amount: expenseAmount} = props.expense;

    return (
        <Card className='expense-item'>
            <ExpenseDate date={expenseDate}/>
            <div className='expense-item__description'>
                <h2>{expenseTitle}</h2>
                <div className='expense-item__price'>{`$${expenseAmount}`}</div>
            </div>
        </Card>
    )
}

export default ExpenseItem;