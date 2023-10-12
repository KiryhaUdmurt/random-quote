import { useEffect, useState } from "react";
import "./App.css";
import { quotes } from "./quotesData";
import { FaQuoteLeft } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const bodyStyles = document.body.style;

const getRandomQuote = () => {
  const randomNum = Math.floor(Math.random() * (quotes.length - 0));
  return quotes[randomNum];
};

const changeRandomColor = () => {
  const red = Math.floor(Math.random() * 128);
  const blue = Math.floor(Math.random() * 128);
  const green = Math.floor(Math.random() * 128);

  return `rgb(${red}, ${green}, ${blue})`;
};

const changeColor = () => {
  bodyStyles.setProperty("--color-main", changeRandomColor());
};

function App() {
  const [quote, setQuote] = useState({});

  useEffect(() => {
    setQuote(getRandomQuote());
    changeColor();
  }, []);

  return (
    <div className="App">
      <div id="quote-box">
        <p id="text">
          <FaQuoteLeft style={{ width: "40px" }} /> {quote.quote}
        </p>
        <p id="author">- {quote.author}</p>
        <div className="links">
          <a href="twitter.com/intent/tweet" id="tweet-quote" target="_blank">
            <FaXTwitter
              style={{ color: "white", width: "20px", height: "20px" }}
            />
          </a>
          <button
            id="new-quote"
            onClick={() => {
              setQuote(getRandomQuote());
              changeColor();
            }}
          >
            New quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
