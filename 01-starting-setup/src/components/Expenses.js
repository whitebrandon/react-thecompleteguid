import React from 'react';
import ExpenseItem from "./ExpenseItem"
import Card from './Card';
import './Expenses.css'

const Expenses = (props) => {
    
    return (
        <Card className="expenses">
            {props.items.map(item => <ExpenseItem expense={item} />)}
        </Card>
    )
}

export default Expenses;