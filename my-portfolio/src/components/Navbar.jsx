import {FaGithub, FaLinkedin, FaSquareXTwitter,} from "react-icons/fa6"
import logo from "../assets/Geesara.png"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
              <img src={logo} className="mx-2" width={150} height={33} alt="Logo" />
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <a href="https://www.linkedin.com/in/geesara-de-silva/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn">
              <FaLinkedin />
          </a>
          <a href="https://github.com/Geesara2000"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub">
              <FaGithub />
          </a>
          <a href="https://x.com/geesara_desilva"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter">
              <FaSquareXTwitter />
          </a>
      </div>
    </nav>
  )
}

export default Navbar