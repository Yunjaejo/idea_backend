const express = require('express')
const app = express()
const port = 3000
app.use(express.json())
const Post = require("./routers/poset");
app.use("/", [post]);


//첫페이지 게시물 확인
app.get('/', (req, res, next) => {
  
  res.send('test')
});



app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})