const express = require("express");
const bodyParser = require("body-parser");
const { evaluateChecklist } = require("./src/evaluateChecklist");
const { fetchData } = require("./src/fetchData");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", async (req, res) => {
    try {
        const data = await fetchData();
        const results = evaluateChecklist(data);
        res.render("dashboard", { results });
    } catch (error) {
        res.status(500).send("Error fetching data or processing checklist");
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
