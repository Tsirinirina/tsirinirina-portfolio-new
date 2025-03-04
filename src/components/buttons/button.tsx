import { createStyleRegistry } from "styled-jsx";
import styles from "./button.module.css";
import { BiLoaderAlt } from "react-icons/bi";
import { RxReload } from "react-icons/rx";
export namespace Button {
  type ButtonProps = {
    onClick?: () => void;
    children: React.ReactNode;
    styleType?:
      | "default"
      | "primary"
      | "secondary"
      | "danger"
      | "tertiary"
      | "success"
      | "outline-primary"
      | "outline-secondary"
      | "outline-danger"
      | "outline-success"
      | "outline-tertiary"
      | "outline";
    [key: string]: any;
    isLoading: boolean;
    width?: string;
    height?: string;
    disabled?: boolean;
    className?: string;
  };

  const baseClass = (styleType: string) => {
    switch (styleType) {
      case "primary":
        return styles.primary;
      case "tertiary":
        return styles.tertiary;
      case "secondary":
        return styles.secondary;
      case "danger":
        return styles.danger;
      case "success":
        return styles.success;
      case "outline-primary":
        return styles.outlinePrimary;
      case "outline-tertiary":
        return styles.outlineTertiary;
      case "outline-primary":
        return styles.outlinePrimary;
      case "outline-secondary":
        return styles.outlineSecondary;
      case "outline-success":
        return styles.outlineSuccess;
      case "outline-danger":
        return styles.outlineDanger;
      case "outline":
        return styles.outlineDefault;
      default:
        return styles.default;
    }
  };

  export const Submit: React.FC<ButtonProps> = ({
    children,
    styleType = "primary",
    isLoading,
    width,
    height,
    disabled = false,
    className,
    ...rest
  }) => {
    return (
      <button
        type="submit"
        className={`${styles.button} ${styles.primary} ${baseClass(
          styleType
        )} ${className}`}
        style={{ width, height }}
        disabled={isLoading ?? disabled}
        {...rest}
      >
        {isLoading ? (
          <BiLoaderAlt size={18} className={styles.loading} />
        ) : (
          children
        )}
      </button>
    );
  };

  export const Reset: React.FC<ButtonProps> = ({
    children,
    styleType = "secondary",
    isLoading,
    width,
    height,
    disabled = false,
    ...rest
  }) => {
    return (
      <button
        type="reset"
        className={`${styles.button} ${baseClass(styleType)}`}
        style={{ width, height }}
        disabled={isLoading ?? disabled}
        {...rest}
      >
        {isLoading ? (
          <BiLoaderAlt size={18} className={styles.loading} />
        ) : (
          children
        )}
      </button>
    );
  };

  export const DefaultButton: React.FC<ButtonProps> = ({
    children,
    styleType = "default",
    isLoading,
    width,
    height,
    disabled = false,
    ...rest
  }) => {
    return (
      <button
        type="button"
        className={`${styles.button} ${baseClass(styleType)}`}
        style={{ width, height }}
        disabled={disabled}
        {...rest}
      >
        {isLoading ? (
          <BiLoaderAlt size={18} className={styles.loading} />
        ) : (
          children
        )}
      </button>
    );
  };
}
