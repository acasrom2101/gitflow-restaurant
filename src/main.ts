import { login } from "./feature/login";
import { mostrarMesasDisponibles } from "./feature/table-list";
console.log("===== SISTEMA DE RESERVAS v1.0.0 =====");
const acceso = login("test@dummy.com", "12345");
if (acceso) {
    console.log("Acceso exitoso");
    mostrarMesasDisponibles();
} else {
    console.log("Usuario no reconocido ");
}