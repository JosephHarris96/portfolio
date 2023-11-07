import Linkedin from "../assets/images/linkedin.png";
import Instagram from "../assets/images/instagram.png";

function SocialMediaLinks() {
  return (
    <div>
      <div className="logos">
            <a
              href="https://www.linkedin.com/feed/?trk=homepage-basic_sign-in-submit"
              alt="Linkedin Logo"
            >
              <img src={Linkedin} alt="Linkedin Logo"></img>
            </a>
            <a href="https://www.instagram.com/">
              <img src={Instagram} alt="Instagram Logo"></img>
            </a>
          </div>
    </div>
  )
}

export default SocialMediaLinks
