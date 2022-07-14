import CreateAccount from "../../components/CreateAccount";
import StoryHeader from "../StoryHeader";
import "./style.css";

function SignedSection() {
    return /*html*/`
        <div class="home-section">
            ${StoryHeader()}

            <section class="signed-section">
                <div class="text">
                    <h1>Filmes, séries e muito mais. Sem limites.</h1>

                    <h2>Assista onde quiser. Cancele quando quiser.</h2>

                    <h3>Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura.</h3>

                    ${CreateAccount()}
                </div>     
            </section>
        </div>
    `;
}

export default SignedSection;