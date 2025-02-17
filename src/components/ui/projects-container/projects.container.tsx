import Project from "../project/project";
import styles from "./projects.container.module.css";
import data from "./projects.json";
const ProjectsContainer: React.FC<{}> = ({}) => {
  return (
    <div className={styles.container}>
      {data.projects.map((item, _i) => (
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
        />
      ))}
    </div>
  );
};

export default ProjectsContainer;
