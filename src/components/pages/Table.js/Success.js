import party from "../../../assets/party.png"

export default function Success(){
    return(
        <div className="end-screen">
            <span>PARABÉNS <img src={party}/></span>
            <span>Você não esqueceu de nenhum flashcard!</span>
        </div>
    )
}