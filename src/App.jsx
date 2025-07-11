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
          style={{ textShadow: "4px 4px 4px rgba(0, 0, 0, 0.5)" }}
        >
          <a href="">MEU PET</a>
        </h1>
      </header>
      <main className=" py-32 flex items-center justify-center relative">
        <div className="w-full max-w-md  px-4 relative z-40 ">
          <Userlogin />
          <PasswordLogin />
          <div className="my-10 border bg-[#01bbb9] text-white px-4 py-4 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-110 hover:shadow-xl">
            <a
              href=""
              className="flex justify-center font-bold text-2xl text-shadow-lg shadow-black"
            >
              Entrar
            </a>
          </div>
          <div className="my-8 bg-gradient-to-l from-yellow-400/35 to-orange-400/35 text-center border px-6 py-4 rounded-full shadow-md transform transition-transform duration-300 hover:scale-110 hover:shadow-xl">
            <a
              href="http://localhost:5173/Create_count "
              className="text-stone-50 font-bold text-2xl text-shadow-lg  shadow-black "
            >
              Ainda não tem conta?
            </a>
            <a
              href="http://localhost:5173/Create_count "
              className="text-yellow-400 font-bold text-3xl text-shadow-lg  shadow-black "
            >
              Cadastre-se agora!
            </a>
          </div>
        </div>
        <img
          src={pata1}
          alt="pata"
          className=" absolute w-11/12  left-12 scale-50 flex justify-center "
        />
        <img
          src={pata2}
          alt="vaárias pegadas"
          className="absolute w-11/12 flex justify-center "
        />
        <img
          src={ossos}
          alt="ossos"
          className="absolute w-11/12 flex justify-center "
        />
      </main>
    </div>
  );
}
export default App;
