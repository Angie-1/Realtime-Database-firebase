//firebase.database().ref("Student").set({
//    name: "Angela",
//    class: "firebase",
//    course: "Javascript"
//})
//see the values on console
//firebase.database().ref("Student").get()
//    .then(function(data){
//    console.log(data.val())
//})

//Override the previous user created from the form
//function submit(){
//    var jina = document.getElementById("name").value
//    var simu = document.getElementById("phone").value
//    firebase.database().ref("mwanafunzi/").set({
//        name: jina,
//        phone: simu
//    })
//}

//Create more new users under mwanafunzi


//function submit(){
//    var randomID = "user_" + Math.random().toString(36).substring(2);
//    var jina = document.getElementById("name").value
//    var simu = document.getElementById("phone").value
//    firebase.database().ref("mwanafunzi/" + randomID).set({
//        name: jina,
//        phone: simu
//    })
//}

//var container = document.getElementById("container")

firebase.database().ref("mwanafunzi").get()
.then(function(data){
//    console.log(data);
    
    if (data.exists() == true){
        var darasa = Object.values(data.val());
        var darasalinks = Object.keys(data.val())
        console.log(data.val());
        console.log(darasa);
        console.log(darasalinks)
        
        var x = 0;
        darasa.forEach(function(darasa){
//            console.log(darasa);
            console.log(darasalinks[x])
            
           var stdDiv = document.createElement("div")
            var paraname = document.createElement("h2") 
            var paraphone = document.createElement("p");
            var paracourse = document.createElement("p");
            var paradescription =document.createElement("p");
            var userlink = document.createElement("a")
            
            paraname.innerHTML = darasa.name;
            paraphone.innerHTML = darasa.phone;
            stdDiv.setAttribute("class", "card")
            paracourse.innerHTML = darasa.course;
            paradescription.innerHTML = darasa.description;
            userlink.setAttribute("href", "/user.html?user="+ darasalinks[x])
            
          stdDiv.appendChild(paraname);
            stdDiv.appendChild(paraphone);
            stdDiv.appendChild(paracourse);
            stdDiv.appendChild(paradescription);
            userlink.appendChild(stdDiv)
            container.appendChild(userlink);
            
            x++;
        });
   } else {
        console.log("no data")
    }
    
    
});

