const empleados = []
for (let i = 0; i < 3; i+=1) {
    const nombre = prompt('Ingrese el nombre del empleado:');
    const ventasMensuales = parseFloat(prompt('Ingrese las ventas mensuales de ' + nombre + ':'));

    empleados.push({nombre, ventasMensuales, comision: 0});
}

function calcularComision(empleado) {
    const porcentajeComision = 0.10;

    const comision = empleado.ventasMensuales * porcentajeComision;

    empleado.comision = comision;
    alert('La comision de ' + empleado.nombre + ' es ' + empleado.comision);
}

empleados.forEach(empleado => {
    calcularComision(empleado);
});

console.log(empleados);

empleados.sort((a, b) =>a.comision - b.comision);

console.log(empleados)

