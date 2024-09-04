// backend/graphql/resolvers/resultadoEvaluacion.js
const ResultadoEvaluacion = require('../../models/resultado_evaluacion');

const resultadoEvaluacionResolvers = {
    Query: {
        resultadosEvaluacion: async () => {
            try {
                return await ResultadoEvaluacion.findAll();
            } catch (error) {
                throw new Error('Error al obtener los resultados de evaluación');
            }
        },
        resultadoEvaluacion: async (_, { id }) => {
            try {
                return await ResultadoEvaluacion.findByPk(id);
            } catch (error) {
                throw new Error('Error al obtener el resultado de evaluación');
            }
        },
    },
    Mutation: {
        crearResultadoEvaluacion: async (_, { id_solicitud, aprobado, observaciones }) => {
            try {
                const nuevoResultado = await ResultadoEvaluacion.create({
                    id_solicitud,
                    aprobado,
                    observaciones,
                    fecha_evaluacion: new Date(),
                });
                return nuevoResultado;
            } catch (error) {
                throw new Error('Error al crear el resultado de evaluación');
            }
        },
        actualizarResultadoEvaluacion: async (_, { id, aprobado, observaciones }) => {
            try {
                const resultado = await ResultadoEvaluacion.findByPk(id);
                if (!resultado) {
                    throw new Error('Resultado de evaluación no encontrado');
                }
                await resultado.update({ aprobado, observaciones });
                return resultado;
            } catch (error) {
                throw new Error('Error al actualizar el resultado de evaluación');
            }
        },
        eliminarResultadoEvaluacion: async (_, { id }) => {
            try {
                const resultado = await ResultadoEvaluacion.findByPk(id);
                if (!resultado) {
                    throw new Error('Resultado de evaluación no encontrado');
                }
                await resultado.destroy();
                return 'Resultado de evaluación eliminado correctamente';
            } catch (error) {
                throw new Error('Error al eliminar el resultado de evaluación');
            }
        },
    },
};

module.exports = resultadoEvaluacionResolvers;
