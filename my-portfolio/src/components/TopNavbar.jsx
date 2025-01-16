

const TopNavbar = () => {
  return (
    <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 bg-gray-500 bg-opacity-80 p-3 rounded-lg shadow-md   mt-2">
      
{/* Navigation Links */}
<ul className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-10 text-black">
  <li>
    <a href="#home" className="flex items-center space-x-2 ">
      <span className="text-lg hidden md:inline font-semibold hover:text-white  ">Home</span>
    </a>
  </li>
  <li>
    <a href="#technologies" className="flex items-center space-x-2 hover:text-white ">
      <span className="text-lg hidden md:inline font-semibold">Technologies</span>
    </a>
  </li>
  <li>
    <a href="#projects" className="flex items-center space-x-2 hover:text-white ">
      <span className="text-lg hidden md:inline font-semibold">Projects</span>
    </a>
  </li>
  <li>
    <a href="#contact" className="flex items-center space-x-2 hover:-white ">
      <span className="text-lg hidden md:inline font-semibold">Contact me</span>
    </a>
  </li>
</ul>
</nav>
  );
};

export default TopNavbar;
