const sql = require("msnodesqlv8");

const connectionString = "server=.;Database=logisticaCom;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";
const query = "SELECT * from dbo.Usuarios";

sql.query(connectionString, query, (err, rows) => {
  if (err) {
    console.error("Error executing query:", err);
  } else {
    console.log("Query result:");
    rows.forEach((row, index) => {
      console.log(`Row ${index + 1}:`, row);
    });
  }
});
