import Userlogin from "./components/Loginusuario";
import PasswordLogin from "./components/PasswordLogin";
import pata1 from "./assets/images/pata.png";
import pata2 from "./assets/images/pata2.png";
import ossos from "./assets/images/ossos.png";
function App() {
  return (
    <div className="bg-gradient-to-l from-yellow-400 via-yellow-500 to-orange-400 min-h-screen  w-screen flex flex-col overflow-hidden">
      <header className="py-6 text-center">
        <h1
          className="text-teal-500 text-8xl font-bold text-center py-3  "
          style={{ textShadow: "4px 4px 4px rgba(0, 0, 0, 1)" }}
        >
          <a href="">MEU PET</a>
        </h1>
      </header>
      <main className=" py-24 flex items-center justify-center relative">
        <div className="w-full max-w-md px-4 relative ">
          <Userlogin />
          <PasswordLogin />
          <img
            src={pata1}
            alt="pata"
            className=" absolute opacity-95 py-32 right-3 scale-150 "
          />
        </div>
        <img src={pata2} alt="vaárias pegadas" className="absolute w-11/12 " />
        <img
          src={ossos}
          alt="vaárias pegadas"
          className="absolute w-11/12 flex justify-center "
        />
      </main>
    </div>
  );
}
export default App;
