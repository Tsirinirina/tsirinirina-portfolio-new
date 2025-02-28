import SocialIcon from "@/components/icons/social.icon";
import styles from "./social.module.css";

interface SocialProps {
  type:
    | "Gmail"
    | "Outlook"
    | "Facebook"
    | "Messenger"
    | "Linkedin"
    | "Instagram"
    | "Github"
    | "WhatsApp"
    | "Skype"
    | "Message"
    | "Tel";
  link: string;
}

const Social: React.FC<SocialProps> = ({ type, link }) => {
  const href = () => {
    switch (type) {
      case "Gmail":
        return `mailto:${link}?subject=Contact%20depuis%20le%20portfolio&body=Bonjour,%20je%20souhaite%20en%20savoir%20plus."`;
      case "Outlook":
        return `mailto:${link}?subject=Contact%20depuis%20le%20portfolio&body=Bonjour,%20je%20souhaite%20en%20savoir%20plus."`;
      case "Facebook":
        return `mailto:${link}`;
      case "Messenger":
        return `https://m.me/${link}?ref=Bonjour`;
      case "Linkedin":
        return `https://www.linkedin.com/in/${link}`;
      case "Instagram":
        return `https://www.instagram.com/${link}`;
      case "Github":
        return `https://github.com/${link}`;
      case "WhatsApp":
        return `https://wa.me/${link}?text=Bonjour%20je%20viens%20de%20votre%20portfoli`;
      case "Skype":
        return `skype:link?chat${link}`;
      case "Tel":
        return `tel:${link}`;
      case "Message":
        return `sms:${link}?body=Bonjour,%20je%20viens%20de%20votre%20portfolio`;
      default:
        return `tel:${link}`;
    }
  };
  return (
    <a href={href()} target="_blank">
      <SocialIcon type={type} />
    </a>
  );
};

export default Social;
