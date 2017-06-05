function start(){
        var st = document.getElementById("st");
        var stp = document.getElementById("stp");
        var btn = document.getElementById("btn");
        var msg = document.getElementById("msg");
        var mn = document.getElementById("mn"); 
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
                        btn.value="Clear";


                        var toto = today1-today;
                        var mi = toto; //find miliseonds
                        var ss = mi/1000;  //find second by divide to 1000 mili
                        var min = ss/60;  //find minnutes by divide to 60 second
                        var hour = min/60; //find minnutes by divide to 60 minute                        
                        var dd = hour/24;  //find minnutes by divide to 24 hour  
                            var exdd = Math.floor(dd); 
                        var hour2 = (dd%1)*24;
                            var exHour = Math.floor(hour2);

                        var minute2 = (hour2%1)*60;
                            var exMinute = Math.floor(minute2);

                        var second2 = Math.round((minute2%1)*60);
                            var exSecond = Math.floor(second2);

                        var ii = exHour+" h "+exMinute+" min ";
                        if (exdd>0) { ii = +exdd+"  d "+ii;}
                        mn.innerHTML =ii;
                        
                        var x = 500, y = 700, z = 1500, dm = 24;
                        if(exMinute==0){  result.innerHTML = x+((exHour+(exdd*dm))*z)+" Riel";  }
                        else if(exMinute>0 && exMinute<=15)   { result.innerHTML = x+((exHour+(exdd*dm))*z)+" Riel";  }
                        else if(exMinute>15 && exMinute<=30)  { result.innerHTML = y+((exHour+(exdd*dm))*z)+" Riel";  }
                        else if(exMinute>30 && exMinute<=60)  { result.innerHTML = z+((exHour+(exdd*dm))*z)+" Riel";  }
                        else{result.innerHTML = "Unknown"}

                        var hide = document.getElementById("hide").classList;    
                        hide.remove("hide");
                        startResult.innerHTML= "You started at: "+today.toLocaleString();
                        stopResult.innerHTML= "You stoped at: "+today1.toLocaleString();
                        minuteResult.innerHTML= "Your total minute is: "+Math.floor(min)+ " minute(s)";


                        // +++++++++++++++++++++++++++++++++++ condition if Clear to reload page
                        if (btn.addEventListener && btn.value=="Clear") {
                            btn.addEventListener("click", function() {window.location.reload();}, false);
                        }

                    }, false);                     
                }//end condition if Stop          
            }, 1000);// End setInterval
        } //end condition if Start
    }//end function start()