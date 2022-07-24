import LanguageButton from "../../components/LanguageButton";
import "./styles.css";

function SiteFooter() {
    return /*html*/`
        <footer class="site-footer">
            <div class="container">
                <p class="doubts">Dúvidas? Ligue 0800 591 8942</p>

                <div class="lists">
                    <ul class="list">
                        <li><a href="#">Perguntas frequentes</a></li>
                        <li><a href="#">Relações com investidores</a></li>
                        <li><a href="#">Formas de assistir</a></li>
                        <li><a href="#">Informações corporativas</a></li>
                        <li><a href="#">Só na Netflix</a></li>
                    </ul>
                    
                    <ul class="list">
                        <li><a href="#">Central de Ajuda</a></li>
                        <li><a href="#">Carreiras</a></li>
                        <li><a href="#">Termos de Uso</a></li>
                        <li><a href="#">Entre em contato</a></li>
                    </ul>

                    <ul class="list">
                        <li><a href="#">Conta</a></li>
                        <li><a href="#">Resgatar cartão pré-pago</a></li>
                        <li><a href="#">Privacidade</a></li>
                        <li><a href="#">Teste de velocidade</a></li>
                    </ul>

                    <ul class="list">
                        <li><a href="#">Media Center</a></li>
                        <li><a href="#">Comprar cartão pré-pago</a></li>
                        <li><a href="#">Preferências de cookies</a></li>
                        <li><a href="#">Avisos legais</a></li>
                    </ul>
                </div>

                ${LanguageButton()}

                <p class="netflix">Netflix Brasil</p>
            </div>
        </footer>
    `;
}

export default SiteFooter;