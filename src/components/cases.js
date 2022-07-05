import React from "react";
import { ReactComponent as LeftArrow } from "../assets/arrow-left.svg";
import { ReactComponent as RightArrow } from "../assets/arrow-right.svg";

let caseStudies = [
  {
    id: 1,
    subtitle: "Curology",
    title: "A custom formula for your skin's unique needs",
    img: "curology-min.png",
  },
  {
    id: 2,
    subtitle: "Lumin",
    title: "For your bast look",
    img: "lumin-min.png",
  },
  {
    id: 3,
    subtitle: "Yourspace",
    title: "Open space floor plans for your next venture",
    img: "yourspace-min.png",
  },
];

const Cases = () => {
  return (
    <section className="cases">
      <div className="container-fluid">
        <div className="cases-navigation">
          <div className="case-arrow prev disabled">
            <LeftArrow />
          </div>
          <div className="case-arrow next">
            <RightArrow />
          </div>
        </div>

        <div className="row">
          {caseStudies.map((item) => (
            <div className="case" key={item.id}>
              <div className="case-details">
                <span>{item.subtitle}</span>
                <h2>{item.title}</h2>
              </div>
              <div className="case-img">
                <img src={require(`../assets/${item.img}`)} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
