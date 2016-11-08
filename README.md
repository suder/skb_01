# 2A: A + B

```javascript
import express from 'express';

const app = express();

app.get('/', function (req, res) {
  let a = 0, b = 0, summ = 0; 
  if (req.query.a) {
    a = +req.query.a;
  }

  if (req.query.b) {
    b = +req.query.b;
  }
  summ = a + b;
  summ = new String(summ);
  res.send(summ);
});

app.listen(3000, function () {
  console.log('On 3000!');
});
```
