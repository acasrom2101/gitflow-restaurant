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
export function procesarReserva(cliente: string, total: number): string {
    console.log(`Procesando reserva para ${cliente}.`);
    console.log(`Total a pagar: ${total} €`);
    let puntosGanados = Math.floor(total / 10);
    console.log(` El cliente ${cliente} ha ganado ${puntosGanados} puntos.`);
    return "Reserva completada correctamente con puntos de recompensa.";
}