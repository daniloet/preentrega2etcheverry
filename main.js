const empleados = [
    { nombre: 'Ramiro', ventasMensuales: 50000, comision: 0 },
    { nombre: 'Benjamin', ventasMensuales: 25000, comision: 0 },
    { nombre: 'Danilo', ventasMensuales: 100000, comision: 0 }
]

function calcularComision(empleado) {
    const porcentajeComision = 0.10;

    const comision = empleado.ventasMensuales * porcentajeComision;

    empleado.comision = comision;
    console.log('La comision de ' + empleado.nombre + ' es ' + empleado.comision)
}

empleados.forEach(empleado => {
    calcularComision(empleado);
});

console.log(empleados);

empleados.sort((a, b) =>a.comision - b.comision);

console.log(empleados)

