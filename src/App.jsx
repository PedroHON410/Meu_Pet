import Userlogin from "./components/Loginusuario";
import PasswordLogin from "./components/PasswordLogin";

function App() {
  return (
    <div class="bg-gradient-to-l from-yellow-500 via-yellow-600 to-orange-500 h-screen w-screen flex justify-center p-6 space-y-5">
      <div>
        <h1
          className="text-teal-500  text-shadow-lg/30 text-8xl font-bold text-center "
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
