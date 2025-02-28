import { DateFormat } from "@/utils/date.utils";
import Experience from "../experience/experience";
import styles from "./experience-container.module.css";
import data from "./experiences.json";
import { Text } from "@/components/text/text";
interface ExperienceContainerProps {}

const ExperienceContainer: React.FC<ExperienceContainerProps> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <Text.Title
          fontFamily={""}
          fontSize="42px"
          tag="h2"
          className={`gabarito ${styles.subtitle}`}
        >
          Expériences Professionnelles
        </Text.Title>
      </div>
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
          defaultCollapsed={_i === 0 ? true : false}
        />
      ))}
    </div>
  );
};

export default ExperienceContainer;
