import CreateAccount from "../../components/CreateAccount";
import FaqList from "../../components/FaqList";
import "./style.css";

function FaqCard() {
    return /*html*/`
        <section class="faq-card">
            <div class="container">
               <h1>Perguntas frequentes</h1>

               ${FaqList()}

               <h3>Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura.</h3>

               <div class="text">
                    ${CreateAccount()}
               </div>
            </div>
        </section>
    `;
}

export default FaqCard;