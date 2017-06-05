function start(){
        var msg = document.getElementById("msg"); 
        var startResult = document.getElementById("startResult");
        var stopResult = document.getElementById("stopResult");
        var minuteResult = document.getElementById("minuteResult");
        var payResult = document.getElementById("payResult");

        // +++++++++++++++++++++++++++++++++++++++ condition if Start
        if(btn.addEventListener && btn.value=="Start") {            
            var today = new Date();
                var h1 = today.getHours();
                var m1 = today.getMinutes();
                var s1 = today.getSeconds();
                var d1 = today.getDate();
                hh1 = checkTime(h1);
                mm1 = checkTime(m1);
                ss1 = checkTime(s1);

                var dat1 = hh1 + ":" + mm1 + ":" + ss1;
                st.innerHTML=dat1;

            // +++++++++++++++++++++++++++++++++++++++ Function Interval
            var intervalListener = setInterval(function() { // }, 1000);
                
                var today1 = new Date();
                var h2 = today1.getHours();
                var m2 = today1.getMinutes();
                var s2 = today1.getSeconds();
                var d2 = today1.getDate();
                hh2 = checkTime(h2);
                mm2 = checkTime(m2);
                ss2 = checkTime(s2);

                var dat2 = hh2 + ":" + mm2 + ":" + ss2;
                stp.innerHTML=dat2;
                btn.value="Stop";
                msg.innerHTML = "You are playing!";


                // +++++++++++++++++++++++++++++++++++++++ condition if Stop
                if (btn.addEventListener && btn.value=="Stop") {
                    btn.addEventListener("click", function() {

                        clearInterval(intervalListener); //this is clear interval
                        msg.innerHTML = "You have stoped!";
                        btn.value="Clear";


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

                        var ii = exHour+" h "+exMinute+" min ";
                        if (exdd>0) {var ii = +exdd+"  d "+exHour+" h "+exMinute+" min ";}
                        mn.innerHTML =ii;
                        
                        var x = 500, y = 700, z = 1500, dm = 24;
                        if(exMinute==0){  result.innerHTML = x+((exHour+(exdd*dm))*z)+" Riel";  }
                        else if(exMinute>0 && exMinute<=15)   { result.innerHTML = x+((exHour+(exdd*dm))*z)+" Riel";  }
                        else if(exMinute>15 && exMinute<=30)  { result.innerHTML = y+((exHour+(exdd*dm))*z)+" Riel";  }
                        else if(exMinute>30 && exMinute<=60)  { result.innerHTML = z+((exHour+(exdd*dm))*z)+" Riel";  }
                        else{result.innerHTML = "Unknown"}

                        startResult.innerHTML= dat1;


                        // +++++++++++++++++++++++++++++++++++++++ condition if Clear to reload page
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