const apiUrl = "https://restcountries.com/v3.1/all";
const paisDiv = document.getElementById("pais");

async function obtenerpais() {
    try {
        const response = await axios.get(apiUrl);
        const pais = response.data.slice(-20); 
        
        let paisHtml = '';

        pais.forEach((country) => {
            paisHtml += `
                <div>
                    <h2>${country.name.common}</h2>
                    <h3>Región: ${country.region}</h3>
                    <img src="${country.flags.svg}" alt="Flag of ${country.name.common}">
                    <a href="#" onclick="alert('Más sobre ${country.name.common}')">Más información</a>
                    <hr>
                </div>
            `;
        });

        paisDiv.innerHTML = paisHtml;

    } catch (error) {
        console.error("Error al obtener pais:", error);
        paisDiv.innerHTML = "<p>Error al cargar los países. Intenta nuevamente más tarde.</p>";
    }
}
//FORMULARIO
document.getElementById("preventDefault").addEventListener("submit", function (event) {
    const form = event.target;
    if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
    } else {
        event.preventDefault();
        const confirmation = confirm("Esta seguro de enviar formulaio?");
        if (confirmation) {
            alert("¡Formulario enviado!");
            form.reset();
        }
    }
    form.classList.add("was-validated");
});
//Analytics
window.dataLayer = window.dataLayer || [];
function gtag() {
    dataLayer.push(arguments);
}
gtag("js", new Date());

gtag("config", "UA-164618828-1");
//FILTRO
