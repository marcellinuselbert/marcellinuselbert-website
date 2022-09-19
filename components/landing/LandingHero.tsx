import { Header } from "@components";

export const LandingHero = () => {
  return (
    <div className="h-screen">
      <Header preset="h1" className="text-center">
        🛠 🖥 👨‍💻
      </Header>
      <Header
        preset="h1"
        className="text-transparent bg-clip-text  bg-gradient-to-br from-[#2193b0] to-[#6dd5ed] text-center"
      >
        Marcellinus Elbert
      </Header>
      <div className="scrolling-words-container mt-2">
        <div className="scrolling-words-box">
          <ul>
            <li>
              <Header
                preset="h1"
                className="text-transparent bg-clip-text  bg-gradient-to-br from-[#ff9966] to-[#ff5e62]"
              >
                Code
              </Header>
            </li>
            <li>
              <Header
                preset="h1"
                className="text-transparent bg-clip-text  bg-gradient-to-br from-[#a8ff78] to-[#78ffd6]"
              >
                Computer Science
              </Header>
            </li>
            <li>
              <Header
                preset="h1"
                className="text-transparent bg-clip-text  bg-gradient-to-br from-[#D31027] to-[#FFFFFF]"
              >
                Indonesia
              </Header>
            </li>
            <li>
              <Header
                preset="h1"
                className="text-transparent bg-clip-text  bg-gradient-to-br from-[#348F50] to-[#56B4D3]"
              >
                Software Engineer
              </Header>
            </li>
            <li>
              <Header
                preset="h1"
                className="text-transparent bg-clip-text  bg-gradient-to-br from-[#ff9966] to-[#ff5e62]"
              >
                Code
              </Header>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
