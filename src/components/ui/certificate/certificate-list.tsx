import { DateFormat } from "@/utils/date.utils";
import styles from "./certificate-list.module.css";
import data from "./certificats.json";
const CertificateList = () => {
  return (
    <div>
      {data.certificats.map((i, _index) => (
        <li key={`certificate_${_index}`}>
          {i.name} : {i.institute}
          {i.fullDate
            ? new DateFormat(
                "",
                i.startDate,
                i.endDate,
                i.fullDate
              ).toTimelineDate()
            : new DateFormat(i.startDate).toTimeLineDatepresent()}
        </li>
      ))}
    </div>
  );
};

export default CertificateList;
