import Context from "../../../contexts/Context";
import FormulaireNouveauIndividu from "./FormulaireIndividu";

export default function AjoutIndividu() {
  return (
    <>
      <Context>
        <div className="monContainer">
          <header>Ajout nouveau organisme</header>

          <FormulaireNouveauIndividu />
        </div>
      </Context>
    </>
  );
}
