// -----------------------------
// Feature: Listado de Mesas
// -----------------------------
interface Mesa {
numero: number;
capacidad: number;
ocupada: boolean;
}
let mesas: Mesa[] = [
{ numero: 1, capacidad: 2, ocupada: false },
{ numero: 2, capacidad: 4, ocupada: true },
{ numero: 3, capacidad: 6, ocupada: false }
];
export function mostrarMesasDisponibles(): void {
console.log(" Mesas disponibles:");
mesas.forEach(mesa => {
 const estado = mesa.ocupada ? "Ocupada " : "Disponible ";
 console.log(`Mesa ${mesa.numero} (Capacidad: ${mesa.capacidad}) - ${estado}`);
});

}