import axios from "axios";

import '../styles/Bible.css';
import { useEffect, useState } from "react";

function Bible() {
  const [verse, setVerse] = useState(null);
  const [book, setBook] = useState("John");
  const [chapter, setChapter] = useState(3);
  const [verseNumber, setVerseNumber] = useState(16);
  const [loading, setLoading] = useState(false);

  // Fetch verse when book, chapter, or verse changes
  useEffect(() => {
    const fetchVerse = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://bible-api.com/${book}+${chapter}:${verseNumber}`);
        setVerse({
          text: response.data.text,
          reference: `${book} ${chapter}:${verseNumber}`,
        });
      } catch (error) {
        console.error("Error fetching Bible verse:", error);
        setVerse({
          text: "Failed to load verse. Please try again later.",
          reference: "",
        });
      }
      setLoading(false);
    };

    fetchVerse();
  }, [book, chapter, verseNumber]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Bible Verse Viewer</h1>
        {loading ? (
          <p id="p">Loading...</p>
        ) : (
          <VerseDisplay verse={verse} />
        )}
        <Controls 
          book={book} 
          setBook={setBook}
          chapter={chapter} 
          setChapter={setChapter}
          verseNumber={verseNumber} 
          setVerseNumber={setVerseNumber}
        />
      </header>
    </div>
  );
}

const VerseDisplay = ({ verse }) => {
  if (!verse) return <p id="p">No verse available.</p>;

  return (
    <div>
      <h2 id="h2">{verse.reference}</h2>
      <p id="p">{verse.text}</p>
    </div>
  );
};

const Controls = ({ book, setBook, chapter, setChapter, verseNumber, setVerseNumber }) => {
  return (
    <div>
      <div>
        <label>Book: </label>
        <input 
          type="text" 
          value={book} 
          onChange={(e) => setBook(e.target.value)} 
          placeholder="e.g., John"
        />
      </div>
      <div>
        <label>Chapter: </label>
        <input 
          type="number" 
          value={chapter} 
          onChange={(e) => setChapter(Number(e.target.value))} 
          placeholder="e.g., 3"
        />
      </div>
      <div>
        <label>Verse: </label>
        <input 
          type="number" 
          value={verseNumber} 
          onChange={(e) => setVerseNumber(Number(e.target.value))} 
          placeholder="e.g., 16"
        />
      </div>
    </div>
  );
};

export default Bible;
