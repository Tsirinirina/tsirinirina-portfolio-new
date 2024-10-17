import styles from "./custom-select.module.css";
import React, { useState } from "react";
import { Controller } from "react-hook-form";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  options: Option[];
  control: any; // TypeScript type for 'control' from 'react-hook-form'
  name: string;
  placeholder?: string;
}

export default function CustomSelect({
  options,
  control,
  name,
  placeholder = "Select an option",
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => {
        const { onChange, value } = field;
        const selectedOption = options.find((opt) => opt.value === value);

        return (
          <div className={styles.selectWrapper}>
            <select
              className={styles.select}
              value={selectedOption?.value || ""}
              onChange={(e) => onChange(e.target.value)}
              onFocus={() => setIsOpen(true)}
              onBlur={() => setIsOpen(false)}
            >
              <option value="" disabled hidden>
                {placeholder}
              </option>
              {options.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                  className={styles.option}
                >
                  {option.label}
                </option>
              ))}
            </select>
            <div className={styles.dropdownIcon}>
              {isOpen ? <LuChevronUp size={20} /> : <LuChevronDown size={20} />}
            </div>
          </div>
        );
      }}
    />
  );
}
