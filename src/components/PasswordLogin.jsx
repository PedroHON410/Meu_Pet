import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

function PasswordLogin() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full flex flex-col items-center relative">
      <h1
        className="text-white font-bold mb-2 text-5xl"
        style={{ textShadow: "4px 4px 4px rgba(20, 184, 166, 1)" }}
      >
        SENHA
      </h1>

      <div className="relative w-full">
        <input
          className="w-full text-center rounded-2xl px-6 py-4 outline-teal-500 bg-white"
          type={showPassword ? "text" : "password"}
          placeholder="Digite sua senha"
        />
        <button
          type="button"
          className="absolute right-4 top-1/2 -translate-y-1/2 text-teal-500"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <Eye /> : <EyeOff />}
        </button>
      </div>
    </div>
  );
}

export default PasswordLogin;
