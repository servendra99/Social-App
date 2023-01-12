const app = require("./app");
const dotenv = require("dotenv");

const { connectDatabase } = require("./config/database");

//configure

dotenv.config({ path: "backend/config/config.env" });
connectDatabase();

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`);
});
