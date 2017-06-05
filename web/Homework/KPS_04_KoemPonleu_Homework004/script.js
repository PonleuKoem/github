function start(){
        var msg = document.getElementById("msg"); 
        var startResult = document.getElementById("startResult");
        var stopResult = document.getElementById("stopResult");
        var minuteResult = document.getElementById("minuteResult");
        var payResult = document.getElementById("payResult");

        // +++++++++++++++++++++++++++++++++++++++ condition if Start
        if(btn.addEventListener && btn.value=="Start") {            
            var today = new Date();
                var st_time = today.toLocaleTimeString();
                st.innerHTML=st_time;

            // +++++++++++++++++++++++++++++++++++++++ Function Interval
            var intervalListener = setInterval(function() { // }, 1000);
                
                var today1 = new Date();
                var stp_time = today1.toLocaleTimeString();
                stp.innerHTML=stp_time;
                btn.value="Stop";
                msg.innerHTML = "You are playing!";


                // +++++++++++++++++++++++++++++++++++++++ condition if Stop
                if (btn.addEventListener && btn.value=="Stop") {
                    btn.addEventListener("click", function() {

                        clearInterval(intervalListener); //this is clear interval
                        msg.innerHTML = "You have stoped!";
                        


                        var toto = today1-today;
                        mi = toto;
                        ss = mi/1000; 
                        min = ss/60;

                        hour = min/60;
                        exHour = Math.floor(hour);
                        dd = exHour/24;
                        exdd = Math.floor(dd);

                        minute2 = (hour%1)*60;
                        exMinute = Math.floor(minute2);

                        second2 = Math.round((minute2%1)*60);
                        exSecond = Math.floor(second2);

                        
                        if (exdd>0) {var ii = +exdd+"  d "+exHour+" h "+exMinute+" min "+exSecond+" sec";}
                        else{var ii = exHour+" h "+exMinute+" min "+exSecond+" sec";}
                        mn.innerHTML =ii;
                        
                        var x = 500, y = 700, z = 1500, dm = 24;
                        if(exMinute==0){  result.innerHTML = x+((exHour+(exdd*dm))*z)+" Riel";  }
                        else if(exMinute>0 && exMinute<=15)   { result.innerHTML = x+((exHour+(exdd*dm))*z)+" Riel";  }
                        else if(exMinute>15 && exMinute<=30)  { result.innerHTML = y+((exHour+(exdd*dm))*z)+" Riel";  }
                        else if(exMinute>30 && exMinute<=60)  { result.innerHTML = z+((exHour+(exdd*dm))*z)+" Riel";  }
                        else{result.innerHTML = "Unknown"}
                        var hide = document.getElementById("hide").classList;
                        hide.remove("hide");
                        startResult.innerHTML= "You started at: "+st_time;
                        stopResult.innerHTML= "You stoped at: "+stp_time;
                        minuteResult.innerHTML= "Your total minute is: "+Math.floor(min)+ " minute(s)";
                        btn.value="Clear";


                        // +++++++++++++++++++++++++++++++++++ condition if Clear to reload page
                        if (btn.addEventListener && btn.value=="Clear") {
                            btn.addEventListener("click", function() {window.location.reload();}, false);
                        }

                    }, false);                     
                }//end condition if Stop          
            }, 1000);// End setInterval
        } //end condition if Start
    }//end function start()
    function checkTime(i) {
        if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
        return i;
    }