"use strict"; 
//functions will be read below here

function adder(number1,number2)
{
    let number1 = prompt("You've selected the add property- please insert first number",);
    
    if(number1 = NaN)
    {
        alert("Enter number please");
        adder();
        return 0;
    }

    let number2 = prompt("Insert the next number to add",);

    if(number2 = NaN)
    {
        alert("Enter number please");
        adder();
        return 0;
    }
};

adder();