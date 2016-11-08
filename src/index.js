import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/2a', function (req, res) {
	let a = 0, b = 0, summ = 0;	
	if (req.query.a) {
    	a = +req.query.a;
  	}

  	if (req.query.b) {
    	b = +req.query.b;
  	}
  	summ = a + b;
	res.send(summ + "");
});

app.listen(3000, function () {
  console.log('On 3000!');
});

