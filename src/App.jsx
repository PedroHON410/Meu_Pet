import Userlogin from "./components/Loginusuario";
import PasswordLogin from "./components/PasswordLogin";

function App() {
  return (
    <div className="bg-gradient-to-l from-yellow-400 via-yellow-500 to-orange-400 min-h-screen w-screen flex items-center justify-center relative overflow-hidden">
      <div className="flex flex-col items-center w-full max-w-md px-6 ">
        <h1
          className="text-teal-500 text-8xl font-bold text-center "
          style={{ textShadow: "4px 4px 4px rgba(0, 0, 0, 1)" }}
        >
          <a href="">MEU PET</a>
        </h1>
        <Userlogin />
        <PasswordLogin />
      </div>
    </div>
  );
}
export default App;
