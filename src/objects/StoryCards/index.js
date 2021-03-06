import EndCard from "../../components/EndCard";
import "./styles.css";

function StoryCards() {
    return /*html*/`
        <section class="story-cards">
            <div class="container">
                <div class="card">
                    <div class="text">
                        <h1>Aproveite na TV.</h1>
                           
                        <h2>
                            Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros dispositivos.
                        </h2>
                    </div>
                    
                    <div class="image">
                        <img src="./src/images/tv.png" alt="Imagem de televisão">

                        <div class="video">
                            <video autoplay playsinline muted loop>
                                <source src="./src/videos/video-tv.m4v" type="video/mp4">
                                Your browser does not support the video tag.
                                Seu navegador não oferece suporte a essa tag de vídeo.
                            </video>
                        </div>
                    </div>
                </div>
            </div>
                
            ${EndCard()}
            
            <div class="container">
                <div class="card">
                    <div class="image">
                        <img src="./src/images/mobile.jpg" alt="Imagem mobile">

                        <div class="animation">
                            <img src="./src/images/boxshot.png" alt="Stranger Things">

                            <div class="description">
                                <span>Stranger Things</span>
                                <div>Download em andamento...</div>
                            </div>
                            
                            <img src="./src/images/download-icon.gif" alt="Ícone de download">
                        </div>
                    </div>

                    <div class="text">
                        <h1>Baixe séries para assistir offline.</h1>
                           
                        <h2>
                        Salve seus títulos favoritos e sempre tenha algo para assistir.
                        </h2>
                    </div>
                </div>
            </div>
            
            ${EndCard()}

            <div class="container">
                <div class="card">
                    <div class="text">
                        <h1>Assista quando quiser.</h1>
                           
                        <h2>
                            Assista no celular, tablet, Smart TV ou notebook sem pagar a mais por isso.
                        </h2>
                    </div>
                    
                    <div class="image">
                        <img src="./src/images/device-pile.png" alt="Imagem de dispositivos: monitor, celular e tablet">

                        <div class="watch-whenever-you-want">
                            <video autoplay playsinline muted loop>
                                <source src="./src/videos/video-devices.m4v" type="video/mp4">
                                Your browser does not support the video tag.
                                Seu navegador não oferece suporte a essa tag de vídeo.
                            </video>
                        </div>
                    </div>
                </div>
            </div>

            ${EndCard()}

            <div class="container">
                <div class="card">
                    <div class="image">
                        <img src="./src/images/childish.png" alt="Infantil">
                    </div>

                    <div class="text">
                        <h1>Crie perfis para crianças.</h1>
                        
                        <h2>
                            Deixe as crianças se aventurarem com seus personagens favoritos em um espaço feito só para elas, sem pagar a mais por isso.
                        </h2>
                    </div>
                </div>
            </div>

            ${EndCard()}

        </section>
    `; 
}

export default StoryCards;