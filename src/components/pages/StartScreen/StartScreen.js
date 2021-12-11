import logo from "../../../assets/logo.png"
import next from "../../../assets/next.png";
import "./StartScreen.css";

export default function StartScreen(props){
    return(
        <div className="start-screen">
            <img src={logo} />
            <button onClick={props.initiate} >Praticar React <img src={next} /></button>
        </div>
    )
}