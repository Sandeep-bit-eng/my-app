import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = ({ message }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/"); // 10 sec ke baad home page
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>404 😜</h1>
      <p>{message || "Oops! Something went wrong."}</p>
      <p>You will be redirected to home page in 5 seconds...</p>
    </div>
  );
};

export default NotFoundPage;
