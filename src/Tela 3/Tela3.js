import logoMini from "../assets/logo-mini.png"
import Sucesso from "./Sucesso";
import NotThisTime from "./NotThisTime";
import "./Tela3.css";

export default function Tela3(props) {
    return(
        <div className="tela3">
            <div className="top"><img src={logoMini} alt="ZapRecall!!" /></div>
            {props.allOK === true ? <Sucesso/> : <NotThisTime/>}
        </div>
    )
}