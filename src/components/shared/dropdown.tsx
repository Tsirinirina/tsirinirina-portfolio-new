import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";
import React from "react";
import style from "./dropdown.module.css";
interface UserDropdownProps {
  label: any;
  dropdownItems: DropdownItemsOption[];
  onSelected: (key: any) => void;
}

export interface DropdownItemsOption {
  key: string;
  label: string;
}

export function DropdownUi({
  label,
  dropdownItems,
  onSelected,
}: UserDropdownProps) {
  return (
    <Dropdown className={style.dropdown}>
      <DropdownTrigger className={style.dropdownTrigger}>
        <LabelWrapper>{label}</LabelWrapper>
      </DropdownTrigger>
      <DropdownMenu
        className={style.dropdownMenu}
        aria-label="Dynamic Actions"
        onAction={(key) => onSelected(key)}
      >
        {dropdownItems &&
          dropdownItems.map((_item, _i) => (
            <DropdownItem key={_item.key} className={style.dropdownItem}>
              {_item.label}
            </DropdownItem>
          ))}
      </DropdownMenu>
    </Dropdown>
  );
}

const LabelWrapper: React.FC<any> = React.forwardRef(
  ({ children, ...props }, ref) => (
    <div ref={ref as any} {...props} className={style.labelWrapper}>
      {children}
    </div>
  )
);
