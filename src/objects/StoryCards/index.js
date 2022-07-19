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
                            <video autoplay loop>
                                <source src="./src/videos/video-tv.m4v" type="video/mp4">
                                Your browser does not support the video tag.
                                Seu navegador não oferece suporte a essa tag de vídeo.
                            </video>
                        </div>
                    </div>
                </div>
            </div>       
        </section>
    `; 
}

export default StoryCards;