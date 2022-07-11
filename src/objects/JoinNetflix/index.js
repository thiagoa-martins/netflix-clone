import "./style.css";
import LanguageButton from "../../components/LanguageButton";
import LogoNetflix from "../../components/LogoNetflix";
import LoginButton from "../../components/LoginButton";

function JoinNetflix() {
    return /*html*/`
        <header class="join-netflix">
            ${LogoNetflix()}
            <div>
                ${LanguageButton()}
                ${LoginButton()}
            </div>
        </header>
    `;
}

export default JoinNetflix;