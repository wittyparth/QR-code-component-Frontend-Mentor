import "./App.css";
import qr from "./images/image-qr-code.png";
function App() {
  return (
    <div className="w-[100vw] h-[100vh] bg-Light_gray font-outfit text-[15px] flex justify-center items-center">
      <div className="p-4 rounded-md flex flex-col gap-4 justify-around w-[375px] bg-White text-center">
        <img src={qr} alt="QR-Code" className="rounded-md" />
        <div className="px-5 py-3 flex flex-col gap-4">
          <h1 className="text-2xl font-bold text-Dark_blue">
            Improve your front-end skills by building projects
          </h1>
          <p className="text-Grayish_blue text-lg">
            Scan the QR code to visit frontend mentor and take your coding
            skills to next level
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
