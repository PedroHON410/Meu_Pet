function Userlogin() {
  return (
    <div className="w-full flex flex-col items-center mb-6">
      <h1
        className="text-white font-bold mb-2 text-5xl "
        style={{ textShadow: "4px 4px 4px rgba(20, 184, 166, 1)" }}
      >
        USUÁRIO
      </h1>
      <input
        className="w-full text-center rounded-2xl px-6 py-4 outline-teal-500 bg-white "
        type="text"
        placeholder="Digite seu email"
      />
    </div>
  );
}
export default Userlogin;
