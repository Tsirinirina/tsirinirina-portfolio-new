import { DateFormat } from "@/utils/date.utils";
import styles from "./certificate-list.module.css";
import data from "./certificats.json";
import { LiaCertificateSolid } from "react-icons/lia";
import { CiBookmarkCheck } from "react-icons/ci";
import { FaCertificate } from "react-icons/fa";
import { PiCertificate, PiCertificateBold } from "react-icons/pi";
const CertificateList = () => {
  return (
    <div>
      {data.certificats.map((i, _index) => (
        <li key={`certificate_${_index}`} className={styles.list}>
          <div className={`${styles.header}`}>
            <div className={`lexend-deca ${styles.name}`}>
              <PiCertificate size={18} className={styles.icon} />

              {i.name}
            </div>
            <div className={`${styles.period}`}>
              {i.endDate === "" ? (
                <span className={styles.pending}>En cours</span>
              ) : (
                new DateFormat(i.endDate).toFullYear()
              )}
            </div>
          </div>
          <div className={styles.institut}>{i.institute}</div>
        </li>
      ))}
    </div>
  );
};

export default CertificateList;

{
  /* {i.fullDate
                ? new DateFormat(
                    "",
                    i.startDate,
                    i.endDate,
                    i.fullDate
                  ).toTimelineDate()
                : new DateFormat(i.startDate).toTimeLineDatepresent()} */
}
