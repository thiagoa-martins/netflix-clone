import "./style.css";

function CreateAccount() {
    return /*html*/`
        <form class="create-account">
            <input class="email-input" type="email" placeholder="Email">
            <button class="lets-go-button">Vamos lá ></button>
        </form>
    `;
}

export default CreateAccount;