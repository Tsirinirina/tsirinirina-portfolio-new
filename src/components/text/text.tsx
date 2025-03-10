"use client";
export namespace Text {
  type BaseProps = {
    children: React.ReactNode;
    fontSize?: string;
    fontWeight?: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "bold";
    fontStyle?: "normal" | "italic" | "revert";
    textDecoration?: string;
    color?: string;
    className?: any;
    customStyles?: React.CSSProperties;
    fontFamily?: any;
    textLength?: number;
  };

  type TitleProps = {
    tag: "h1" | "h2" | "h3";
  };

  export const Title: React.FC<TitleProps & BaseProps> = ({
    children,
    tag,
    fontSize = tag === "h1"
      ? "2rem"
      : tag === "h2"
      ? "1.6rem"
      : tag === "h3"
      ? "1.4rem"
      : "1rem",
    fontWeight = "700",
    fontStyle,
    textDecoration,
    color = "inherit",
    className = "",
    customStyles = {},
    fontFamily,
  }) => {
    const defaultFontSizes: Record<TitleProps["tag"], string> = {
      h1: "2.5rem",
      h2: "2rem",
      h3: "1.75rem",
    };
    const resolvedFontSize = fontSize || defaultFontSizes[tag];
    const style = {
      fontSize: resolvedFontSize,
      fontWeight,
      fontStyle,
      textDecoration,
      color,
      // fontFamily,
      ...customStyles,
    };

    const Tag = tag as keyof JSX.IntrinsicElements | any;

    return (
      <Tag className={`text-title ${className || ""}`} style={style as any}>
        {children}
      </Tag>
    );
  };

  export const Subtitle: React.FC<BaseProps> = ({
    children,
    fontSize = "1.3rem",
    fontWeight = "600",
    fontStyle,
    textDecoration,
    color = "inherit",
    className = "",
    customStyles = {},
    fontFamily,
  }) => {
    return (
      <h2
        className={`text-subtitle ${className || ""}`}
        style={{
          fontSize,
          fontWeight,
          fontStyle,
          textDecoration,
          color,
          ...customStyles,
        }}
      >
        {children}
      </h2>
    );
  };

  export const Description: React.FC<BaseProps> = ({
    children,
    fontSize = "1rem",
    fontWeight = "200",
    fontStyle = "normal",
    textDecoration,
    color = "inherit",
    className = "",
    customStyles = {},
    textLength = 50,
    fontFamily,
  }) => {
    const breakText = (text: string) => {
      const length = text.split(" ").length;
      const slicedText = text
        .split(" ")
        .slice(0, textLength)
        .join(" ")
        .concat("...");
      if (length > textLength) {
        return slicedText;
      }
      return text;
    };
    return (
      <p
        className={`text-description ${className || ""}`}
        style={{
          fontSize,
          fontWeight,
          fontStyle,
          textDecoration,
          color,
          ...customStyles,
        }}
      >
        {breakText(children as any)}
      </p>
    );
  };

  export const Text: React.FC<BaseProps> = ({
    children,
    fontSize = "1rem",
    fontWeight = "400",
    fontStyle,
    textDecoration,
    color = "inherit",
    className = "",
    customStyles = {},
    fontFamily,
  }) => {
    return (
      <span
        className={`text-generic ${className || ""}`}
        style={{
          fontSize,
          fontWeight,
          fontStyle,
          textDecoration,
          color,
          ...customStyles,
        }}
      >
        {children}
      </span>
    );
  };
}
