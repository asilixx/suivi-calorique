const form = document.getElementById('formAdd');

function hideProtein() {
    const type = document.getElementById('type').value;
    const proteinDiv = document.getElementById('proteine');
    const proteinInput = document.getElementById('proteines');
    
    if (type === "sport") {
        proteinDiv.style.display = "none";
        proteinInput.removeAttribute('required');
    } else {
        proteinDiv.style.display = "block";
        proteinInput.setAttribute('required', 'required');
    }
}

document.getElementById('type').addEventListener('change', hideProtein);

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let type = document.getElementById('type').value;
    let calories = parseInt(document.getElementById('calories').value)
    let protein = parseInt(document.getElementById('proteines').value);
    let date = document.getElementById('date').value;
    let info = document.getElementById('info').value;

    if (type === "sport") protein = 0;

    let newEntry = {
        type: type,
        calories: calories,
        protein: protein,
        date: date,
        info: info,
    }

    let allEntries = localStorage.getItem('entries');

    if (allEntries === null) {
        allEntries = [];
    } else {
        allEntries = JSON.parse(allEntries);
    }

    allEntries.push(newEntry);

    localStorage.setItem('entries', JSON.stringify(allEntries));
    
    alert('Entrée ajoutée avec succès ! ✅');
    form.reset();
})