// backend/graphql/resolvers/analistaCredito.js
const AnalistaCredito = require('../../models/analista_credito');

const analistaCreditoResolvers = {
    Query: {
        analistasCredito: async () => {
            try {
                return await AnalistaCredito.findAll();
            } catch (error) {
                throw new Error('Error al obtener los analistas de crédito');
            }
        },
        analistaCredito: async (_, { id }) => {
            try {
                return await AnalistaCredito.findByPk(id);
            } catch (error) {
                throw new Error('Error al obtener el analista de crédito');
            }
        },
    },
    Mutation: {
        crearAnalistaCredito: async (_, { nombre, especialidad }) => {
            try {
                const nuevoAnalista = await AnalistaCredito.create({
                    nombre,
                    especialidad,
                });
                return nuevoAnalista;
            } catch (error) {
                throw new Error('Error al crear el analista de crédito');
            }
        },
        actualizarAnalistaCredito: async (_, { id, nombre, especialidad }) => {
            try {
                const analista = await AnalistaCredito.findByPk(id);
                if (!analista) {
                    throw new Error('Analista de crédito no encontrado');
                }
                await analista.update({ nombre, especialidad });
                return analista;
            } catch (error) {
                throw new Error('Error al actualizar el analista de crédito');
            }
        },
        eliminarAnalistaCredito: async (_, { id }) => {
            try {
                const analista = await AnalistaCredito.findByPk(id);
                if (!analista) {
                    throw new Error('Analista de crédito no encontrado');
                }
                await analista.destroy();
                return 'Analista de crédito eliminado correctamente';
            } catch (error) {
                throw new Error('Error al eliminar el analista de crédito');
            }
        },
    },
};

module.exports = analistaCreditoResolvers;
