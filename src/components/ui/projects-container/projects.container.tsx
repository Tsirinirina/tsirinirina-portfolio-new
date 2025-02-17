import Project from "../project/project";
import styles from "./projects.container.module.css";
import data from "./projects.json";
const ProjectsContainer: React.FC<{}> = ({}) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}></div>
      <div className={styles.filter}></div>
      <div className={styles.content}>
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
            projectLink={item.link}
            projectVersion={item.version}
            status={item.status}
          />
        ))}
        {/* <Project
          key={`projet_item_${1}`}
          title={data.projects[0].title}
          description={data.projects[1].description}
          coverImage={""}
          shortTitle={data.projects[0].shortTitle}
          technoList={data.projects[0].technoList}
          technoElements={data.projects[0].technoElements}
          clientInformation={data.projects[0].clientInformation}
          publishDate={data.projects[0].publishDate}
          startDate={data.projects[0].startDate}
          size={data.projects[0].priority === "high" ? "LG" : "MD"}
        /> */}
      </div>
      <div className={styles.pagination}></div>
    </div>
  );
};

export default ProjectsContainer;
