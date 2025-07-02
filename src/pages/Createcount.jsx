function Createcount() {
  return (
    <div className="bg-gradient-to-l from-yellow-400 via-yellow-500 to-orange-400 min-h-screen w-screen flex flex-col items-center">
      <h1
        className="text-teal-500 text-8xl font-bold text-center mt-10 mb-10 py-8"
        style={{ textShadow: "4px 4px 4px rgba(0, 0, 0, 0.5)" }}
      >
        Cadastro de Conta
      </h1>
      <div className="bg-teal-500 rounded-lg shadow-lg px-8 py-52 shadow-black w-full max-w-md my-20 flex flex-col items-center">
        <h2 className=" text-white text-3xl font-bold mb-6 text-shadow-2xs text-shadow-sky-300">
          Digite seu nome completo
        </h2>
        <input type="text" className="" />
        <h2 className="text-white text-3xl font-bold mb-6  shadow-black">
          Digite seu email
        </h2>
        <input type="email" className="" />
      </div>
    </div>
  );
}

export default Createcount;
