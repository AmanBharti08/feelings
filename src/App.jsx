import Feeling from "./components/Feeling";
import Navbar from "./components/Navbar";

export default function App() {
  const handleClick = () => {
    const navElement = document.getElementById("navbar");
    if (navElement) {
      navElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar />
      <div>
        <Feeling />
        <button className="circle sticky bottom-5 left-5" onClick={handleClick}>
          <div>
            <span className="material-symbols-outlined  text-4xl z-90">
              arrow_upward
            </span>
          </div>
        </button>
      </div>
    </>
  );
}
