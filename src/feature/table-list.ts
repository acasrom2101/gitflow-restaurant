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