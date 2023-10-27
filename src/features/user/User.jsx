import { useEffect, useState } from "react";
import {
  auth,
  confirmOtp,
  createRecaptchaVerifier,
  signIn,
} from "../../utils/firebase.utils";
import { useDispatch, useSelector } from "react-redux";
import { addCurrentUser, selectUser } from "./userSlice";
import { RecaptchaVerifier } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Input from "../../ui/Input";

// TODO: only authenticated users can see this else login ui
function User() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [phone, setPhone] = useState(null);
  const [otp, setOtp] = useState(null);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState(false);

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
      signIn(phone).then(() => {
        setLoading(true);
      });
    } else {
      alert("enter a valid phone");
    }
  };

  const handleConfirm = (e) => {
    e.preventDefault();
    confirmOtp(otp).then((res) => {
      dispatch(addCurrentUser({ ...res, name: name }));
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
      <form onSubmit={handleLogin} className="flex flex-col gap-4">
        <Input
          placeholder="enter your name"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="number"
          placeholder="98XXX...."
          onChange={(e) => setPhone(e.target.value)}
        />
        <button className="" type="submit">
          submit
        </button>
      </form>
      {loading && (
        <>
          <h2>confirm code</h2>
          <form onSubmit={handleConfirm}>
            <Input placeholder="OTP" onChange={(e) => setOtp(e.target.value)} />
            <button type="submit">verify</button>
          </form>
        </>
      )}
    </div>
  );
}
export default User;
