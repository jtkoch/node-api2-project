const express = require("express")
const cors = require("cors")
const server = express()
const postsRouter = require("./routes/posts-router")
const port = 4000

server.use(cors())
server.use(express.json())
server.use("/api/posts", postsRouter)

server.get("/", (req, res) => {
  res.status(200).send("main route working");
})

server.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`)
})
