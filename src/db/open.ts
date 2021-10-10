import { openDatabase, SQLiteDatabase } from 'react-native-sqlite-storage';

const openDB = (): Promise<SQLiteDatabase> => {
    return openDatabase({
        name: "expense.db",
        location: "default"
    })
}

export default openDB;
