import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDpeVJjPCkFCw_zN88CYqqvrBvCub4hXLI",
  authDomain: "analisis-cliente-37465.firebaseapp.com",
  projectId: "analisis-cliente-37465",
  storageBucket: "analisis-cliente-37465.appspot.com",
  messagingSenderId: "526683671911",
  appId: "1:526683671911:web:94ef9eecc35a94bf4ff3c2",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

const collectionRef = collection(db, "clientes");

export const crearCliente = async (formValues) => {
  const { name, surname, age, birthdate } = formValues;
  try {
    await addDoc(collectionRef, {
      name,
      surname,
      age,
      birthdate,
    });
    alert("se agregó cliente correctamente");
  } catch (err) {
    alert("error al crear cliente");
    console.error(err.message, err.code);
  }
};

export const obtenerClientes = async () => {
  try {
    const response = await getDocs(collectionRef);
    const clientes = response.docs.map((cliente) => ({...cliente.data(),id: cliente.id}));
    return clientes;
  } catch (err) {
    console.err("Error al obtener clientes", {
      message: err.message,
      code: err.code,
    });
  }
};
