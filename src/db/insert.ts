import { Expense } from '../models/expense';
import execQuery from './execQuery';
import openDB from './open';

const insert = async (expense: Expense) => {
    const db = await openDB();
    await db.transaction(async (tx: any) => {
        var insertQuery = "insert into Expenses (date, description, category, amount) values (?, ?, ?, ?)";
        await execQuery(db, insertQuery, 
            [expense.date.toString(), expense.description, expense.category, expense.amount.toString()])
    })

};

export default insert;
