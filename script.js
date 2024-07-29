const form = document.querySelector(".form");
form.addEventListener("submit", async(event) => {
    // Предотвращает действие браузера по умолчанию. В данном случае — отправку формы
    // https://learn.javascript.ru/default-browser-action
    event.preventDefault();

    // Здесь твой код
    const name = document.getElementById('name').value;
    const secondName = document.getElementById('secondName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const agree = document.getElementById('agree').checked;

    try {
        const response = await fetch(`https://polinashneider.space/user`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer: AnastasiaBalashenko'
            },
            body: JSON.stringify({
                "name": "Полина",
                "secondName": "Shneider",
                "phone": 89990000000,
                "email": "polina@gmail.com",
                "agree": true
            }),
        })

        if (response.ok) {
            console.log('Data sent successfully!');
            alert('Data sent successfully!');

            form.reset();
        } else {
            throw new Error('Failed to send data');
        }
    } catch (error) {
        console.error(error);
        alert('Failed to send data. Please try again.');
    }
});