import "./style.css";

function FaqList() {
    window.faqList = {};
    window.faqList.handleClick = () => {
        
    }

    return /*html*/`
        <ul class="faq-list">
            <li>
                <button onClick="handleClick()">
                    <span>O que é a Netflix?</span>
                </button>

                <hr>
                
                <div class="answer">
                    <p>
                        A Netflix é um serviço de transmissão online que oferece uma ampla variedade de séries, filmes e documentários premiados em milhares de aparelhos conectados à internet.
                    </p>

                    <br>

                    <p>
                        Você pode assistir a quantos filmes e séries quiser, quando e onde quiser, sem comerciais – tudo por um preço mensal bem acessível. Aqui você sempre encontra novidades. A cada semana, adicionamos novas séries e filmes.
                    </p>
                </div>
            </li>

        </ul>
    `;
}

export default FaqList;