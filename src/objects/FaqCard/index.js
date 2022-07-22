import FaqList from "../../components/FaqList";
import "./style.css";

function FaqCard() {
    return /*html*/`
        <section class="faq-card">
            <div class="container">
                <h1>Perguntas frequentes</h1>

               ${FaqList()}
            </div>
        </section>
    `;
}

export default FaqCard;