function changeTheme() {
    if (document.getElementById("theme").value === "0")
        document.body.className = "light";
    if (document.getElementById("theme").value === "1")
        document.body.className = "dark";
    if (document.getElementById("theme").value === "2")
        document.body.className = "blue";
}