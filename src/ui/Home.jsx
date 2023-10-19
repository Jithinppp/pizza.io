import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { googleSignIn } from "../utils/firebase.utils";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="flex h-[400px] flex-col items-center justify-center">
      <h1 className=" mb-4 text-5xl font-extralight tracking-tighter">
        Think of dieting, then I eat pizza🍕
      </h1>
      <p className=" text-xl text-yellow-400 ">
        Straight out of oven, straight to you
      </p>
      <div className="mb-4 mt-2">
        <span className="mr-1">Welcome! please</span>
        <button
          onClick={() => googleSignIn()}
          className="text-blue-600 underline outline-none"
        >
          sign in
        </button>
      </div>
      <Button onClick={() => navigate("/menu")}>Start ordering</Button>
    </div>
  );
}
export default Home;
