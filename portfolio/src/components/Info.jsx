import { Link } from "react-router-dom"
import SocialMediaLinks from "../components/SocialMediaLinks";

function Info() {
  return (
    <div>
      <Link to="/homepage">
            <p>Home</p>
        </Link>  
        <SocialMediaLinks />
    </div>
  )
}

export default Info
