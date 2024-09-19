import React, { useState } from 'react';

export const Quotes: React.FC = () => {
    const quotes = [
        "When you create art, it no longer belongs to you. It belongs to the world",
        "As simple as possible. As complex as necessary",
        "Whatever guard you adopt, do not think of it as being on guard; think of it as part of the act of killing.",
        "It is rarely a mysterious technique that drives us to the top, but rather a profound mastery of what may well be a basic skill set.",
        "Play the opening like a book, the middle like a magician, and the endgame like a machine",
        "The secret is there is no secret. It's just boring old habits",
        "Absorb what is useful, discard what is not, and add what is uniquely your own.",
        "The fight is won or lost far away from the witnesses, behind the lines, in the gym, and out there on the road, long before I dance under those lights.",
        "The man who has no imagination has no wings.",
        "Do nothing that is of no use.",
        "Maximum efficiency with minimum effort.",
        "The problem creates the solution. What stands in the way becomes the way.",
        "There is nothing outside of yourself that can ever enable you to get better, stronger, richer, quicker, or smarter. Everything is within. Everything exists. Seek nothing outside of yourself.",
        "The supreme art of war is to subdue the enemy without fighting.",
        "He who has a why to live can bear almost any how.",

    ];

    const getRandomQuote = () => quotes[Math.floor(Math.random() * quotes.length)];

    const [randomQuote, setRandomQuote] = useState<string>(quotes[0]);

    const handleQuoteChange = () => {
        let newQuote = getRandomQuote();
        while (newQuote === randomQuote) {
            newQuote = getRandomQuote();
        }
        setRandomQuote(newQuote);
    };

    return (
        <div className="landing-quote fade-in" onClick={handleQuoteChange} key={randomQuote}>
            "{randomQuote}"
        </div>
    );
};

export default Quotes;
