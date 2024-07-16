const apiUrl = "https://restcountries.com/v3.1/all";

const paisDiv = document.getElementById("pais");
console.log(paisDiv);




async function obtenerpais() {
    try {
        const response = await axios.get(apiUrl);
        const pais = response.data.slice(0, 20);

        pais.forEach((comentario) => {
            const comentarioElement = document.createElement("div");
            comentarioElement.innerHTML = `
            <h2>${comentario.name.common}</h2>
            <h3>Región: ${comentario.region}</h3>
            <img src="${comentario.flags.svg}" alt="Flag of ${comentario.name.common}">
          <a href="">Región: ${comentario.region}</a>
            <hr>
        `;
            paisDiv.appendChild(comentarioElement);
        });
    } catch (error) {
        console.error("Error al obtener pais:", error);
    }
}
obtenerpais();
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
