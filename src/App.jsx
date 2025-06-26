import Userlogin from "./components/Loginusuario";
import PasswordLogin from "./components/PasswordLogin";
import pata from "./assets/images/pata.png";

function App() {
  return (
    <div className="bg-gradient-to-l from-yellow-400 via-yellow-500 to-orange-400 min-h-screen  w-screen flex flex-col overflow-hidden">
      <header className="py-6 text-center">
        <h1
          className="text-teal-500 text-8xl font-bold text-center py-3 "
          style={{ textShadow: "4px 4px 4px rgba(0, 0, 0, 1)" }}
        >
          <a href="">MEU PET</a>
        </h1>
      </header>
      <main className="flex flex-1 items-center justify-center">
        <div className="w-full max-w-md px-4">
          <Userlogin />
          <PasswordLogin />
        </div>
        <img src={pata} alt="pata" />
      </main>
    </div>
  );
}
export default App;
