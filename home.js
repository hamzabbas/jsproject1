let cities = ["Faisalabad","Lahore","karachi","Islamabad","Burewala","Sheikhupura","Kashmir"]
for(let i = 0; i < cities.length; i++){
    let num = i + 1
    document.getElementById("orignalTextBox").innerHTML +=" "+ num +")"+" "+ cities[i]
    document.getElementById("orignalTextBox").innerHTML =cities
}
// action button print city
document.getElementById("printcity").onclick = function(){
    document.getElementById("output").innerHTML = ""
    for( let i = 0; i < cities.length; i++){
        let num = i + 1
        document.getElementById("output").innerHTML += num + ")"+" "+ cities[i] +"<br>" 
    }
}
document.getElementById("addcity").onclick = function(){
    let City = document.getElementById("input").value
    if(!City){
        alert("Enter city name")
        return;
    }

        document.getElementById("output").innerHTML = City +
         cities.push(City)
       
    
}