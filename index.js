
           // var displayname = document.getElementById("displayname");
            var displaytemp = document.getElementById("displaytemp");
            var displayvisi = document.getElementById("displayvisi");
            var displaycode = document.getElementById("displaycode");
            var displayicon = document.getElementById("icon");


function getdata(){
    var city = document.getElementById("get");
    var cityinput = city.value;

    $.ajax({
         url: "https://api.openweathermap.org/data/2.5/weather?q="+cityinput+"&appid=31d1046f5452707fd080b6c2ee619a0a&units=metric",type: 'get',

        success: function(response){
                        
            $("#displayname").html(response.name);   //also write like this
            displaytemp.innerHTML = "Temp :" + (response.main.temp +"&#8451");
            displayvisi.innerHTML = "Visibility:" + (response.visibility);
            displaycode.innerHTML = "Contry code:" + (response.sys.country);
            displayicon.innerHTML = "<img src='https://openweathermap.org/img/wn/"+response.weather[0].icon+"@2x.png' alt='error'></img>";
            
        }
    });
}
            