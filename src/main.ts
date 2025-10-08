import { login } from "./feature/login";
import { mostrarMesasDisponibles } from "./feature/table-list";
console.log("===== SISTEMA DE RESERVAS v1.0.0 =====");
const acceso = login("ana@example.com", "1234");
if (acceso) {
console.log("Acceso concedido ");
mostrarMesasDisponibles();
} else {
console.log("Acceso denegado ");
}