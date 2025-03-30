var obj={name:"Kelvin",age:15,grade:9}
var myObj=JSON.stringify(obj);

var newObj=JSON.parse(myObj);
document.getElementById("demo").innerHTML="Name: "+newObj.name+("<br>")+"Age: "+newObj.age+("<br>")+"Grade: "+newObj.grade