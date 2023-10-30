import { useEffect, useState } from "react";
import {
  confirmOtp,
  createRecaptchaVerifier,
  signIn,
} from "../../utils/firebase.utils";
import { useDispatch, useSelector } from "react-redux";
import { addCurrentUser, selectUser } from "./userSlice";
import { useNavigate } from "react-router-dom";
import Input from "../../ui/Input";
import Button from "../../ui/Button";

// TODO: only authenticated users can see this else login ui
function User() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [phone, setPhone] = useState(null);
  const [otp, setOtp] = useState(null);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState(false);
  const [error, setError] = useState("");

  const { currentUser } = useSelector(selectUser);

  useEffect(() => {
    createRecaptchaVerifier();
    // window.recaptchaVerifier = new RecaptchaVerifier(auth, "sign-in-button", {
    //   size: "invisible",
    // });
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (/^[6-9]\d{9}$/.test(phone)) {
      // set authState true
      signIn(phone)
        .then(() => {
          setLoading(true);
        })
        .catch((error) => {
          setError(error.message);
        });
    } else {
      alert("enter a valid phone");
    }
  };

  const handleConfirm = (e) => {
    e.preventDefault();

    confirmOtp(otp).then((res) => {
      const user = {
        ...res,
        name: name,
      };
      dispatch(addCurrentUser(user));
      navigate("/");
    });
  };

  if (currentUser) {
    return (
      <div>
        <div id="sign-in-button" className="sign-in-button"></div>
        <p>
          Hi <span>{currentUser.name}</span>
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <div id="sign-in-button" className="sign-in-button"></div>
      <h2 className="mt-5 text-2xl font-semibold tracking-tighter">
        Login with your mobile
      </h2>
      {error && <div className="bg-red-500">{error}</div>}
      {!loading && (
        <>
          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <Input
              required
              placeholder="enter your name"
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              type="number"
              placeholder="98XXX...."
              onChange={(e) => setPhone(e.target.value)}
            />
            <Button type="gray" disabled={loading}>
              submit
            </Button>
          </form>
        </>
      )}
      {loading && (
        <>
          <h2>confirm code</h2>
          <form onSubmit={handleConfirm} className="flex flex-col gap-5">
            <Input placeholder="OTP" onChange={(e) => setOtp(e.target.value)} />
            <Button type="gray">verify</Button>
          </form>
        </>
      )}
      <div className="font-semibold">
        dummy mobile number : <span className="text-green-500">9895956000</span>{" "}
        | OTP : <span className="text-red-500">123456</span>
      </div>
    </div>
  );
}
export default User;
