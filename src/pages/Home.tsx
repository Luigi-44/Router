import "./Home.css";
import { useState } from "react";

function Home() {
  // Tableau d'objets avec une propriété id et nom pour chaque couleur
const couleurs = [
    { id: 1, nom: "red" },
    { id: 2, nom: "blue" },
    { id: 3, nom: "green" },
    { id: 4, nom: "yellow" },
    { id: 5, nom: "white" },
    { id: 6, nom: "black" },
];

const [color, setColor] = useState("blue");

return (
    <div
    style={{
        backgroundColor: color,
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }}
    >
    <div>
        <h1>Couleur actuelle : {color}</h1>
        {/* Génération dynamique des boutons avec une clé unique basée sur l'id */}
        {couleurs.map((couleur) => (
        <button
            key={couleur.id} // Utilisation de l'id comme clé unique
            type="button"
            onClick={() => setColor(couleur.nom)} // Mise à jour de l'état avec la couleur sélectionnée
        >
            {couleur.nom}
        </button>
        ))}
    </div>
    </div>
);
}

export default Home;

// import "./Home.css";

// import { useState } from "react";

// const getWeatherOfTheDay = () => {
// return "sunny";
// };

// function Home() {
// const [weather, setWeather] = useState(null as string | null);

// return (
//     <>
//     <h1>Hello from Home</h1>     

//     {weather != null ? (
//         <p>Today is a {weather} day</p>
//     ) : (
//         <button
//         type="button"onClick={() => {
//             const weatherOfTheDay = getWeatherOfTheDay();setWeather(weatherOfTheDay);
//         }}>
//         Get Weather
//         </button>
//     )}
//     </>
// );
// }

// export default Home;