import StoryHeader from "../StoryHeader";
import "./style.css";

function SignedSection() {
    return /*html*/`
        <div class="home-section">
            ${StoryHeader()}
            <section class="signed-section">
                <div class="container">
                    <h1>Filmes, séries e muito mais. Sem limites.</h1>

                    <h2>Assista onde quiser. Cancele quando quiser.</h2>

                    <h3>Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura.</h3>
                </div>  
            </section>
        </div>
    `;
}

export default SignedSection;