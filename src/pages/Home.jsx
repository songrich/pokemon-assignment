import React from "react";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src="https://www.pngarts.com/files/4/Pokemon-Logo-Transparent-Background-PNG.png"
          alt="pocketmon logo"
        ></img>
        <button
          style={{
            height: "130px",
            padding: "30px",
            backgroundColor: "red",
            fontSize: "30px",
            boxShadow: "0px 0px 3px 0px red",
            borderRadius: "5PX",
            marginTop: "10px",
            color: "white",
          }}
          onClick={function () {
            navigate("/dex");
          }}
        >
          포켓몬 도감 시작하기
        </button>
      </div>
    </>
  );
}
export default Home;
