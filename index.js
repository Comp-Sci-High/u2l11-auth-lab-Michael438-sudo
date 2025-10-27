// In this assignment, you will navigate a new API and make two API calls
// Task 1: Account Set up
// Find the GIPHY API, make an account, and create your API key
// MAKE SURE TO SELECT API AND NOT SDK & put "Web" as your platform
// Save your API key in a variable below


// Task 2: Endpoint Identification
// Under GIPHY API, find the GIF & Sticker endpoints
// Find the endpoint that lets you search for GIFs 
// Save the base and path in a variable below
let API_Key = "JXrN3XBIK6nCvc1msOBiWzNf2CGY2g94"

let Gif = "https://api.giphy.com/v1/gifs/search"

// Task 3: Building full request URL
// Find the request (query) parameters to build the full request URL to search for 1 raccoon GIFs
// Save it in a variable below

let animal = "https://api.giphy.com/v1/gifs/search?limit=1&q=raccoon&api_key=" + API_Ke
// Task 4: Making the API call
// Define the function to fetch the data and console log the url key
async function fetchdata(animal){
const response = await fetch(animal)
const data = await response.json()
console.log(data)
return data
}

// Call the function to test it worked
fetchdata(animal)

// Task 5: Running it back
// Find the endpoint that returns a random sticker
// Build the request URL for a coding sticker
let sticker = ""
async function fetchdata(){
const response = await fetch()
const data = await response.json()
console.log(data)
return data
}
// Define and call the function that prints just the sticker URL




