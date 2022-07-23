import "./style.css";

function FaqList() {
    

    window.faqList = {};
    window.faqList.handleClick = (event) => {
        const $origin = event.target;
        const $li = $origin.closest("li");
        const $div = $li.querySelector("div");

        const $closed = $div.classList.contains("closed");
        
        if($closed) {
            $div.classList.remove("closed");
            $div.classList.add("open");
        } else {
            $div.classList.remove("open");
            $div.classList.add("closed");
        }
    }

    return /*html*/`
        <ul class="faq-list">
            <li>
                <button onClick="faqList.handleClick(event)">
                    <span>O que é a Netflix?</span>
                </button>

                <hr>
                
                <div class="faq-answer closed">
                    <span>
                        A Netflix é um serviço de transmissão online que oferece uma ampla variedade de séries, filmes e documentários premiados em milhares de aparelhos conectados à internet.

                        <br><br>

                        Você pode assistir a quantos filmes e séries quiser, quando e onde quiser, sem comerciais – tudo por um preço mensal bem acessível. Aqui você sempre encontra novidades. A cada semana, adicionamos novas séries e filmes.
                    </span>
                </div>
            </li>

            <li>
                <button onClick="faqList.handleClick(event)">
                    <span>Quando custa a Netflix?</span>
                </button>

                <hr>
                
                <div class="faq-answer closed" >
                    <span>
                        Assista à Netflix no seu celular, tablet, Smart TV, notebook ou aparelho de streaming por uma taxa mensal única. Os planos variam de R$25,90 a R$55,90 por mês. Sem contrato nem taxas extras.
                    </span>
                </div>
            </li>

            <li>
                <button onClick="faqList.handleClick(event)">
                    <span>Onde posso assistir?</span>
                </button>

                <hr>
                
                <div class="faq-answer closed">
                    <span>
                        Assista onde quiser, quando quiser. Faça login com sua conta Netflix em netflix.com para começar a assistir no computador ou em qualquer aparelho conectado à Internet compatível com o aplicativo Netflix, como Smart TVs, smartphones, tablets, aparelhos de streaming e videogames.

                        <br><br>

                        Você também pode baixar a sua série favorita com o aplicativo Netflix para iOS, Android ou Windows 10. Use downloads para levar a Netflix para onde quiser sem precisar de conexão com a Internet. Leve a Netflix com você para qualquer lugar.
                    </span>
                </div>
            </li>

            <li>
                <button onClick="faqList.handleClick(event)">
                    <span>Como faço para cancelar?</span>
                </button>

                <hr>
                
                <div class="faq-answer closed" >
                    <span>
                        A Netflix é flexível. Não há contratos nem compromissos. Você pode cancelar a sua conta na internet com apenas dois cliques. Não há taxa de cancelamento – você pode começar ou encerrar a sua assinatura a qualquer momento.
                    </span>
                </div>
            </li>

            <li>
                <button onClick="faqList.handleClick(event)">
                    <span>O que eu posso assistir na Netflix?</span>
                </button>

                <hr>
                
                <div class="faq-answer closed" >
                    <span>
                        A Netflix tem um grande catálogo de filmes, documentários, séries, originais Netflix premiados e muito mais. Assista o quanto quiser, quando quiser.
                    </span>
                </div>
            </li>

            <li>
                <button onClick="faqList.handleClick(event)">
                    <span>Onde posso assistir?</span>
                </button>

                <hr>
                
                <div class="faq-answer closed">
                    <span>
                        A experiência infantil da Netflix faz parte da sua assinatura para que as crianças se divirtam em seu próprio espaço com séries e filmes familiares sob a supervisão dos responsáveis.
                        
                        <br><br>

                        O recurso de controle parental, incluso nos perfis para crianças e protegido por PIN, permite restringir a classificação etária do conteúdo que as crianças podem ver e bloquear títulos específicos que você não quer que elas assistam.
                    </span>
                </div>
            </li>
        </ul>
    `;
}

export default FaqList;