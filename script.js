
function fetchJoke() {
    fetch('https://www.reddit.com/r/Jokes.json')
        .then(response => response.json())
        .then(jokeData => {
            // Get all the jokes from the response
            const jokes = jokeData.data.children;
            
            // Randomly select a joke from the list
            const randomIndex = Math.floor(Math.random() * jokes.length);
            const jokePost = jokes[randomIndex].data;
            
            // Construct the joke text
            const jokeText = `${jokePost.title} - ${jokePost.selftext}`;
            const jokeElement = document.getElementById('jokeElement');
            
            // Display the joke
            jokeElement.innerHTML = jokeText;
        });
}

// Fetch a new joke each time this function is called
fetchJoke();

// Optionally, you can attach this function to a button click event for fetching new jokes
document.getElementById('yourButtonId').addEventListener('click', fetchJoke);
