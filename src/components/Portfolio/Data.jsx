import CarrerPilot from "../../assets/CarrerPilot.png";
import VGR from "../../assets/VGR.png";

export const projectsData = [
  {
    id: 1,
    image: CarrerPilot,
    title: "HireHub",
    category: "web",
    description: "HireHub is a web platform that connects job seekers with employers. Job seekers can discover and apply for job openings, while recruiters can post job listings and review submitted applications.",
    link:"https://hirehub.up.railway.app/"
  },
  {
    id: 2,
    image: VGR,
    title: "Virtual Gesture Recognization system",
    category: "AI/ML",
    description: " In this project, we use the detection of hand gestures which are portrayed by a webcam linked with a computer. OpenCV is an open-source library that mainly focuses on real-time image processing. Here we capture hand movements by applying a machine learning algorithm that is pre-trained with datasets to detect hand gestures. By using the PYAUTOGUI python library we perform mouse operations accordingly.",
    link:"https://drive.google.com/file/d/1Y4rbMdUENOPFKVAVYMAffNFZla5PSys5/view?usp=drive_link"
  },
];

// projects
export const projectsNav = [
  {
    name: "all",
  },
  {
    name: "web",
  },
  {
    name: "AI/ML",
  }
];
