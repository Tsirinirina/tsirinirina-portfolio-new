import { TechnoList } from "@/utils/techno.list";
import React from "react";
import {
  IoLogoAndroid,
  IoLogoAngular,
  IoLogoReact,
  IoLogoNodejs,
  IoLogoJavascript,
  IoLogoPython,
} from "react-icons/io5";
import {
  SiTypescript,
  SiPhp,
  SiRuby,
  SiGo,
  SiSwift,
  SiKotlin,
  SiRust,
  SiDart,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiKubernetes,
  SiLaravel,
  SiDjango,
  SiFlask,
  SiSpring,
  SiTailwindcss,
  SiBootstrap,
  SiJquery,
  SiWebpack,
  SiGraphql,
  SiWordpress,
  SiNestjs,
  SiFigma,
  SiGit,
  SiGithubactions,
} from "react-icons/si";
import { RiNextjsFill, RiJavaFill } from "react-icons/ri";

interface LogoTechnoProps {
  techno: string;
  className?: any;
  size?: number;
  colorized?: boolean; // Nouvelle propriété
}

const LogoTechno: React.FC<LogoTechnoProps> = ({
  techno,
  className,
  size = 24,
  colorized = true,
}) => {
  const mapStringToEnum = (value: string): TechnoList | undefined => {
    return Object.values(TechnoList).includes(value as TechnoList)
      ? (value as TechnoList)
      : undefined;
  };

  const enumTechno = mapStringToEnum(techno) ?? TechnoList.ANGULAR;

  const getColor = (enumTechno: TechnoList): string => {
    switch (enumTechno) {
      case TechnoList.JAVASCRIPT:
        return "#F7DF1E";
      case TechnoList.TYPESCRIPT:
        return "#3178C6";
      case TechnoList.NEXTJS:
        return "#FFF";
      case TechnoList.NESTJS:
        return "#E0234E";
      case TechnoList.FIGMA:
        return "#F24E1E";
      case TechnoList.PYTHON:
        return "#3776AB";
      case TechnoList.PHP:
        return "#4F5B93";
      case TechnoList.RUBY:
        return "#CC342D";
      case TechnoList.GO:
        return "#00ADD8";
      case TechnoList.SWIFT:
        return "#FA7343";
      case TechnoList.KOTLIN:
        return "#0095D5";
      case TechnoList.RUST:
        return "#DEA584";
      case TechnoList.DART:
        return "#0175C2";
      case TechnoList.REACTJS:
        return "#61DAFB";
      case TechnoList.ANGULAR:
        return "#DD0031";
      case TechnoList.TAILWINDCSS:
        return "#38B2AC";
      case TechnoList.BOOTSTRAP:
        return "#7952B3";
      case TechnoList.JQUERY:
        return "#0769AD";
      case TechnoList.NODEJS:
        return "#339933";
      case TechnoList.LARAVEL:
        return "#FF2D20";
      case TechnoList.DJANGO:
        return "#092E20";
      case TechnoList.FLASK:
        return "#000000";
      case TechnoList.SPRING:
        return "#6DB33F";
      case TechnoList.MYSQL:
        return "#4479A1";
      case TechnoList.POSTGRESQL:
        return "#336791";
      case TechnoList.MONGODB:
        return "#47A248";
      case TechnoList.DOCKER:
        return "#2496ED";
      case TechnoList.KUBERNETES:
        return "#326CE5";
      case TechnoList.GRAPHQL:
        return "#E10098";
      case TechnoList.WORDPRESS:
        return "#21759B";
      case TechnoList.WEBPACK:
        return "#8DD6F9";
      case TechnoList.JAVA:
        return "#8DD6F9";
      case TechnoList.GITHUB_ACTIONS:
        return "#8DD6F9";
      default:
        return "#000000";
    }
  };

  const color = colorized ? getColor(enumTechno) : undefined;

  switch (enumTechno) {
    case TechnoList.JAVASCRIPT:
      return (
        <IoLogoJavascript className={className} size={size} color={color} />
      );
    case TechnoList.TYPESCRIPT:
      return <SiTypescript className={className} size={size} color={color} />;
    case TechnoList.NEXTJS:
      return <RiNextjsFill className={className} size={size} color={color} />;
    case TechnoList.NESTJS:
      return <SiNestjs className={className} size={size} color={color} />;
    case TechnoList.PYTHON:
      return <IoLogoPython className={className} size={size} color={color} />;
    case TechnoList.FIGMA:
      return <SiFigma className={className} size={size} color={color} />;
    case TechnoList.PHP:
      return <SiPhp className={className} size={size} color={color} />;
    case TechnoList.RUBY:
      return <SiRuby className={className} size={size} color={color} />;
    case TechnoList.GO:
      return <SiGo className={className} size={size} color={color} />;
    case TechnoList.SWIFT:
      return <SiSwift className={className} size={size} color={color} />;
    case TechnoList.KOTLIN:
      return <SiKotlin className={className} size={size} color={color} />;
    case TechnoList.RUST:
      return <SiRust className={className} size={size} color={color} />;
    case TechnoList.DART:
      return <SiDart className={className} size={size} color={color} />;
    case TechnoList.REACTJS:
      return <IoLogoReact className={className} size={size} color={color} />;
    case TechnoList.ANGULAR:
      return <IoLogoAngular className={className} size={size} color={color} />;
    case TechnoList.TAILWINDCSS:
      return <SiTailwindcss className={className} size={size} color={color} />;
    case TechnoList.BOOTSTRAP:
      return <SiBootstrap className={className} size={size} color={color} />;
    case TechnoList.JQUERY:
      return <SiJquery className={className} size={size} color={color} />;
    case TechnoList.NODEJS:
      return <IoLogoNodejs className={className} size={size} color={color} />;
    case TechnoList.LARAVEL:
      return <SiLaravel className={className} size={size} color={color} />;
    case TechnoList.DJANGO:
      return <SiDjango className={className} size={size} color={color} />;
    case TechnoList.FLASK:
      return <SiFlask className={className} size={size} color={color} />;
    case TechnoList.SPRING:
      return <SiSpring className={className} size={size} color={color} />;
    case TechnoList.MYSQL:
      return <SiMysql className={className} size={size} color={color} />;
    case TechnoList.POSTGRESQL:
      return <SiPostgresql className={className} size={size} color={color} />;
    case TechnoList.MONGODB:
      return <SiMongodb className={className} size={size} color={color} />;
    case TechnoList.DOCKER:
      return <SiDocker className={className} size={size} color={color} />;
    case TechnoList.KUBERNETES:
      return <SiKubernetes className={className} size={size} color={color} />;
    case TechnoList.GRAPHQL:
      return <SiGraphql className={className} size={size} color={color} />;
    case TechnoList.WORDPRESS:
      return <SiWordpress className={className} size={size} color={color} />;
    case TechnoList.WEBPACK:
      return <SiWebpack className={className} size={size} color={color} />;
    case TechnoList.JAVA:
      return <RiJavaFill className={className} size={size} color={color} />;
    case TechnoList.GIT:
      return <SiGit className={className} size={size} color={color} />;
    default:
      return <IoLogoAndroid className={className} size={size} color={color} />;
  }
};

export default LogoTechno;
