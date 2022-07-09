let myform=document.querySelector("#regform");
let fullname=document.querySelector(".fullname");
let email=document.querySelector(".email");
let bday=document.querySelector(".bday");
let phone=document.querySelector(".phone");

class Person {
  // vqmnis class da vamatebt saxels mails telepons da dabadebis tarigs
    constructor(fullname, email, phone, bday) {
        this.fullname=fullname;
        this.email=email;
        this.phone=phone;
        this.bday=bday;
    }
}
 myform.addEventListener("submit", function(e) { 
     if  (email.value.slice(email.value.length-13)!="@redberry.com"){
        // amowmebs redberys mails
        console.log("arasworia")
        e.preventDefault();
          }
         else{
           console.log("sworia")
         }
 })
 myform.addEventListener("submit", function(e) { 
    // min da max length bagiaqvs htmlshi amitom vamowmeb jsze
    if  (phone.value.length!="9"){
     
       console.log("bad")
       e.preventDefault();
         }
        else{
          console.log("good")
        }
})