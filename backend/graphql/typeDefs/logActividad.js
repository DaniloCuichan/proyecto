// backend/graphql/typeDefs/logActividad.js
const { gql } = require('apollo-server-express');

const logActividadTypeDefs = gql`
    type LogActividad {
        id_log: ID!
        id_usuario: ID!
        accion: String!
        fecha: String!
        descripcion: String
        # Añade otros campos según tu modelo
    }

    type Query {
        logsActividad: [LogActividad!]!
        logActividad(id: ID!): LogActividad
    }

    type Mutation {
        crearLogActividad(id_usuario: ID!, accion: String!, descripcion: String): LogActividad!
        actualizarLogActividad(id: ID!, accion: String, descripcion: String): LogActividad!
        eliminarLogActividad(id: ID!): String!
    }
`;

module.exports = logActividadTypeDefs;
