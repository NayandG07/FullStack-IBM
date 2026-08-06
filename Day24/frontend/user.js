const fetchUser = async () => {
    try {
        const response = await fetch(API_URL + "/api/user", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem("token")
            }
        });
        const userData = await response.json();

        const userProfileDiv = document.getElementById("userProfile");

        if (response.ok) {
            userProfileDiv.innerHTML = `
                <h2>User Profile</h2>
                <p><strong>Name:</strong> ${userData.user.fullName}</p>
                <p><strong>Email:</strong> ${userData.user.email}</p>
                <p><strong>Phone:</strong> ${userData.user.phoneNumber}</p>
            `;
        } else {
            userProfileDiv.innerHTML = `
                <h2>Error</h2>
                <p>${userData.message}</p>
            `;
        }
    } catch (error) {
        console.error("Error fetching user:", error);
    }
}

fetchUser();