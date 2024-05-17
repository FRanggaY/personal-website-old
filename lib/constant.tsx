import { FiGithub, FiLinkedin, FiInstagram, FiYoutube } from "react-icons/fi";
import siteMetadata from "./siteMetaData";

export const socialMedias = [
  { name: "Linkedin", icon: <FiLinkedin size={20} />, link: siteMetadata.socialMedia.linkedin },
  { name: "Github", icon: <FiGithub size={20} />, link: siteMetadata.socialMedia.github },
  { name: "Instagram", icon: <FiInstagram size={20}  />, link: siteMetadata.socialMedia.instagram},
  { name: "Youtube", icon: <FiYoutube size={20}  />, link: siteMetadata.socialMedia.youtube },
]
