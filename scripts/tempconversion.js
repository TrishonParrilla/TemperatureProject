function conversion(fahrenheit=0) {
    let celcius = prompt("Enter Celcius Temperature: ");
    fahrenheit = celcius * 9/5 + 32;
    document.getElementById("temp-calculation").innerHTML = 
    `The temperature is ${fahrenheit} °F`;
}