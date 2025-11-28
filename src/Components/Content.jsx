import React, { use, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCatFacts } from "../Redux/Slices/catSlice";
import ScaleLoader from "react-spinners/ScaleLoader";
import { getUserDetails } from "../Redux/Slices/userSlice";

const Content = () => {
  const dispatch = useDispatch();
  const { facts, factsLoading, factsError } = useSelector(
    (state) => state.mahintha
  );
  const { User, UserLoading, UserError } = useSelector((state) => state.User);
  console.log("1111user", User);
  console.log("1111result", User.results);
  console.log("1111info", User.info);

  const userdata = User?.results?.[0];
  console.log("1111infodata", userdata);

  useEffect(() => {
    dispatch(getUserDetails());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCatFacts());
  }, [dispatch]);

  if (factsLoading) {
    return (
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <ScaleLoader color="#36d7b7" height={40} />
        <p>Loading...</p>
      </div>
    );
  }

  if (factsError) {
    return <p style={{ color: "red" }}>Error: {factsError}</p>;
  }

  return (
    <>
      <div>
        <h2>{facts.setup}</h2>
        <p>{facts.punchline}</p>
      </div>
      <div>
        <h5>{userdata?.gender}</h5>
        <h5>{userdata?.email}</h5>
        <h5>{userdata?.id?.name}</h5>
        <h5>
          {userdata?.name?.title}
          {userdata?.name?.first}
          {userdata?.name?.last}
        </h5>
      </div>
    </>
  );
};

export default Content;
