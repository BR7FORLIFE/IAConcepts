//simulador de entranamiento de un modelo de IA

//CLOUSURES
//1. guardamos los pesos del modelo en una variable private dentro de una funcion

function crearModeloIA(nombre) {
  // --- 1. CLOSURE: Estado Privado ---
  let _pesosInternos = Math.random(); // Variable privada (inaccesible desde fuera)

  const datosBase = {
    nombre: nombre,
    precision: 0.5,
  };

  // --- 2. PROXY: Validación y Seguridad ---
  const modeloProtegido = new Proxy(datosBase, {
    set(target, prop, value) {
      if (prop === "precision") {
        if (value > 1) {
          console.warn(
            "⚠️ Intento de sobrepasar precisión máxima. Ajustando a 1.0",
          );
          target[prop] = 1.0;
        } else if (value < 0) {
          target[prop] = 0.0;
        } else {
          target[prop] = value;
        }
        return true;
      }
      target[prop] = value;
      return true;
    },
  });

  // --- 3. ASINCRONÍA Y LÓGICA ---
  return {
    // Método asíncrono para simular entrenamiento
    entrenar: async function () {
      console.log(
        `🚀 Iniciando entrenamiento de: ${modeloProtegido.nombre}...`,
      );

      // Simulamos carga pesada (Event Loop en acción)
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Modificamos la variable privada del closure
      const incremento = Math.random() * 0.6;
      _pesosInternos += incremento;

      // Actualizamos el proxy (esto disparará la lógica del SET del Proxy)
      modeloProtegido.precision += incremento;

      console.log("✅ Entrenamiento finalizado.");
    },

    obtenerEstado: () => {
      // Retornamos una copia o el proxy para ver los datos,
      // pero nunca exponemos '_pesosInternos' directamente.
      return {
        ...modeloProtegido,
        entrenamientoCompletado: modeloProtegido.precision > 0.5,
      };
    },
  };
}

// --- PRUEBA DE EJECUCIÓN ---
async function ejecutarIA() {
  const miIA = crearModeloIA("Clasificador_V1");

  // Intentamos ver los pesos (Saldrá undefined porque es un Closure)
  console.log("Pesos privados:", miIA._pesosInternos);

  await miIA.entrenar();

  console.log("Estado tras entrenamiento:", miIA.obtenerEstado());

  // Forzamos una actualización manual para probar el Proxy
  // (En un caso real, esto podrías no exponerlo, aquí lo vemos para entender el Proxy)
}

ejecutarIA();
