import { useState } from "react";
import { FEELINGS } from "../constants/index";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleFeelingClick = (feeling) => {
    const feelingElement = document.getElementById(feeling);
    if (feelingElement) {
      feelingElement.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };
  return (
    <div
      className="flex flex-col-reverse items-center md:flex-row md:justify-between h-auto py-3 px-2  md:px-10"
      id="navbar"
    >
      <div className="flex text-md md:text-xl lg:text-2xl max-[768px]:w-[100%] max-[768px]:border-t-2 max-[768px]:border-black">
        <button className="flex items-center  " onClick={toggleMenu}>
          <span className="material-symbols-outlined text-3xl">menu</span>
          <h1 className="">INDEX</h1>
        </button>

        {menuOpen && (
          <div className="menu-container absolute w-auto lg:top-20 top-28 shadow-xl rounded-xl p-2 lg:p-4 z-50 ">
            {/* done */}
            <ul className="menu flex flex-col flex-wrap">
              {FEELINGS.map((feeling, index) => (
                <li
                  id="listItem"
                  className={`list-items cursor-pointer mb-1 ml-0.5 p-0 min-[300px]:text-sm md:text-lg`}
                  key={index}
                  onClick={() =>
                    handleFeelingClick(feeling.feeling.toLowerCase())
                  }
                  style={{ borderBottomColor: null }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderBottom = `2px solid ${feeling.color}`;
                    e.currentTarget.style.color = `${feeling.color}`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.removeProperty("borderBottom");
                    e.currentTarget.style.removeProperty("color");
                    e.currentTarget.style.borderBottom = "";
                    e.currentTarget.style.color = "";
                  }}
                >
                  {feeling.feeling.toUpperCase()}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div>
        <h1 className="text-lg md:text-xl lg:text-2xl">
          The Symphony of Emotions: A Deep Dive into Human Feelings
        </h1>
      </div>
    </div>
  );
};

export default Navbar;
