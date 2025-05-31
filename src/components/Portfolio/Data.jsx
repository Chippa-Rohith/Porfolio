import CarrerPilot from "../../assets/CarrerPilot.png";
import VGR from "../../assets/VGR.png";
import AIWADROBE from "../../assets/AIWarobe.png"
import DEFTUNES from "../../assets/Deftunes.png"

export const projectsData = [
  {
    id: 1,
    image: DEFTUNES,
    title: "DeFtunes Data Pipeline And Analytics",
    category: "DE",
    description: "Engineered and deployed a comprehensive data pipeline on AWS using a medallion architecture with an S3 data lake and Redshift data warehouse. Implemented robust ETL processes via AWS Glue for data extraction (RDS PostgreSQL, REST API) and transformation to Apache Iceberg format. Developed a star schema data model and analytical views in Redshift using dbt, orchestrating daily runs with Apache Airflow and AWS Glue Data Quality checks for data integrity.",
    link:"https://github.com/Chippa-Rohith/DeFtunes-Data-Pipeline-ETL-Data-Modeling-Quality-and-Orchestration"
  },
  {
    id: 2,
    image: AIWADROBE,
    title: "AI Wardrobe – Fashion Item Attribute Prediction",
    category: "AI/ML",
    description: "Developed a data-driven wardrobe management system featuring a ResNet50-based deep learning model for clothing item classification from images. Engineered robust data pipelines for image preprocessing and multi-label classification, achieving approximately 95% training accuracy on key attributes. Built interactive dashboards to visualize wardrobe data and enabled CSV/PDF report generation via APIs for insights like seasonal trends.",
    link:"https://vimeo.com/1040597817?share=copy"
  },
  {
    id: 3,
    image: CarrerPilot,
    title: "HireHub",
    category: "web",
    description: "HireHub is a web platform that connects job seekers with employers. Job seekers can discover and apply for job openings, while recruiters can post job listings and review submitted applications.",
    link:"https://vimeo.com/986180979?share=copy#t=0"
  },
  {
    id: 4,
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
  },
  {
    name: "DE"
  }
];
