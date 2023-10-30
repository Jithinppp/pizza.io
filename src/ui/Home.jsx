import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { useSelector } from "react-redux";
import { selectUser } from "../features/user/userSlice";

function Home() {
  const { currentUser } = useSelector(selectUser);
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
        {!currentUser?.uid ? (
          <>
            <span className="mr-1">Welcome! please</span>
            <button
              onClick={() => navigate("/user")}
              className="text-blue-600 underline outline-none"
            >
              sign in
            </button>
          </>
        ) : (
          <>
            <span className="mr-1">Welcome! {currentUser.name}</span>
          </>
        )}
      </div>
      <Button type="primary" onClick={() => navigate("/menu")}>
        Start ordering
      </Button>
    </div>
  );
}
export default Home;
