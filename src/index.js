import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

/* Задача 2A: A + B */
app.get('/2a', function (req, res) {
	let summ = 0,	
		a = +(req.query.a || 0),
  		b = +(req.query.b || 0);
  	summ = a + b || 0;
	res.send(summ + "");
});

/* Задача 2B: Фамилия И. О. */
app.get('/2b', function (req, res) {
	let errors = false;
	let full = req.query.fullname.replace(/\s{2,}/g, ' ').replace(/^\s+|\s+$/g, "");
	if(decodeURIComponent(full).match(/[0-9_/]/)){ errors = true; }
	if (!full) { errors = true; }
	if(!errors){	
		var counter = full.split(' ');
		if (counter.length <= 3) {
			let result = '';
			if (counter.length == 3) {
				result = `${counter[2][0].toUpperCase() + counter[2].slice(1).toLowerCase()} ${counter[0][0].toUpperCase()}. ${counter[1][0].toUpperCase()}.`;
			} else if (counter.length == 2) {
				result = `${counter[1][0].toUpperCase() + counter[1].slice(1).toLowerCase()} ${counter[0][0].toUpperCase()}.`;
			} else {
				result = counter[0][0].toUpperCase() + counter[0].slice(1).toLowerCase();
			}
			res.send(result.toString());
		} else {
			return res.send("Invalid fullname");
		}
	} else {
		return res.send("Invalid fullname");
	}
});

app.listen(3000, function () {
  console.log('On 3000!');
});

