function conv (num,unit) {
	if (unit === "k") {
		return num * 2;
	}

	else if ( unit === "p") {
		return num * 0.5;
	}

	else {
		return "Sorry no know :O";
	}

}

		function calage (birthyear) {
			return ("You are " + (2016 - birthyear) + " or " + (2017 - birthyear))

		}

		function isPrime(num) {
		    for ( var i = 2; i < num; i++ ) {
		        if ( num % i === 0 ) {
		            return false;
		        } else { return true; }
		    } 
		   
		}
		var array = [10,20,30,40,50];
		function avr(arr) {
			var sum = 0;
			for (var i = 0; i < arr.length; i++) {
			 sum += arr[i];
			}
			console.log(sum / arr.length);
		}

		var arrayfour = [1,2,3,4,5];

		var taskfour =  function(array,number){

			for (var i = 0; i < array.length; i++) {
				if (array[i] === number) {
					console.log('Shalom')
					return true;
				}
				else {
					console.log("false");
				}
			}
		}
       
        taskfour(arrayfour,8);