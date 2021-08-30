const loadQuotes = () => {
    fetch("https://api.kanye.rest/")
    .then(res => res.json())
    .then(data => displayQuotes(data))
};
const displayQuotes = quotes => {
    const addedQuotes = document.getElementById("quote");
    addedQuotes.innerText = quotes.quote;
}