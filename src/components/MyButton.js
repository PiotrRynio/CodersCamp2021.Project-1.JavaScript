export const MyButton = () => {

    const button = document.createElement("button");
    button.classList.add("myButton");
    button.innerText = "Click me";

    button.addEventListener('click', logger);

    return button;

}

function logger () {
    return console.log("clicked");
}