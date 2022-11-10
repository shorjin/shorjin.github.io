
console.log('js connected')
// import Person from "./Person"
/*
  Here you will write your the functionality for your webpage

  I have already written the import and export statements for the Person class, so once you have it written in the other file it should be available here
*/
class Person {
  constructor(firstName,lastName,age){
  
  this.firstName=firstName;
  
  this.lastName=lastName;
  
  this.age=age;}  
  }
  
  
function newperson(){
   const firstName=document.getElementById("firstName").value;
    const lastName=document.getElementById("lastName").value;
   const age=document.getElementById("age").value;
   const person=new Person(firstName,lastName,age);
   return person;
  
  }

function message (ob) {
     const messagebox =document.getElementById("message");
   messagebox.innerHTML=`<p>Hello,${ob.firstName} ${ob.lastName}!You are ${ob.age} years old.</p>`;
  
 }

 document.getElementById("submit").addEventListener("click", function(){
    
    const ob=newperson();
    message(ob);
 });




