import { Text } from "@/components/text/text";
import Project from "../project/project";
import styles from "./projects.container.module.css";
import { useEffect, useMemo, useState } from "react";
import {
  Project as ProjectTModel,
  ProjectType,
} from "@/services/project/project";
import Loader from "@/components/loader/loader";

interface DataTypes {
  id: number;
  type: string;
  count: number;
  isActive: boolean;
}

interface ProjectContainerProps {
  data: ProjectTModel[];
}

const ProjectsContainer: React.FC<ProjectContainerProps> = ({ data }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [projects, setProjects] = useState<ProjectTModel[]>(data);
  const [types, setTypes] = useState<DataTypes[]>([
    {
      id: 0,
      type: "Tous",
      count: data.length,
      isActive: true,
    },
  ]);

  const enableLink = (id: number) => {
    setLoading(true);
    const newTypes = types.map((item) =>
      item.id == id ? { ...item, isActive: true } : { ...item, isActive: false }
    );
    setTypes(newTypes);
  };

  useEffect(() => {
    if (data) {
      countProjectType();
      setLoading(false);
    }
  }, []);

  const filterProject = (item: string) => {
    if (data) {
      setLoading(false);
      if (item === "Tous") {
        setProjects(data);
      } else {
        const projectFiltered = data.filter(
          (project) =>
            project.type.toString().toLowerCase() ===
            item.toString().toLowerCase()
        );
        setProjects(projectFiltered);
      }
    }
  };

  const countProjectType = () => {
    const countType = data.reduce((acc: any, item) => {
      acc[item.type] = (acc[item.type] || 0) + 1;
      return acc;
    }, {});

    setTypes([
      { id: 0, type: "Tous", isActive: true, count: data.length },
      ...Object.keys(countType).map((item, id) => ({
        id: id + 1,
        type: item,
        isActive: false,
        count: countType[item],
      })),
    ]);
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
                // size={item.priority === "high" ? "LG" : "MD"}
                size={"MD"}
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
