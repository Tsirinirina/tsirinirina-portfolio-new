import { DateFormat } from "@/utils/date.utils";
import Experience from "../experience/experience";
import styles from "./experience-container.module.css";
import data from "./experiences.json";
interface ExperienceContainerProps {}

const ExperienceContainer: React.FC<ExperienceContainerProps> = () => {
  return (
    <div className={styles.container}>
      {data.experiences.map((item, _i) => (
        <Experience
          key={`xp_${_i}`}
          position={item.position}
          startDate={new DateFormat(item.start_date).toFullYear().toString()}
          endDate={
            item.end_date
              ? new DateFormat(item.end_date).toFullYear().toString()
              : "Présent"
          }
          companyName={item.company_name}
          location={item.location}
          contractType={item.contract_type}
          descriptions={item.description}
          missions={item.missions}
          technoList={item.technologies_used}
        />
      ))}
    </div>
  );
};

export default ExperienceContainer;
