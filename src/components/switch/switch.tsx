import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import styles from "./switch.module.css";

interface SwitchProps {
  name: string;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
}

export default function Switch({
  name,
  defaultChecked = false,
  onChange,
  disabled = false,
}: SwitchProps) {
  const { control } = useFormContext();
  const [isChecked, setIsChecked] = useState(defaultChecked);

  const handleToggle = (onChange: (checked: boolean) => void) => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    onChange?.(newChecked);
  };

  return (
    <div className={styles.switchContainer}>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultChecked}
        render={({ field }) => (
          <label className={styles.switch}>
            <input
              type="checkbox"
              checked={isChecked}
              disabled={disabled}
              onChange={() => handleToggle(field.onChange)}
              className={styles.input}
            />
            <span className={styles.slider}></span>
          </label>
        )}
      />
    </div>
  );
}
