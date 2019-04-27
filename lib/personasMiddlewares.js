module.exports.datosLlenos = (req, res, next) => {
	const { nombre, edad, apellidos } = req.body;

	if (!nombre)
		return res.send('Falta el nombre');
	if (!edad)
		return res.send('Falta la edad');
	if (!apellidos)
		return res.send('Faltan los apellidos');

	if (typeof(apellidos) != 'object')
		return res.send('Apellidos debe ser objeto');

	if (!apellidos.paterno)
		return res.send('Falta el paterno');
	if (!apellidos.materno)
		return res.send('Falta el materno');

	next();
};

module.exports.tipoDato = (req, res, next) => {
	const { nombre, edad, apellidos, profesion } = req.body;
	let errores = [];

	if (typeof(nombre) != 'string') {
		errores.push({
			mensaje: 'Nombre debe ser texto'
		});
	}
	if (typeof(edad) != 'number') {
		errores.push({
			mensaje: 'Edad debe ser número'
		});
	}
	if (typeof(apellidos.paterno) != 'string') {
		errores.push({
			mensaje: 'Paterno debe ser texto'
		});
	}
	if (typeof(apellidos.materno) != 'string') {
		errores.push({
			mensaje: 'Materno debe ser texto'
		});
	}
	if (profesion && typeof(profesion) != 'string') {
		errores.push({
			mensaje: 'Profesión debe ser texto'
		});
	}

	if (errores.length > 0) {
		return res.send(errores);
	}

	next();
};