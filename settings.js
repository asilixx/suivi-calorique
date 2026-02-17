const form = document.getElementById("formSettings");

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let goalCal = parseInt(document.getElementById('goalCal').value);
    let goalProt = parseInt(document.getElementById('goalProt').value);
    let MainCal = parseInt(document.getElementById('MainCal').value);

    let newEntry = {
        goalCal: goalCal,
        goalProt: goalProt,
        MainCal: MainCal,
    };

    localStorage.setItem('settings', JSON.stringify(newEntry));
    alert('Les Parametres ont étais enregister');
})