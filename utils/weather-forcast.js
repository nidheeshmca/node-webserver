const request = require('request')
const geoCode = (address,callback) => {
    const url="https://api.mapbox.com/geocoding/v5/mapbox.places/"+address+".json?access_token=pk.eyJ1IjoibmlkaGVlc2htY2EiLCJhIjoiY2tudmZib2p5MG1leDJvcHN4Y2RrYW9ibyJ9.gae3OjAoR7KFqxTbleoE2g"
    request({url:url,json:true},(error,{body})=>{ 
        if(error)
        {
            callback("Not able to access location service.",undefined);
        } else if(body.features.length==0){
            callback("Location not found.",undefined)
        }
        else
        {
            callback(undefined,{lat:body.features[0].center[1],long:body.features[0].center[0],loc:body.features[0].place_name})
           
        }
    })

}

const getWeather = (lat,long,callback) => {
    const url="http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+ long+"&appid=64fcb01760f00b2a891aaf92ea8b77c6&units=metric"
    request({url,json:true},(error,{body})=>{ 
        if(error)
        {
            callback("Not abale to access weather service.",undefined);
        } else if(body.cod!=200){
            callback(body.message,undefined)
        }
        else
        {
            console.log(body)
            callback(undefined,body)
           
        }
    })

}

module.exports.getWeather=getWeather
module.exports.geoCode=geoCode