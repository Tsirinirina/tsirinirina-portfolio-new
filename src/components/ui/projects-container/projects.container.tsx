import { Text } from "@/components/text/text";
import Project from "../project/project";
import styles from "./projects.container.module.css";
import data from "./projects.json";
import { useEffect, useMemo, useState } from "react";
import { Project as ProjectModel } from "@/services/project/project";
import Loader from "@/components/loader/loader";

interface DataTypes {
  id: number;
  type: string;
  isActive: boolean;
}

const ProjectsContainer: React.FC<{}> = ({}) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [types, setTypes] = useState<DataTypes[]>([
    { id: 0, type: "Tous", isActive: true },
  ]);

  const [projects, setProjects] = useState<ProjectModel[]>(data.projects);

  const enableLink = (id: number) => {
    setLoading(true);
    const newTypes = types.map((item) =>
      item.id == id ? { ...item, isActive: true } : { ...item, isActive: false }
    );
    setTypes(newTypes);
  };

  useEffect(() => {
    if (data.projects) {
      setLoading(false);
    }
    if (data.types) {
      setTypes([
        { id: 0, type: "Tous", isActive: true },
        ...data.types.map((item, i) => ({
          id: i + 1,
          type: item,
          isActive: false,
        })),
      ]);
    }
  }, []);

  const filterProject = (item: string) => {
    if (projects) {
      setLoading(false);
      if (item === "Tous") {
        setProjects(data.projects);
      } else {
        const projectFiltered = data.projects.filter(
          (project) =>
            project.type.toString().toLowerCase() ===
            item.toString().toLowerCase()
        );
        setProjects(projectFiltered);
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <Text.Title
          fontFamily={""}
          fontSize="42px"
          tag="h2"
          className={`lexend-deca ${styles.subtitle}`}
        >
          Mes projets
        </Text.Title>
      </div>
      <div className={styles.filter}>
        {types &&
          types.map((item, _i) => (
            <span
              key={`types-${_i}`}
              className={item.isActive ? styles.active : styles.inactive}
              onClick={() => {
                enableLink(item.id);
                filterProject(item.type);
              }}
            >
              {item.type} /
            </span>
          ))}
      </div>
      {loading ? (
        <Loader />
      ) : (
        <div className={styles.content}>
          {projects.length > 0 ? (
            projects.map((item, _i) => (
              <Project
                key={`projet_item_${_i}`}
                title={item.title}
                description={item.description}
                coverImage={""}
                shortTitle={item.shortTitle}
                technoList={item.technoList}
                technoElements={item.technoElements}
                clientInformation={item.clientInformation}
                publishDate={item.publishDate}
                startDate={item.startDate}
                size={item.priority === "high" ? "LG" : "MD"}
                projectLink={item.link}
                projectVersion={item.version}
                status={item.status}
              />
            ))
          ) : (
            <NoData />
          )}
        </div>
      )}

      {/* <div className={styles.pagination}>PAGINATION</div> */}
    </div>
  );
};

export default ProjectsContainer;

const NoData = () => (
  <div className={`${styles.noData} lexend-deca`}>Aucune données</div>
);
