const express = require("express")
const postsRouter = require("./routes/posts-router")
const server = express()
const port = 4000

server.use(express.json())
server.use("/api/posts", postsRouter)

server.get("/", (req, res) => {
  res.status(200).send("main route working");
})

server.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`)
})
