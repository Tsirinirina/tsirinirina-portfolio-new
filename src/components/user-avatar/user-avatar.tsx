import { Avatar } from "@nextui-org/avatar";
import React from "react";
import style from "./user-avatar.module.css";

interface UserAvatarProps {
  photoUri: string;
  name?: string;
}

export const UserAvatar: React.FC<UserAvatarProps> = ({
  photoUri,
  name = "Photo",
}) => {
  return (
    <div className={style.container}>
      <Avatar src={photoUri} name={name} isBordered />
    </div>
  );
};
