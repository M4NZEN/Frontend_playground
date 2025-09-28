// 🔹 Función que prepara la pizza y devuelve una promesa
const prepararPizza = () => {
    const pizza = true; // Cambia a false para simular que falla

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (pizza) {
                resolve("🍕 Pizza lista"); // Promesa cumplida
            } else {
                reject("❌ Pizza no lista"); // Promesa fallida
            }
        }, 3000); // espera 1.5 segundos
    });
};

// 🔹 Función async que pide la pizza
const pedirPizza = async () => {
    console.log("🕐 Pidiendo pizza...");

    try {
        const resultado = await prepararPizza(); // Espera a que la promesa se cumpla
        console.log("✅ Éxito:", resultado);
    } catch (error) {
        console.log("❌ Error:", error); // Atrapa el error si la promesa falla
    } finally {
        console.log("🍽️ Pedido procesado (finalmente se ejecuta esto)");
    }
};

// 🔹 Ejecutar
pedirPizza();
