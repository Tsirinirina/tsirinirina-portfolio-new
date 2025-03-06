import fs from "fs";
import path from "path";

export enum Entity {
  "Pesonal",
  "Certificats",
  "Experiences",
  "Projects",
  "Skills",
  "Socials",
  "Urls",
}

const fileName = (entity: Entity) => {
  switch (entity) {
    case Entity.Pesonal:
      return "personal.json";
    case Entity.Certificats:
      return "certificats.json";
    case Entity.Experiences:
      return "experiences.json";
    case Entity.Projects:
      return "projects.json";
    case Entity.Skills:
      return "skills.json";
    case Entity.Socials:
      return "socials.json";
    case Entity.Urls:
      return "urls.json";
  }
};
export const readFile = (entity: Entity) => {
  const filePath = path.join(process.cwd(), "src/data", fileName(entity));
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
};

export const writeFile = (entity: Entity, updatedData: any) => {
  const filePath = path.join(process.cwd(), "src/data", fileName(entity));
  fs.writeFileSync(filePath, JSON.stringify(updatedData, null, 2));
  return readFile(entity);
};
