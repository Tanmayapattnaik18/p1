function fetchUsers() {
    fetch('https://reqres.in/api/users')
        .then(response => response.json())
        .then(data => {
            const usersContainer = document.getElementById('users-container');
            usersContainer.innerHTML = ''; 

            data.data.forEach(user => {
                const userElement = document.createElement('div');
                userElement.classList.add('user');

                const avatar = user.avatar;
                const firstName = user.first_name;
                const lastName = user.last_name;
                const email = user.email;

                userElement.innerHTML = `
                    <img src="${avatar}" alt="${firstName}" class="avatar">
                    <div class="user-info">
                        <h2>${firstName} ${lastName}</h2>
                        <p>Email: ${email}</p>
                    </div>
                `;

                usersContainer.appendChild(userElement);
            });
        })
        .catch(error => {
            console.error('Error fetching users:', error);
        });
}
