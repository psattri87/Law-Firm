import React from "react";
import styles from "./About_us.module.css";
import Card from "../../components/card/Card";
import giftIcon from "../../assets/Gift_icon.svg";
import Avatar from "../../components/avatar/Avatar";

const dataAboutUs = [
  {
    image: giftIcon,
    successRate: 98,
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
  },
  {
    image: giftIcon,
    successRate: 100,
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
  },
  {
    image: giftIcon,
    successRate: 100,
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
  },
];

function AboutUs() {
  return (
    <div className={styles.aboutUs}>
      <h1>Why Choose us?</h1>
      <div className={styles.cardContainer}>
        {dataAboutUs.map((data, index) => {
          return (
            <Card key={index}>
              <Avatar>
                <img src={data.image} alt="icon" />
              </Avatar>
              <h2>{data.successRate}% Success Rate</h2>
              <p>
                {data.text}
              </p>
              <button>Read More</button>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default AboutUs;
