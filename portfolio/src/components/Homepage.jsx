import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import SocialMediaLinks from "./SocialMediaLinks";
import Projects from "./Projects";


function Homepage() {
  // const items = [
  //   {
  //     image: BootstrapImage,
  //   },
  //   {
  //     image: HtmlImage,
  //   },
  //   {
  //     image: JavascriptImage,
  //   },
  //   {
  //     image: ReactImage,
  //   },
  //   {
  //     image: TypescriptImage,
  //   }
  // ];

  const [visibleItems, setVisibleItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);


  // useEffect(() => {
  //   const delay = 1000;

  //   const interval = setInterval(() => {
  //     if (currentIndex < items.length) {
  //       setVisibleItems((prevItems) => [...prevItems, items[currentIndex]]);
  //       setCurrentIndex((prevIndex) => prevIndex + 1);
  //     } else {
  //       clearInterval(interval);
  //     }
  //   }, delay);

  //   return () => {
  //     clearInterval(interval);
  //   }
  // }, [items, currentIndex]);

  return (
    <div className="pageContainer" style={{ border: '2px solid #ccc', padding: '10px', margin: '20px' }}>
      <section>
        <div className="skillsObjects">
          <ul className="listItems">
            {visibleItems.map((item, index) => (
              <li key={index}>
                <img src={item.image} alt={item.item} /> {item.item}
              </li>
            ))}
          </ul>
        </div>
        <div className="title">
          <div className="mainTitle">
          <h1>Joseph Harris</h1>
          </div>
          <h2>Software Developer who specializes in JavaScript and React</h2>
          <p style={{ transform: 'rotate(-90deg)', transformOrigin: 'left bottom', position: 'fixed', left: '28px', bottom: '65%', whiteSpace: 'nowrap', fontSize: '25px'}}>
            Joseph Harris' Portfolio
          </p>
          
          <SocialMediaLinks />
          <Navbar />
        </div>
      </section>
      <section>
        <Projects/>
      </section>
      <section>
      </section>
    </div>
  );
}

export default Homepage;
