import "./style.css";

function LanguageButton() {
    return /*html*/`
        <form>
            <select name="select" class="language-button">
                <option value="portuguese">Português</option>
                <option value="english">English</option>
            </select>
        </form>
    `;
}

export default LanguageButton;