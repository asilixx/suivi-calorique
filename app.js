const formulaire = document.getElementById('monFormulaire');

function enleverProt() {
    const type = document.getElementById('type').value;
    const prot = document.getElementById('proteine');
    if (type === "sport") {
        prot.style.display = "none";
    } else {
        prot.style.display = "block";
        inputProt.setAttribute('required', 'required');
    }
}
document.getElementById('type').addEventListener('change', enleverProt);

formulaire.addEventListener('submit', function(event) {
    event.preventDefault();

    let type = document.getElementById('type').value;
    let calories = document.getElementById('calories').value;
    let proteines = document.getElementById('proteines').value;
    let date = document.getElementById('date').value;
    let info = document.getElementById('info').value;

    if (type === sport ) proteines = 0;

    
})