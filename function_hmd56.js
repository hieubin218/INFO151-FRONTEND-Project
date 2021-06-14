/*
===================
Project Name: INFO151_HW4_hmd56
Project Description: Redesign the 'About' Webpages of Homework 4 for Cinema's project.
Date: 13 June 2021
Author: Hieu Dang

=====================
*/


 // hmd56: #5a Declare and assign a string to a variable
var greeting = "Welcome to Our CGV Cinema";
var UserInput_First = "Enter your First Name";
var UserInput_Last = "Enter your Last Name";
var UserAge = "Enter your Age";


// hmd56: #5b Define Function WelcomeGuess ()
function WelcomeGuess() {
    alert(greeting);
    var First_result = String(prompt(UserInput_First));
    var Last_result = String(prompt(UserInput_Last));
    var Age_result = Number(prompt(UserAge));

    // hmd56: #5b concatenate the First and Last Name of Guess
    var fullName = First_result + " " + Last_result;

    // hmd56: #5b Call built-in function "alert" as a result
    var OfferResults = alert("Congratulations " + fullName + " ! Age: " + Age_result
            + " Who is Eligible for Getting Discount 25% per ticket. ");

}


// hmd56: #3 Function to navigate to another webpages (Product and About Pages)
function KnowMoreCompany() {
    window.open("https://www.cs.drexel.edu/~hmd56/INFO151/HW4/About_INFO151_HW4_hmd56.html");
}

function KnowMoreMovies() {
    window.open("https://www.cs.drexel.edu/~hmd56/INFO151/HW4/Product_INFO151_HW4_hmd56.html");
}

function AboutBacktoHome() {
    window.open("https://www.cs.drexel.edu/~hmd56/INFO151/HW4/index_INFO151_HW4_hmd56.html");
}
