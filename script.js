
console.log('Init');

let main = () => document.getElementById("conlink").addEventListener("click", contact);

let contact = () => {
    alert('See bottom of page!')
};

window.onload = () => {
    console.log('loaded')
    main()
    console.log('main - exec')
}