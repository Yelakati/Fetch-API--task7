document.getElementById("reload-btn").addEventListener("click", loadUsers);

function loadUsers() {
    fetch('user.json') // ✅ match your file name exactly
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            displayUsers(data);
            document.getElementById("error").textContent = "";
        })
        .catch(error => {
            document.getElementById("error").textContent = "Error: " + error.message;
            document.getElementById("user-list").innerHTML = "";
        });
}

function displayUsers(users) {
    const list = document.getElementById("user-list");
    list.innerHTML = "";
    users.forEach(user => {
        const li = document.createElement("li");
        li.textContent = `${user.name} (${user.email})`;
        list.appendChild(li);
    });
}
