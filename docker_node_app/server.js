const express = require("express");

const PORT = 8081;

const app = express();

app.get("/", (req, res) => {
    res.send("안녕안녕");
});

app.listen(PORT, () => {
    console.log(`서버가 ${PORT}번 포트에서 실행 중입니다.`);
});
