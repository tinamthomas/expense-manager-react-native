import { SQLiteDatabase } from "react-native-sqlite-storage";

const execQuery = (database: SQLiteDatabase, queryString: string, queryArgs: any, successCB : any = () => {}) => {
    database.transaction((tx) => {
    tx.executeSql(
      queryString,queryArgs, 
    function (tx: any, results: any) {
      console.log(`query ${queryString} ${queryArgs} success`);
      successCB(results);
    },
    function (error: any) {
        console.log(`query ${queryString} failed with the following error ${error.message}`);
    });
  })
}

export default execQuery;