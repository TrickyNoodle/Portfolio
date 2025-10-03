import React, { useEffect, useState } from "react";
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";

const Quotes = () => {
  const [quotes, setQuotes] = useState({});
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    async function fetchQuote() {
      setVisible(false);
      const data = await quotesfetcher();
      setQuotes(data);

      setTimeout(() => setVisible(true), 100);
    }
    fetchQuote();
  }, []);

  return (
    <div id="quote" className={`${visible ? "opacity-100" : "opacity-0"} border-1 text-white border-white w-fit text-2xl flex mx-auto text-center relative bg-inherit transition-opacity duration-700`}>
      <BiSolidQuoteAltLeft className="primarycolor absolute -top-4 left-4 text-4xl bg-[#282C33] px-2" />
      <BiSolidQuoteAltRight className="primarycolor absolute -bottom-4 right-4 z-10 text-4xl bg-[#282C33] px-2" />
      <span className={`font-bold p-4 transition-opacity duration-700`}>
        {quotes.quote}
      </span>
      <div className={`border-1 p-2 border-white text-white absolute top-full right-0 transition-opacity duration-700 ${visible ? "opacity-100" : "opacity-0"}`}>
        - {quotes.author}
      </div>
    </div>
  );
};

async function quotesfetcher() {
  try {
    const res = await fetch("https://quotes-api-self.vercel.app/quote");
    if (!res.ok)
      return { quote: "abcd", author: "1244" };
    return await res.json();
  } catch (err) {
    return { quote: "With Great Power Comes Great Electricity Bill", author: "Dr. Who" };
  }
}

export default Quotes;
