import express from "express";
//import andOr from "../types/and-or-search";
let mongoSearch: any;
/// <reference path='../types/and-or-search.d.ts' />
// Create a new express application instance
const app: express.Application = express();
const _route: any = express.Router();
app.use(_route);

_route.get('/gk', (req: any, res: any) => {
    let gk = mongoSearch.query('(nodejs AND (java or php))', 'skills', 'array');
    res.status(200).send({ status: JSON.stringify(gk) });
});

app.listen(8080, () => {
    console.log("server listening on port 8080");
});
