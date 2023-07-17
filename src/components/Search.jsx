import React, { useContext, useState } from "react";
import { db } from "../firebase";
import { doc, getDoc, getDocs, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";
import { collection,  query, where } from "firebase/firestore";
import { AuthContext } from "../context/AuthContext";
const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);
  const currentUser = useContext(AuthContext);

  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
    );

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (err) {
      setErr(true);
    }
  };

  const handleSelect = async () => {
    const combinedId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.id
        : user.uid + currentUser.uid;
    try {
      const res = await getDoc(doc(db, "chats", combinedId));

      if (!res.exists()) {
        await setDoc(doc, (db, "chats", combinedId), { messages: [] });

        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });

        
        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (err) {}
  };
  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };
  return (
    <div className="border-b-2 border-b-gray-500">
      <div className="p-[10px]">
        <input
          type="text"
          onKeyDown={handleKey}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          placeholder="Find Any User"
          className="bg-transparent border-none px-2 text-white outline-none placeholder:text-gray-400"
        />
      </div>
      {err && <span>User Not Found !</span>}
      {user && (
        <div
          onClick={handleSelect}
          className="flex flex-row items-center gap-5 m-4 cursor-pointer hover:bg-[#2f2d52]"
        >
          <img
            src={user.photoURL}
            alt=""
            className="h-[50px] w-[50px] rounded-[50%] object-fit"
          />
          <div>
            <span className="text-white text-lg ">{user.displayName}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
