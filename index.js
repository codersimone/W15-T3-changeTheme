function changeTheme() {
    const theme = document.getElementById("theme").value;
    switch(theme) {
        case 1: document.body.className = "light"; break;
        case 2: document.body.className = "dark"; break;
        case 3: document.body.className = "blue"; break;
    }
}

function changeTheme2() {
    const theme = document.getElementById("theme").value
    document.body.className = theme;
}
