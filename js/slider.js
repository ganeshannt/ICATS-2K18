(function(){
    var i=0;
    var everyOneSecond = function() {
        var x=[ "url('./images/intro-bg.JPG')","url('./images/intro-bg1.JPG')","url('./images/intro-bg2.JPG')"];
        document.getElementById("home").style.backgroundImage = x[i];
        i++;
        if(i==3){
            i=0;
        }
	    };
	  setInterval(everyOneSecond, 5000)
})();

    

