import FormulaireSeConnecter from "./Form.SeConnecter";
import "./login.css";
import axios from "../../api/axios";
import { useEffect } from "react";
export default function SeConnecter() {
  useEffect(() => {
    const fetchData = () => {
      axios
        .get("bureau/glitch/")
        .then(function (response) {
          // console.log("Données récupérées : ", response.data);
        })
        .catch((error) => {
          // console.error("Erreur lors de la récupération : ", error);
        });
    };

    fetchData();
    const interval = setInterval(fetchData, 60000); // 1.MIN
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="login-container">
      <div className="login-box ">
        <FormulaireSeConnecter />
      </div>
    </div>
  );
}
