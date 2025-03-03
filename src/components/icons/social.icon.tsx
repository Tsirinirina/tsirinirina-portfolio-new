import {
  FaLinkedin,
  FaPhone,
  FaFacebook,
  FaFacebookMessenger,
  FaInstagram,
  FaGithub,
  FaWhatsapp,
  FaSkype,
  FaMessage,
} from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { PiMicrosoftOutlookLogoThin } from "react-icons/pi";
import { TbWorldWww } from "react-icons/tb";

const SocialIcon: React.FC<{ type: string }> = ({ type }) => {
  switch (type) {
    case "Gmail":
      return <SiGmail size={32} color="#D14836" />;
    case "Outlook":
      return <PiMicrosoftOutlookLogoThin size={32} color="#0072C6" />;
    case "Facebook":
      return <FaFacebook size={32} color="#1877F2" />;
    case "Messenger":
      return <FaFacebookMessenger size={32} color="#00B2FF" />;
    case "Linkedin":
      return <FaLinkedin size={32} color="#0A66C2" />;
    case "Instagram":
      return <FaInstagram size={32} color="#E1306C" />;
    case "Github":
      return <FaGithub size={32} color="#181717" />;
    case "WhatsApp":
      return <FaWhatsapp size={32} color="#25D366" />;
    case "Skype":
      return <FaSkype size={32} color="#00AFF0" />;
    case "Message":
      return <FaMessage size={32} color="#00AFF0" />;
    case "Website":
      return <TbWorldWww size={32} color="#00B4D8" />;
    default:
      return <FaPhone size={32} color="#4CAF50" />;
  }
};

export default SocialIcon;
