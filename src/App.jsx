import Userlogin from "./components/UserLogin";
import PasswordLogin from "./components/PasswordLogin";

function App() {
  return (
    <div class="bg-gradient-to-l from-yellow-500 via-yellow-600 to-orange-500 h-screen w-screen flex justify-center p-6">
      <div>
        <h1 className="text-teal-500  text-shadow-8xs text-shadow-black-500 text-8xl font-medium text-center ">
          MEU PET
        </h1>
        <Userlogin />
        <PasswordLogin />
      </div>
    </div>
  );
}
export default App;
