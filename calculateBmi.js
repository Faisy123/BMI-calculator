function calculateBmi(){
    var userHeight = document.getElementById('userHeight').value;//1.2
    var userWeight = document.getElementById('userWeight').value;//52

    //front end se aane wala chiz string format me aayega - so we need to convert it to integer / decimal
    var userWeighFloat = parseFloat(userWeight); //string to decimal convert
    var userHeightFloat = parseFloat(userHeight);

    bmi = userWeighFloat/(userHeightFloat * userHeightFloat);
    
    //if statement
    //0-18.5 - underweight
    //Overweight = 25–29.9
    //Obesity = BMI of 30 or greater

    if(bmi>=0 && bmi<=18.5){
        document.getElementById("output").innerHTML = "Under weight"
    }
    
    if(bmi>=18.6 && bmi<=24.9){
        document.getElementById("output").innerHTML = "Normal weight"
    }
    
    if(bmi>=25 && bmi<=29.9){
        document.getElementById("output").innerHTML ="Over weight"
    }
    
    if(bmi>=30){
        document.getElementById("output").innerHTML ="Obesity"
    }
}

        