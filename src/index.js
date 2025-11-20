import app from "./app.js";
import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URI);

app.listen(process.env.PORT, () => {
  console.log(`Auth service running on port ${process.env.PORT}`);
});
