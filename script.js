// Datos de ejemplo de aviones
const airplanes = [
    { name: "Boeing 737", image: "https://th.bing.com/th/id/R.e78784fe905774a5e11359cdcea02376?rik=dyQDCc%2fwldWaOw&pid=ImgRaw&r=0", description: "Avión de pasajeros." },
    { name: "Lockheed Martin F-35 Lighting II", image: "https://galaxiamilitar.es/wp-content/uploads/2018/10/5af5abafc9de3e0950300575-1024x565.jpg", description: "Avión de combate." },
    { name: "Lockheed Martin / Boeing F-22 Raptor", image: "https://galaxiamilitar.es/wp-content/uploads/2018/10/192d_FW_F-22_Raptor_0-1024x770.jpg", description: "Avión de combate" }
];

// Función para mostrar los aviones en el catálogo
function showAirplanes() {
    const catalog = document.getElementById("catalog");

    airplanes.forEach(airplane => {
        const airplaneDiv = document.createElement("div");
        airplaneDiv.classList.add("airplane");

        const img = document.createElement("img");
        img.src = airplane.image;
        airplaneDiv.appendChild(img);

        const h2 = document.createElement("h2");
        h2.textContent = airplane.name;
        airplaneDiv.appendChild(h2);

        const p = document.createElement("p");
        p.textContent = airplane.description;
        airplaneDiv.appendChild(p);

        catalog.appendChild(airplaneDiv);
    });
}

// Mostrar los aviones cuando se carga la página
document.addEventListener("DOMContentLoaded", showAirplanes);
