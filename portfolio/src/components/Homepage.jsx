import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import SocialMediaLinks from "./SocialMediaLinks";
import Skills from "../Skills";

import BootstrapImage from "../assets/images/bootstrap.png";
import HtmlImage from "../assets/images/html5.png";
import JavascriptImage from "../assets/images/javascript.png";
import ReactImage from "../assets/images/react.png";
import TypescriptImage from "../assets/images/typescript.png";

function Homepage() {
  const items = [
    {
      image: BootstrapImage,
    },
    {
      image: HtmlImage,
    },
    {
      image: JavascriptImage,
    },
    {
      image: ReactImage,
    },
    {
      image: TypescriptImage,
    }
  ];

  const [visibleItems, setVisibleItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const delay = 1000;

    const interval = setInterval(() => {
      if (currentIndex < items.length) {
        setVisibleItems((prevItems) => [...prevItems, items[currentIndex]]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(interval);
      }
    }, delay);

    return () => {
      clearInterval(interval);
    }
  }, [items, currentIndex]);

  return (
    <div className="pageContainer">
      <section>
        <div className="skillsObjects">
          <Skills />
          <ul className="listItems">
            {visibleItems.map((item, index) => (
              <li key={index}>
                <img src={item.image} alt={item.item} /> {item.item}
              </li>
            ))}
          </ul>
        </div>
        <div className="title">
          <h1>Joseph Harris</h1>
          <h2>Software Developer who specializes in JavaScript and React</h2>
          <SocialMediaLinks />
          <Navbar />
        </div>
      </section>
      <section>
      </section>
      <section>
      </section>
    </div>
  );
}

export default Homepage;
