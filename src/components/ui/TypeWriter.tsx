import { useState, useEffect } from "react";

interface TypeWriterProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetween?: number;
}

const TypeWriter: React.FC<TypeWriterProps> = ({
  words,
  typingSpeed = 150,
  deletingSpeed = 100,
  delayBetween = 2000,
}) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    if (index >= words.length) {
      setIndex(0);
      return;
    }

    const currentWord = words[index];

    if (isDeleting) {
      if (text === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % words.length);
        return;
      }

      const timeout = setTimeout(() => {
        setText(currentWord.substring(0, subIndex - 1));
        setSubIndex((prev) => prev - 1);
      }, deletingSpeed);
      return () => clearTimeout(timeout);
    } else {
      if (text === currentWord) {
        const timeout = setTimeout(() => {
          setIsDeleting(true);
        }, delayBetween);
        return () => clearTimeout(timeout);
      }

      const timeout = setTimeout(() => {
        setText(currentWord.substring(0, subIndex + 1));
        setSubIndex((prev) => prev + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }
  }, [
    subIndex,
    index,
    isDeleting,
    words,
    typingSpeed,
    deletingSpeed,
    delayBetween,
    text,
  ]);

  return (
    <span className="inline-block relative">
      {text}
      <span className="animate-pulse ml-1 text-accent-primary">|</span>
    </span>
  );
};

export default TypeWriter;
