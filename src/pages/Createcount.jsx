import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useEffect } from "react";
import patacreate from "../assets/images/pata.png";
import pata2create from "../assets/images/pata2.png";
import ossos1 from "../assets/images/ossos.png";
import api from "../services/api";
function Createcount() {
  const [ShowPassword, setShowPassword] = useState(false);
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    const hasUppercase = /[A-Z]/.test(Password);
    const hasNumber = /[0-9]/.test(Password);

    if (!hasUppercase || !hasNumber) {
      setPasswordError(" A senha deve conter pelo menos: ");
      return;
    }

    setPasswordError("");

    try {
      const response = await api.post("/usuarios", {
        nome: Name,
        email: Email,
        senha: Password,
      });

      alert("Conta criada com sucesso!");
      console.log(response.data);

      // Limpa os campos
      setName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Erro ao criar conta:", error);
      alert("Erro ao criar conta. Verifique os dados.");
    }
  };
  let users = [];
  async function getusers(params) {
    users = await api.get("/usuarios");
  }

  useEffect(() => {
    getusers();
  }, []);
  return (
    <div className="bg-gradient-to-l from-yellow-400 via-yellow-500 to-orange-400 min-h-screen w-screen flex flex-col items-center">
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <h1
          className="text-teal-500 text-8xl font-bold text-center mt-10 mb-10 py-8 "
          style={{ textShadow: "4px 4px 4px rgba(0, 0, 0, 0.5)" }}
        >
          Cadastro de Conta
          {/* <img
            src={pata2create}
            alt="varias pegadas"
            className=" absolute flex -my-96 -ml-56 scale-150 rotate-90  "
          /> */}
        </h1>
        <div className="bg-teal-500 rounded-lg shadow-lg px-8 py-16 shadow-black w-full max-w-md my-12 flex flex-col ">
          <h2
            className=" text-white text-3xl font-bold mb-6 text-shadow-2xs text-shadow-sky-300 text-center   "
            style={{ textShadow: "4px 4px 4px rgba(0, 0, 0, 0.5)" }}
          >
            Digite seu nome
          </h2>
          <input
            type="text"
            className="rounded-md py-2 px-4 outline-teal-500"
            onChange={(e) => setName(e.target.value)}
          />

          <h2
            className="text-white text-3xl font-bold mb-6  shadow-black text-center my-6"
            style={{ textShadow: "4px 4px 4px rgba(0, 0, 0, 0.5)" }}
          >
            Digite seu email
          </h2>
          <input
            type="email"
            className="rounded-md py-2 px-4 outline-teal-500"
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="relative w-full">
            <h2
              className="text-white text-3xl font-bold mb-6  shadow-black text-center my-6"
              style={{ textShadow: "4px 4px 4px rgba(0, 0, 0, 0.5)" }}
            >
              Crie uma senha
            </h2>
            <div className="flex ">
              <input
                type={ShowPassword ? "text" : "password"}
                className="rounded-l-lg py-2 pr-40 outline-teal-500 text-left"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className=" text-teal-500 bg-white py-2 px-2 rounded-r-lg"
                onClick={() => setShowPassword(!ShowPassword)}
              >
                {ShowPassword ? <Eye /> : <EyeOff />}
              </button>
            </div>

            {passwordError && (
              <p className="bg-slate-50 rounded-lg text-black text-center font-medium mt-2">
                {passwordError}
                <p className="text-red-600">1 letra maiúscula e 1 número</p>
              </p>
            )}
          </div>
          {/* <div className="relative w-full flex justify-center mt-8">
            <img
              src={patacreate}
              alt="pata"
              className="w-60 h-auto object-contain"
            />
          </div> */}
          {/* <div className="relative w-full flex justify-center mt-4">
            <img
              src={ossos1}
              alt="ossos"
              className="w-60 h-auto object-contain"
            />
          </div> */}
          <button className="my-9 bg-teal-500 text-white font-bold text-2xl border rounded-lg py-3 px-3  hover:text-teal-500 hover:bg-white  transition-colors duration-300 shadow-md  transform  hover:scale-110 hover:shadow-xl-white hover:border-yellow-400">
            Criar
          </button>
        </div>
      </form>
    </div>
  );
}

export default Createcount;
