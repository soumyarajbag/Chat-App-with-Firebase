import React, { useState } from "react";
import Add from "../assets/addAvatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [err, setErr] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          setErr(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });

            await setDoc(doc(db, "users", res.user.uid), {
              uid : res.user.uid ,
              displayName ,
              email ,
              photoURL : downloadURL 
            });

            await setDoc(doc(db , "userChats" , res.user.uid) , {});
            navigate("/");
            
          });
        }
      );
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div className="flex h-[100vh] items-center justify-center bg-[#050c35]">
      <div className="bg-[#0b2039] border rounded-lg text-black flex flex-col gap-[10px] items-center py-[20px] px-[40px]">
        <span className="font-bold text-3xl text-red-900 ">Talkie-Talk</span>
        <span className="font-semibold text-2xl text-green-700">
          Register here !
        </span>
        <form
          onSubmit={handleSubmit}
          action=""
          className="flex flex-col gap-[15px] items-center justify-center"
        >
          <input
            type="text"
            placeholder="Name "
            className="px-4 h-10 w-full border-2 rounded-lg bg-gray-300 placeholder:text-black"
          />
          <input
            type="email"
            placeholder="Email"
            className="px-4 h-10 w-full  border-2 rounded-lg bg-gray-300 placeholder:text-black"
          />
          <input
            type="password"
            placeholder="Password"
            className="px-4 h-10 w-full border-2 rounded-lg bg-gray-300 placeholder:text-black"
          />
          <input
            type="file"
            id="photo"
            placeholder="Your Profile Photo"
            className="w-[210px] hidden text-white"
          />
          <label
            htmlFor="photo"
            className="text-white mb-2 gap-2 cursor-pointer text-xl flex flex-row items-center"
          >
            <img src={Add} alt="" className="h-[30px] w-[30px] " />
            Profile Photo
          </label>
          <button className="bg-orange-600 text-white py-2 px-5 rounded-lg font-semibold">
            Sign Up
          </button>
          {err && <span>Something Went Wrong !</span>}
        </form>

        <p className="text-center font-bold text-md text-white">
          Already Have An Account Have An Account ?
        </p>
        <Link to="/login">
        <h1 className="text-green-700  hover:text-green-500 hover:cursor-pointer text-md font-bold">
          Log In
        </h1>
        </Link>
      </div>
    </div>
  );
};

export default Register;
