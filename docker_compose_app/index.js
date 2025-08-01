const express = require("express");
const redis = require("redis");

// 노드에서 조회수 증가되도록, 디비에 횟수 저장되도록
const client = redis.createClient({
    url: "redis://redis-server:6379",
});

async function start() {
    await client.connect();
    console.log("Connected to Redis");

    const app = express();
    app.get("/", async (req, res) => {
        let number = (await client.get("number")) || 0;
        // redis에서 number라는 키로 조회(키벨류로 조회 가능), 없으면 0으로 초기화
        res.send(`숫자가 1씩 증가합니다" + 숫자: ${number}`);
        await client.set("number", Number(number) + 1);
        // number라는 키에 1씩 증가된 값을 redis에 저장
    });
    app.listen(8082, "0.0.0.0", () => {
        console.log("Listening on port 8082");
    });
}

start().catch(console.log);
