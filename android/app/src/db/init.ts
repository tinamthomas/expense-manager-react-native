import { openDatabase, SQLiteDatabase } from 'react-native-sqlite-storage';
import execQuery from './execQuery';

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

const openDB = (): Promise<SQLiteDatabase> => {
  return openDatabase({
    name: "expense.db",
    location: "default"
  })
}
const initializeDatabase = async () => {
  const db = await openDB();
  await db.transaction(async (tx: any) => {
    await createTables(db);
  }); 
};


export default initializeDatabase;