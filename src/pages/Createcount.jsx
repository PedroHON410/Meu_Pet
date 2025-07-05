import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
function Createcount() {
  const [ShowPassword, setShowPassword] = useState(false);
  return (
    <div className="bg-gradient-to-l from-yellow-400 via-yellow-500 to-orange-400 min-h-screen w-screen flex flex-col items-center">
      <h1
        className="text-teal-500 text-8xl font-bold text-center mt-10 mb-10 py-8"
        style={{ textShadow: "4px 4px 4px rgba(0, 0, 0, 0.5)" }}
      >
        Cadastro de Conta
      </h1>
      <div className="bg-teal-500 rounded-lg shadow-lg px-8 py-44 shadow-black w-full max-w-md my-12 flex flex-col ">
        <h2
          className=" text-white text-3xl font-bold mb-6 text-shadow-2xs text-shadow-sky-300 text-center -my-36  "
          style={{ textShadow: "4px 4px 4px rgba(0, 0, 0, 0.5)" }}
        >
          Digite seu nome
        </h2>
        <input type="text" className="rounded-md py-2 px-4 outline-teal-500" />

        <h2
          className="text-white text-3xl font-bold mb-6  shadow-black text-center my-6"
          style={{ textShadow: "4px 4px 4px rgba(0, 0, 0, 0.5)" }}
        >
          Digite seu email
        </h2>
        <input type="email" className="rounded-md py-2 px-4 outline-teal-500" />
        <div className="relative w-full">
          <h2
            className="text-white text-3xl font-bold mb-6  shadow-black text-center my-6"
            style={{ textShadow: "4px 4px 4px rgba(0, 0, 0, 0.5)" }}
          >
            Crie uma senha
          </h2>
          <input
            type={ShowPassword ? "text" : "password"}
            className="rounded-md py-2 px-4 outline-teal-500"
            placeholder="Digite sua senha"
          />
          <button
            type="button"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white"
            onClick={() => setShowPassword(!ShowPassword)}
          >
            {ShowPassword ? <Eye /> : <EyeOff />}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Createcount;
