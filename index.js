const quotes = {
    'happy': [
        { text: "Happiness is not out there, it's in you.", author: "Unknown" },
        { text: "Happiness is when what you think, what you say, and what you do are in harmony.", author: "Mahatma Gandhi" },
        { text: "The most important thing is to enjoy your life—to be happy—it's all that matters.", author: "Audrey Hepburn" },
        { text: "Happiness is not something ready made. It comes from your own actions.", author: "Dalai Lama" },
    ],
    'sad': [
        { text: "Tears are words that need to be written.", author: "Paulo Coelho" },
        { text: "Every man has his secret sorrows which the world knows not; and often times we call a man cold when he is only sad.", author: "Henry Wadsworth Longfellow" },
        { text: "Tears come from the heart and not from the brain.", author: "Leonardo da Vinci" },
        { text: "Sadness flies away on the wings of time.", author: "Jean de La Fontaine" },
    ],
    'motivational': [
        { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
        { text:  "Don't watch the clock; do what it does. Keep going." , author: " Sam Levenson" },
        { text: "The only way to achieve the impossible is to believe it is possible." , author: "Charles Kingsleigh" },
        { text: "Believe you can and you're halfway there." ,author: "Theodore Roosevelt" },
       
 

    ],
    'funny': [
        { text: "I'm not lazy. I'm just on my energy saving mode.", author: "Unknown" },
        { text: "I find television very educating. Every time somebody turns on the set, I go into the other room and read a book.", author: "Groucho Marx" },
        { text: "I'm an idealist. I don't know where I'm going, but I'm on my way." , author: "Carl Sandburg" },
        { text: "I didn't fail the test. I just found 100 ways to do it wrong. ", author: "Benjamin Franklin" },
    ],
        
};


/*it is used for making popups */
var modal = document.getElementById("myModal");
        var span = document.getElementsByClassName("close")[0];

        window.onload = function() {
            modal.style.display = "block";
        }

        span.onclick = function() {
            modal.style.display = "none";
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }




let currentCategory = 'happy'; // Default category

function getCategoryQuote(category) {
    currentCategory = category; // Remember the selected category
    const categoryQuotes = quotes[category];
    const randomIndex = Math.floor(Math.random() * categoryQuotes.length);
    const quoteElement = document.getElementById('quote');
    const authorElement = document.getElementById('author');

    quoteElement.textContent = categoryQuotes[randomIndex].text;
    authorElement.textContent = categoryQuotes[randomIndex].author;
}

function getRandomQuote() {
    getCategoryQuote(currentCategory); // Use the last selected category
}

// Initial quote display
getRandomQuote();