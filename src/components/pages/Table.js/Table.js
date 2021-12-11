import logoMini from "../../../assets/logo-mini.png";
import Failure from "./Failure";
import Flashcard from "./Flashcard";
import Success from "./Success";

export default function Table(props){
    return(
        <>
            <div className="top">
                <img src={logoMini} />
            </div>
            <div className="content">
                <Flashcard />
            </div>
        </>
    );
}