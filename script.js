const checkValue = () => {
    const input = document.getElementById('input');
    const result = document.getElementById('output');
    const inputResult = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.value);
    if (inputResult) {
        result.innerHTML = `
        <p style="color: green;">You entered a correct Email</p>
        `;
    }
    else {
        result.innerHTML = `
        <p style="color: red;">You entered a wrong Email</p>
        `;
    }

    input.value = '';
}