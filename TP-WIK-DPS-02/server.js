import http from "http";

const PORT = parseInt(process.env.PING_LISTEN_PORT ?? "3000", 10);

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/ping") {
    const headers = req.headers;

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ headers }, null, 2));
    return;
  }

  res.writeHead(404, { "Content-Type": "application/json" });
  res.end();
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});