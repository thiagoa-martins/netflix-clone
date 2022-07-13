import "./style.css";
import LanguageButton from "../../components/LanguageButton";
import LogoNetflix from "../../components/LogoNetflix";
import LoginButton from "../../components/LoginButton";

function StoryHeader() {
    return /*html*/`
        <header class="story-header">
            <div class="container">
                ${LogoNetflix()}
                <div>
                    ${LanguageButton()}
                    ${LoginButton()}
                </div>
            </div>   
        </header>
    `;
}

export default StoryHeader;