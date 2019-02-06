import express from "express";

// Create a new express application instance
const app: express.Application = express();

app.listen(8080, () => {
    console.log("server listening on port 8080");
});
