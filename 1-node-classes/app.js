let http = require('http')
let fs = require('fs')

http.createServer((req, res) => {
  // let text = fs.readFileSync('./content/big.txt', 'utf-8');
  // res.end(text);

  const fileStream = fs.writeFileSync('./content/big.txt', 'utf-8');

  fileStream.on('open', ()=>{
    fileStream.pipe(res);
  });

  fileStream.on('error', (err) => {
    res.end(err);
  });
})
.listen(5000);