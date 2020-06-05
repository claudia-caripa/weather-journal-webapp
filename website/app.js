
/* Global Variables */
const button = document.getElementById('generate');


// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// Personal API Key for OpenWeatherMap API
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = 'f1d2716b477c089985fefea13815b08b';



// Event listener to add function to existing HTML DOM element
button.addEventListener('click', performAction);

/* Function called by event listener */
function performAction(e){
    const zip = document.getElementById('zip').value;
    const feelings = document.getElementById('feelings').value;

    const weatherUrl = `${baseUrl}${zip},us&appid=${apiKey}`;

    //Call getData with weatherUrl
    getWeatherData(weatherUrl)

    .then(function(data){
       postData('/addWeatherInfo', {newDate: newDate, temp: data.main.temp, feelings: feelings})
       //Update UI
       .then(updateUI());
    })

}

/* Function to GET Web API Data*/
const getWeatherData = async (weatherUrl)=>{
    const res = await fetch(weatherUrl);

    try {
        // Transform into JSO
        const data = await res.json();
        console.log(data);
        //console.log(data.main.temp);
        return data;
    } catch(error) {
        // appropriately handle the error
        console.log("error", error);
    }
}


/* Function to POST data */
const postData = async (url = '', data = {})=>{
    console.log(data);

    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers:{
            'Content-Type': 'application/json',
        },

        body: JSON.stringify(data),
    });

    try{
        const newData = await response.json();
        console.log(newData);
        return newData;
    }catch(error){
        console.log("error", error);
    }
}


/* Function to GET Project Data */
const updateUI = async () =>{
    const request = await fetch('/all');

    try{
        const allData = await request.json();
        document.getElementById('date').innerHTML = `<p>Date: ${allData.newDate}</p>`;
        document.getElementById('temp').innerHTML = `<p>Temperature: ${allData.temp}</p>`;
        document.getElementById('content').innerHTML = `<p>You feel: ${allData.feelings}</p>`;
    }catch{
        console.log("error", error);
    }
}