import "./download.css";
import { motion } from "framer-motion";
import { FaGoogleDrive } from "react-icons/fa";

interface DownloaderProps {
  title: string;
  link: string;
}

const Downloader: React.FC<DownloaderProps> = ({ title, link }) => {
  const downloadFile = () => {
    const anchor = document.createElement("a");
    anchor.href = link;
    anchor.download = title;
    anchor.target = "_blank";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };
  return (
    <motion.button
      className="download-btn pixel-corners"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.9 }}
      onClick={downloadFile}
    >
      <div className="button-content">
        <div className="svg-container">
          <FaGoogleDrive className="download-icon" size={12} color="#4285F4" />
        </div>
        <div className="text-container">
          <div className="text">{title}</div>
        </div>
      </div>
    </motion.button>
  );
};

export default Downloader;
