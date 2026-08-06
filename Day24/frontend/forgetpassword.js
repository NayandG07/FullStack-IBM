const forgotPasswordForm = document.getElementById('forgotPasswordForm');
const successState = document.getElementById('successState');
const backLink = document.getElementById('backLink');
const resetBtn = document.getElementById('resetBtn');
const formHeader = document.getElementById('formHeader');

forgotPasswordForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('fpEmail').value.trim();
    const newPassword = document.getElementById('fpNewPassword').value;
    const confirmPassword = document.getElementById('fpConfirmPassword').value;

    if (newPassword !== confirmPassword) {
        Toastify({
            text: 'Passwords do not match!',
            duration: 3000,
            close: true,
            gravity: 'top',
            position: 'right',
            stopOnFocus: true,
            style: {
                background: 'linear-gradient(to right, #e53935, #e35d5b)',
            },
        }).showToast();
        return;
    }

    resetBtn.disabled = true;
    resetBtn.textContent = 'Resetting...';

    try {
        const response = await fetch(API_URL + "/api/forgot-password", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, newPassword }),
        });

        const res = await response.json();

        if (response.ok) {
            forgotPasswordForm.style.display = 'none';
            backLink.style.display = 'none';
            formHeader.style.display = 'none';
            successState.style.display = 'block';

            Toastify({
                text: res.message,
                duration: 3000,
                close: true,
                gravity: 'top',
                position: 'right',
                stopOnFocus: true,
                style: {
                    background: 'linear-gradient(to right, #00b09b, #96c93d)',
                },
            }).showToast();
        } else {
            Toastify({
                text: res.message || 'Something went wrong. Please try again.',
                duration: 3000,
                close: true,
                gravity: 'top',
                position: 'right',
                stopOnFocus: true,
                style: {
                    background: 'linear-gradient(to right, #e53935, #e35d5b)',
                },
            }).showToast();

            resetBtn.disabled = false;
            resetBtn.textContent = 'Reset Password';
        }
    } catch (error) {
        Toastify({
            text: 'Network error. Please check your connection.',
            duration: 3000,
            close: true,
            gravity: 'top',
            position: 'right',
            stopOnFocus: true,
            style: {
                background: 'linear-gradient(to right, #e53935, #e35d5b)',
            },
        }).showToast();

        resetBtn.disabled = false;
        resetBtn.textContent = 'Reset Password';
    }
});
