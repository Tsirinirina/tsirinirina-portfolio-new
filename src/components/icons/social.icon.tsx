import {
  FaLinkedin,
  FaPhone,
  FaFacebook,
  FaFacebookMessenger,
  FaInstagram,
  FaGithub,
  FaWhatsapp,
  FaSkype,
} from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { PiMicrosoftOutlookLogoThin } from "react-icons/pi";

const SocialIcon: React.FC<{ type: string }> = ({ type }) => {
  switch (type) {
    case "Gmail":
      return <SiGmail size={24} color="#D14836" />; // Rouge Gmail
    case "Outlook":
      return <PiMicrosoftOutlookLogoThin size={24} color="#0072C6" />; // Bleu Outlook
    case "Facebook":
      return <FaFacebook size={24} color="#1877F2" />; // Bleu Facebook
    case "Messenger":
      return <FaFacebookMessenger size={24} color="#00B2FF" />; // Bleu Messenger
    case "Linkedin":
      return <FaLinkedin size={24} color="#0A66C2" />; // Bleu LinkedIn
    case "Instagram":
      return <FaInstagram size={24} color="#E1306C" />; // Dégradé Instagram (approximé)
    case "Github":
      return <FaGithub size={24} color="#181717" />; // Noir GitHub
    case "WhatsApp":
      return <FaWhatsapp size={24} color="#25D366" />; // Vert WhatsApp
    case "Skype":
      return <FaSkype size={24} color="#00AFF0" />; // Bleu Skype
    default:
      return <FaPhone size={24} color="#4CAF50" />; // Vert pour le téléphone
  }
};

export default SocialIcon;
