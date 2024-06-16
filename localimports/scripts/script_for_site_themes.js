 setInterval(function () {
        var date = new Date();
        var isodate = new Date().toISOString()

        if (date.getMonth()  === 11 && date.getDate()  === 12) {

									document.getElementById("sitebirthday").href="https://www.google.co.uk";



		}


        if (date.getDate()  === 9 ) {

									document.getElementById("october").href="https://www.google.co.uk";

		}

		 if (date.getMonth()  === 11 ) {

									document.getElementById("christmas").href="https://www.google.co.uk";



		}


		 if (date.getMonth()  === 0 ) {

									document.getElementById("newyear").href="https://www.google.co.uk";

		}
		
		
		
		 else {

									document.getElementById("normal").href="../localimports/css/templateofcssthemes.css";

		}


		








    }, 1000)
    
    