import LinkedinImage from "../assets/images/linkedin.png";
import InstagramImage from "../assets/images/instagram.png";

function Footer() {
  return (
    <div className="footerContainer">
    <div className="footerContent">
      <p>Joseph Harris - Software Developer</p>
      <img src={LinkedinImage} alt="Linkedin Logo" style={{ bottom: 0, right: 0, margin: '10px', width: '50px' }} />
      <img src={InstagramImage} alt="Linkedin Logo" style={{  bottom: 0, right: 0, margin: '10px', width: '50px' }} />
    </div>
    </div>
  )
}

export default Footer


// .logos {
//     position: fixed;
//     top: 30px; 
//     right: 100px; 
//     display: flex;
//     align-items: center; 
    
//   }
  
//   .logos a {
//     margin-left: 60px;
//   }
  
//   .logos img {
//     width: 50px;
//     position: absolute
//   }