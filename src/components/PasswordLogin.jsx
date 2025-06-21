function PasswordLogin() {
  return (
    <div className="flex justify-center space-y-4 p-6 flex-col">
      <h1
        className="text-stone-50 text-shadow-2xs font-bold text-shadow-sky-300 text-5xl flex justify-center "
        style={{ textShadow: "4px 4px 4px rgba(20, 184, 166, 1)" }}
      >
        SENHA
      </h1>
      <input
        className="text-center rounded-xl px-16 py-5 outline-teal-500"
        type="text"
        placeholder="Digite sua senha"
      />
    </div>
  );
}
export default PasswordLogin;
