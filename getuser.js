var x = document.location
var y = (new URL(x)).searchParams
var z = y.get("user")
console.log(z)

firebase.database().ref("mwanafunzi/" + z).get()
.then(function(data){
//    console.log(data);
    
    if (data.exists() == true){
        console.log(data.val())
    }else{
        console.log("no data found")
    }
    var darasa = Object.values(data.val());
            var stdDiv = document.createElement("div")
            var paracourse = document.createElement("p");
            var paradescription =document.createElement("p");
            var paraphone = document.createElement("p");
            var paraname = document.createElement("h2") 

            

            paracourse.innerHTML = darasa[0].course;
            paradescription.innerHTML = darasa[0].description;
            paraphone.innerHTML = darasa[0].phone;
            paraname.innerHTML = darasa[0].name;
            
            
            


    stdDiv.appendChild(paracourse);
    stdDiv.appendChild(paradescription);
    stdDiv.appendChild(paraphone);
    stdDiv.appendChild(paraname);
    container.appendChild(stdDiv);
})


//firebase.database().ref("mwanafunzi").get(x)
//.then(function(x){
//    console.log(x);
//  
 

//})