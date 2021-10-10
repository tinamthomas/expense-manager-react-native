import { openDatabase, SQLiteDatabase } from 'react-native-sqlite-storage';
import execQuery from './execQuery';
import openDB from './open';

const createTables = (database: SQLiteDatabase) => {
  database.transaction((tx) => {
    var createQuery = "CREATE TABLE IF NOT EXISTS Expenses( " +
      "expense_id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,  " +
      "date VARCHAR(16)," +
      "description VARCHAR(16)," +
      "category VARCHAR(16)," +
      "amount VARCHAR(16)" +
      ");"
    execQuery(database, createQuery, []);
  })
}

const initializeDatabase = async () => {
  const db = await openDB();
  await db.transaction(async (tx: any) => {
    await createTables(db);
  }); 
};


export default initializeDatabase;