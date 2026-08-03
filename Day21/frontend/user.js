const fetchUser = async () => {
    try {
        const response = await fetch("http://localhost:8000/api/user", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem("token")
            }
        })
        const user = await response.json();
        console.log(user);
        if(response.ok){
            const userProfile = document.getElementById("userProfile");
            userProfile.innerHTML = `
                <h2>User Profile</h2>
                <p><strong>Name:</strong> ${user.user.fullName}</p>
                <p><strong>Email:</strong> ${user.user.email}</p>
            `;
        }
    } catch (error) {
        console.error("Error fetching user:", error);
    }
}

fetchUser();