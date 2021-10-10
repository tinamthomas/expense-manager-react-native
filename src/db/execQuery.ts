import { SQLiteDatabase } from "react-native-sqlite-storage";

const execQuery = (database: SQLiteDatabase, queryString: string, queryArgs: any) => {
    database.transaction((tx) => {
    tx.executeSql(
      queryString,queryArgs, 
    function (tx: any, results: any) {
      console.log(`query ${queryString} success`);
    },
    function (error: any) {
        console.log(`query ${queryString} failed with the following error ${error}`);
    });
  })
}

export default execQuery;