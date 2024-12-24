import SyntaxHighlighter from "react-syntax-highlighter";
import {
  atomOneDark,
  nightOwl,
} from "react-syntax-highlighter/dist/esm/styles/hljs";
import styles from "./code-block-text.module.css";

interface CodeBlockTextProps {
  children: string;
  language?: "html" | "javascript" | "jsx" | "python";
}

const CodeblockText: React.FC<CodeBlockTextProps> = ({
  children,
  language = "javascript",
}) => {
  const customStyle: React.CSSProperties = {
    fontSize: "14px",
    backgroundColor: "transparent",
    background: "transparent",
  };
  return (
    <SyntaxHighlighter
      language={language}
      style={atomOneDark}
      customStyle={customStyle}
      wrapLongLines
    >
      {children}
    </SyntaxHighlighter>
  );
};

export default CodeblockText;
