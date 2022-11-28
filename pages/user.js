import { useEffect, useState } from "react";
import { fetchusers } from "./api/user";

export default function User() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [details, setdetails] = useState();
  const [user, setuser] = useState([]);
  const [error,seterror] = useState("")
  useEffect(() => {
    fetchusers().then((response) => {
      console.log(response);
      setuser(response);
    });
  }, []);
  const login = () => {
    user.map((userdetail) => {
      if (userdetail.name == username && userdetail.birthDate == password) {
        setdetails(userdetail);
      }
    });
  };
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setusername(e.target.value)}
        value={username}
      />
      <input
        type="date"
        onChange={(e) => setpassword(e.target.value)}
        value={password}
      />
      <button onClick={login}>login</button>
      {details && console.log(details)}
      {details && <>
        <img src={details.image} alt="" />
      </>
      }
    </div>
  );
}
