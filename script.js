var value,values,jkj
function text1(){
    var x = document.getElementById("temperature1")
    value = x.options[x.selectedIndex].text
}
function text2(){
   var y = document.getElementById("temperature2")
    values = y.options[y.selectedIndex].text        
}
function getresult(){
    if(value === values)
        {
            var txt = document.querySelector("#val")
            var val = txt.value
            jkj = val
            document.querySelector("#formula").innerHTML = "same degree no change"

            if(value === "celsius" && values === "celsius" ){
                document.querySelector("#txt1").innerHTML = "°C"
                document.querySelector("#txt2").innerHTML = "°C"
            }
            if(value === "fahrenheit" && values === "fahrenheit"){
                document.querySelector("#txt1").innerHTML = "°F"
                document.querySelector("#txt2").innerHTML = "°F"
                // document.querySelector("#formula").innerHTML = "Nan"
            }
            if(value === "kelvin" && values === "kelvin"){
                document.querySelector("#txt1").innerHTML = "°K"
                // document.querySelector("#formula").innerHTML = "Nan"
                document.querySelector("#txt2").innerHTML = "°K"
            }
        }
        if(value === "celsius" && values === "fahrenheit"){
            var txt = document.querySelector("#val")
            var val = txt.value
            jkj = (val * 9/5) + 32
            document.querySelector("#txt1").innerHTML = "°C"
            document.querySelector("#txt2").innerHTML = "°F"
            document.querySelector("#formula").innerHTML = `(${val}°C * 9/5) + 32 = ${jkj} °F`

        }
        if(value === "celsius" && values === "kelvin"){
            var txt = document.querySelector("#val")
            var val = txt.value
            var val = parseInt(val)
            jkj = val + 273.15
            document.querySelector("#txt1").innerHTML = "°C"
            document.querySelector("#txt2").innerHTML = "°K"
            document.querySelector("#formula").innerHTML = `${val}°C + 273.15 = ${jkj} °K`
        }
        if(value === "fahrenheit" && values === "celsius"){
            var txt = document.querySelector("#val")
            var val = txt.value
            jkj = (val - 32)* 5/9
            document.querySelector("#txt1").innerHTML = "°F"
            document.querySelector("#txt2").innerHTML = "°C"
            document.querySelector("#formula").innerHTML = `(${val}°F - 32)* 5/9 = ${jkj} °C`

            
        }
        if(value === "fahrenheit" && values === "kelvin"){
            var txt = document.querySelector("#val")
            var val = txt.value
            jkj = (val - 32)* 5/9 + 273.15
            document.querySelector("#txt1").innerHTML = "°F"
            document.querySelector("#txt2").innerHTML = "°K"
            document.querySelector("#formula").innerHTML = `(${val}°F - 32)* 5/9 + 273.15 = ${jkj} °K`

        }
        if(value === "kelvin" && values === "celsius"){
            var txt = document.querySelector("#val")
            var val = txt.value
            jkj = (val - 273.15)
            document.querySelector("#txt1").innerHTML = "°K"
            document.querySelector("#txt2").innerHTML = "°C"
            document.querySelector("#formula").innerHTML = `(${val}°K - 273.15) = ${jkj} °C`

        }
        if(value === "kelvin" && values === "fahrenheit"){
            var txt = document.querySelector("#val")
            var val = txt.value
            jkj = (val - 273.15) * 9/5 +32
            document.querySelector("#txt1").innerHTML = "°K"
            document.querySelector("#txt2").innerHTML = "°F"
            document.querySelector("#formula").innerHTML = `(${val}°K - 273.15) * 9/5 +32 = ${jkj} °F`

        }
}
function getresult2(){
            var result = document.querySelector("#result")
            result.value = jkj
}