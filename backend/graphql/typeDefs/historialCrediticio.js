// backend/graphql/typeDefs/historialCrediticio.js
const { gql } = require('apollo-server-express');

const historialCrediticioTypeDefs = gql`
    type HistorialCrediticio {
        id_historial: ID!
        id_usuario: ID!
        puntaje_crediticio: Int!
        reportes: [String!]!
        fecha_actualizacion: String!
        # Añade otros campos según tu modelo
    }

    type Query {
        historialesCrediticios: [HistorialCrediticio!]!
        historialCrediticio(id: ID!): HistorialCrediticio
    }

    type Mutation {
        crearHistorialCrediticio(id_usuario: ID!, puntaje_crediticio: Int!, reportes: [String!]!): HistorialCrediticio!
        actualizarHistorialCrediticio(id: ID!, puntaje_crediticio: Int, reportes: [String!]): HistorialCrediticio!
        eliminarHistorialCrediticio(id: ID!): String!
    }
`;

module.exports = historialCrediticioTypeDefs;
