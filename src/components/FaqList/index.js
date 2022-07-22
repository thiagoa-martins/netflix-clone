import "./style.css";

function FaqList() {
    

    window.faqList = {};
    window.faqList.handleClick = (event) => {
        const $origin = event.target;
        const $faqList = $origin.closest(".faq-list");

        const $div = $faqList.querySelector("div");
        $div.classList.toggle("faq-answer");
    }

    return /*html*/`
        <ul class="faq-list">
            <li>
                <button onClick="faqList.handleClick(event)">
                    <span>O que é a Netflix?</span>
                </button>

                <hr>
                
                <div class="faq-answer answer">
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

        <ul class="faq-list">
            <li>
                <button onClick="faqList.handleClick(event)">
                    <span>Quando custa a Netflix?</span>
                </button>

                <hr>
                
                <div class="faq-answer answer" >
                    <p>
                        Assista à Netflix no seu celular, tablet, Smart TV, notebook ou aparelho de streaming por uma taxa mensal única. Os planos variam de R$25,90 a R$55,90 por mês. Sem contrato nem taxas extras.
                    </p>
                </div>
            </li>
        </ul>
    `;
}

export default FaqList;