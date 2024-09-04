// backend/graphql/typeDefs/resultadoEvaluacion.js
const { gql } = require('apollo-server-express');

const resultadoEvaluacionTypeDefs = gql`
    type ResultadoEvaluacion {
        id_resultado: ID!
        id_solicitud: ID!
        aprobado: Boolean!
        observaciones: String
        fecha_evaluacion: String!
        # Añade otros campos según tu modelo
    }

    type Query {
        resultadosEvaluacion: [ResultadoEvaluacion!]!
        resultadoEvaluacion(id: ID!): ResultadoEvaluacion
    }

    type Mutation {
        crearResultadoEvaluacion(id_solicitud: ID!, aprobado: Boolean!, observaciones: String): ResultadoEvaluacion!
        actualizarResultadoEvaluacion(id: ID!, aprobado: Boolean, observaciones: String): ResultadoEvaluacion!
        eliminarResultadoEvaluacion(id: ID!): String!
    }
`;

module.exports = resultadoEvaluacionTypeDefs;
