

const submitForm=(e)=>{  

    e.preventDefault()
    const loc=$("#txtLocation").val();
    if($.trim(loc)=="")
    {
        alert("Please enter some location.")
    }
    else
    {
        ShowLoader();
        $.get( "weather?address="+loc, (data)=> {
            console.log(data)
           if(data.error)
           {
            $("#div-weather-forcast").hide();
            alert(data.error)
           }
            else
            {
                $("#location").html(data.name +", "+data.sys.country)
                $("#date").html(data.dt)
                $("#temp").html(data.main.temp)
                $("#feeltemp").html(data.main.feels_like)
                $("#high").html(data.main.temp_max)
                $("#low").html(data.main.temp_min)               
                $("#wind").html(data.wind.speed)
                $("#cloud").html(data.clouds.all)
                $("#gust").html(data.wind.gust)
                $("#div-weather-forcast").show();
                HideLoader();
            }
          });

    }
   

    return false;
}