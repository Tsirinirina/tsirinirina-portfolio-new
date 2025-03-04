import { useFormContext, Controller, FieldError } from "react-hook-form";
import styles from "./input.module.css";

import { useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";

export namespace Input {
  type InputProps = {
    name: string;
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
    defaultValue?: any;
    max?: number; // Maximum value for number input
    min?: number; // Minimum value for number input
    maxLength?: number; // Maximum length for text/textarea
    minLength?: number; // Minimum length for text/textarea
    maxHeight?: number; // Maximum height for textarea
    minHeight?: number; // Minimum height for textarea
    options?: { label: string; value: any }[]; // For select input
    [key: string]: any;
  };

  export const Text: React.FC<InputProps> = ({
    name,
    placeholder,
    required = true,
    disabled = false,
    defaultValue = "",
    maxLength,
    minLength,
    ...rest
  }) => {
    const {
      control,
      formState: { errors },
    } = useFormContext();

    return (
      <div className={styles.inputField}>
        <Controller
          name={name}
          control={control}
          defaultValue={defaultValue}
          rules={{
            required: required ? "Ce champ est obligatoire" : false,
            maxLength: maxLength
              ? {
                  value: maxLength,
                  message: `Maximum ${maxLength} characters allowed`,
                }
              : undefined,
            minLength: minLength
              ? {
                  value: minLength,
                  message: `Minimum ${minLength} characters required`,
                }
              : undefined,
          }}
          render={({ field }) => (
            <div className={`lato ${styles.inputContainerError}`}>
              <input
                {...field}
                type="text"
                placeholder={placeholder}
                disabled={disabled}
                className={errors[name] ? styles.inputError : styles.input}
                value={field.value || ""}
                {...rest}
              />
              <ErrorMessage error={errors[name] as any} />
            </div>
          )}
        />
      </div>
    );
  };
  export const TextArea: React.FC<InputProps> = ({
    name,
    placeholder,
    required = true,
    disabled = false,
    defaultValue = "",
    maxLength,
    minLength,
    ...rest
  }) => {
    const {
      control,
      formState: { errors },
    } = useFormContext();

    return (
      <div className={styles.inputField}>
        <Controller
          name={name}
          control={control}
          defaultValue={defaultValue}
          rules={{
            required: required ? "Ce champ est obligatoire" : false,
            maxLength: maxLength
              ? {
                  value: maxLength,
                  message: `Maximum ${maxLength} characters allowed`,
                }
              : undefined,
            minLength: minLength
              ? {
                  value: minLength,
                  message: `Minimum ${minLength} characters required`,
                }
              : undefined,
          }}
          render={({ field }) => (
            <div className={`lato ${styles.inputContainerError} `}>
              <textarea
                {...field}
                placeholder={placeholder}
                disabled={disabled}
                className={errors[name] ? styles.inputError : styles.input}
                value={field.value || ""}
                style={{
                  minHeight: "60px",
                  maxHeight: "100px",
                  // maxWidth: "500px",
                  resize: "vertical",
                }}
                {...rest}
              ></textarea>
              <ErrorMessage error={errors[name] as any} />
            </div>
          )}
        />
      </div>
    );
  };
  export const Email: React.FC<InputProps> = ({
    name,
    placeholder,
    required = true,
    disabled = false,
    defaultValue = "",
    ...rest
  }) => {
    const {
      control,
      formState: { errors },
    } = useFormContext();

    return (
      <div className={styles.inputField}>
        <Controller
          name={name}
          control={control}
          defaultValue={defaultValue}
          rules={{
            required: required ? "Ce champ est obligatoire" : false,
            pattern: {
              value: emailRegex,
              message: "Adresse e-mail invalide",
            },
          }}
          render={({ field }) => (
            <div className={`${styles.inputContainerError}`}>
              <input
                {...field}
                type="email"
                placeholder={placeholder}
                disabled={disabled}
                className={errors[name] ? styles.inputError : styles.input}
                value={field.value || ""}
                {...rest}
              />
              <ErrorMessage error={errors[name] as any} />
            </div>
          )}
        />
      </div>
    );
  };

  export const Password: React.FC<InputProps> = ({
    name,
    placeholder,
    required = true,
    disabled = false,
    defaultValue = "",
    maxLength,
    minLength,
    ...rest
  }) => {
    const [showPassword, setShowPassword] = useState(false);
    const {
      control,
      formState: { errors },
    } = useFormContext();

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    return (
      <div className={styles.inputField}>
        <Controller
          name={name}
          control={control}
          defaultValue={defaultValue}
          rules={{
            required: required ? "Ce champ est obligatoire" : false,
            maxLength: maxLength
              ? {
                  value: maxLength,
                  message: `Maximum ${maxLength} characters allowed`,
                }
              : undefined,
            minLength: minLength
              ? {
                  value: minLength,
                  message: `Minimum ${minLength} characters required`,
                }
              : undefined,
          }}
          render={({ field }) => (
            <div className={`${styles.inputContainerError}`}>
              <div className={styles.inputWithIcon}>
                <input
                  {...field}
                  type={showPassword ? "text" : "password"}
                  placeholder={placeholder}
                  disabled={disabled}
                  className={errors[name] ? styles.inputError : styles.input}
                  value={field.value || ""}
                  {...rest}
                />
                <span
                  className={styles.icon}
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <LuEyeOff /> : <LuEye />}
                </span>
              </div>
              <ErrorMessage error={errors[name] as any} />
            </div>
          )}
        />
      </div>
    );
  };

  export const Number: React.FC<InputProps> = ({
    name,
    placeholder,
    required = true,
    disabled = false,
    defaultValue = "",
    max,
    min = 0,
    ...rest
  }) => {
    const {
      control,
      formState: { errors },
    } = useFormContext();

    return (
      <div className={styles.inputField}>
        <Controller
          name={name}
          control={control}
          defaultValue={defaultValue}
          rules={{
            required: required ? "Ce champ est obligatoire" : false,
            max: max
              ? { value: max, message: `Maximum value is ${max}` }
              : undefined,
            min: min
              ? { value: min, message: `Minimum value is ${min}` }
              : undefined,
          }}
          render={({ field }) => (
            <div className={`${styles.inputContainerError}`}>
              <input
                {...field}
                type="number"
                placeholder={placeholder}
                disabled={disabled}
                max={max}
                min={min}
                className={errors[name] ? styles.inputError : styles.input}
                value={field.value !== undefined ? field.value : ""}
                {...rest}
              />
              <ErrorMessage error={errors[name] as any} />
            </div>
          )}
        />
      </div>
    );
  };

  export const Select: React.FC<InputProps> = ({
    name,
    placeholder,
    required = true,
    disabled = false,
    options = [],
    defaultValue = "",
    ...rest
  }) => {
    const {
      control,
      formState: { errors },
    } = useFormContext();

    return (
      <div className={styles.inputField}>
        <Controller
          name={name}
          control={control}
          defaultValue={defaultValue}
          rules={{ required: required ? "Ce champ est obligatoire" : false }}
          render={({ field }) => (
            <div className={styles.inputContainer}>
              <select
                {...field}
                disabled={disabled}
                className={errors[name] ? styles.inputError : styles.input}
                value={field.value || ""}
                {...rest}
              >
                {placeholder && (
                  <option value="" disabled>
                    {placeholder}
                  </option>
                )}
                {options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <ErrorMessage error={errors[name] as any} />
            </div>
          )}
        />
      </div>
    );
  };

  const ErrorMessage: React.FC<{ error?: FieldError }> = ({ error }) => {
    if (!error) return null;
    return <span className={styles.error}>{error.message}</span>;
  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
}
