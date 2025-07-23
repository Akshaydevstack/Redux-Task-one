import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import fetchUser from "../Redux/ActionCreater/FetchUser";
export default function Displayuser() {
  const { loading, user, error } = useSelector((state) => state.userState);
  const dispatch = useDispatch();
 useEffect(()=>{
  dispatch(fetchUser())
 },[])
  return (
    <div>
      <p>user details from api</p>
      {loading && <p>Loading........</p>}
      {error && <p>{error}</p>}
      <h2>{user.name || "Hello guest"}</h2>
    </div>
  );
}
