## Задача 2C: @username 
[ **[to line](https://github.com/suder/skb_01/blob/master/src/index.js#L43)** ]
```javascript
app.get('/2c', function (req, res) {
  let user = req.query.username.replace(/\s{2,}/g, '');
  let result = user.match( /((http:|https:)?(\/\/)?(www.)?([a-z0-9-]+\.)?([a-z0-9-]+\/)?)?@?([a-zа-яё0-9._]+)/ );
  result = result[result.length - 1];   
  res.send(`@${result}`);
});
```

## Задача 2B: Фамилия И. О. 
[ **[to line](https://github.com/suder/skb_01/blob/master/src/index.js#L16)** ]
```javascript
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
```

## Задача 2A: A + B
[ **[to line](https://github.com/suder/skb_01/blob/master/src/index.js#L7)** ]
```javascript
app.get('/2a', function (req, res) {
	let summ = 0,	
		a = +(req.query.a || 0),
  		b = +(req.query.b || 0);
  	summ = a + b || 0;
	res.send(summ + "");
});
```
