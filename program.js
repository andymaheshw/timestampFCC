var express = require('express')
var app = express()
var port = process.env.PORT || 8080;

app.get('/:date?', function(req, res) {
	  var unknown_date = req.params.date;
	  if (unknown_date)
	  {
	  	if (isNaN(parseFloat(Date.parse(unknown_date))))
	  	{
	  		//unix timestamp was provided
	  		var written_date = new Date(unknown_date*1000);
	  		if (isNaN(written_date ))
	  		{
	  			res.end("Wrong entry, please retry")
	  		}
	  		var unix_time = unknown_date;
	  	} 
	  	else {
	  	 var written_date = new Date(unknown_date);
		 var unix_time = written_date.getTime()/1000;
		}
		var dd = written_date.getDate();
		var mm = written_date.getMonth()+1; //January is 0!

		var yyyy = written_date.getFullYear();
		if(dd<10){
		    dd='0'+dd;
		} 
		if(mm<10){
		    mm='0'+mm;
		} 
		var date_date = mm+'/'+dd+'/'+yyyy;
	  	res.send(JSON.stringify({"date": date_date, "unix time": unix_time},  null, '\t'));
	  }
      
      res.end("Please add a date to the parameter string above");

  });
app.listen(port);