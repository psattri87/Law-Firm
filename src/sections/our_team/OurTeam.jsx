import React from "react";
import styles from "./OurTeam.module.css";
import Card from "../../components/card/Card";
import Avatar from "../../components/avatar/Avatar";

const importAll = (r) => {
  return r.keys().map(r);
};

const images = importAll(
  require.context("../../assets/ourTeam", false, /\.(png|jpe?g|svg)$/)
);

const teamData = [
  { name: "Danial Def", cases: 301, image: images[0] },
  { name: "Sanfole", cases: 850, image: images[1] },
  { name: "Casforila", cases: 470, image: images[2] },
  { name: "Colleen", cases: 180, image: images[3] },
  { name: "Haldone", cases: 212, image: images[4] },
  { name: "Nik Jeo", cases: 350, image: images[5] },
];

function OurTeam() {
  return (
    <div className={styles.container}>
      <h1>Our Team</h1>
      <div className={styles.gridContainer}>
        {teamData.map((item, index) => {
          return (
            <Card key={index} className={styles.gridItem}>
              <Avatar className={styles.avatar}>
                <img src={item.image} alt="profile" />
              </Avatar>
              <div>
                <h2>{item.name}</h2>
                <h4>{item.cases} Cases</h4>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default OurTeam;
