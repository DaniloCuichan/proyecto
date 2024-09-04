// backend/graphql/resolvers/historialCrediticio.js
const HistorialCrediticio = require('../../models/historial_crediticio');

const historialCrediticioResolvers = {
    Query: {
        historialesCrediticios: async () => {
            try {
                return await HistorialCrediticio.findAll();
            } catch (error) {
                throw new Error('Error al obtener los historiales crediticios');
            }
        },
        historialCrediticio: async (_, { id }) => {
            try {
                return await HistorialCrediticio.findByPk(id);
            } catch (error) {
                throw new Error('Error al obtener el historial crediticio');
            }
        },
    },
    Mutation: {
        crearHistorialCrediticio: async (_, { id_usuario, puntaje_crediticio, reportes }) => {
            try {
                const nuevoHistorial = await HistorialCrediticio.create({
                    id_usuario,
                    puntaje_crediticio,
                    reportes,
                    fecha_actualizacion: new Date(),
                });
                return nuevoHistorial;
            } catch (error) {
                throw new Error('Error al crear el historial crediticio');
            }
        },
        actualizarHistorialCrediticio: async (_, { id, puntaje_crediticio, reportes }) => {
            try {
                const historial = await HistorialCrediticio.findByPk(id);
                if (!historial) {
                    throw new Error('Historial crediticio no encontrado');
                }
                await historial.update({ puntaje_crediticio, reportes });
                return historial;
            } catch (error) {
                throw new Error('Error al actualizar el historial crediticio');
            }
        },
        eliminarHistorialCrediticio: async (_, { id }) => {
            try {
                const historial = await HistorialCrediticio.findByPk(id);
                if (!historial) {
                    throw new Error('Historial crediticio no encontrado');
                }
                await historial.destroy();
                return 'Historial crediticio eliminado correctamente';
            } catch (error) {
                throw new Error('Error al eliminar el historial crediticio');
            }
        },
    },
};

module.exports = historialCrediticioResolvers;
