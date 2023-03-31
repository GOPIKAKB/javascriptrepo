var str="Gopika"
document.write(str+"<br>");

document.getElementById("str1").innerHTML=str.charAt(2);

//string concatination
let p="hello";
let q="world";
let r=p.concat(q);
document.write("concat"+" "+r+"<br>");

//string uppercase and lowercase

var name1= "GeoRge";
var newName= name1.toUpperCase();
document.write("uppercase"+" "+ newName+"<br>");

var nameL=name1.toLocaleLowerCase();
document.write("lowercase"+ " "+nameL);

//string slice

var s="hello athira";
var data1=s.slice(0,7);
console.log(data1);
document.getElementById("strslc").innerHTML=data1;