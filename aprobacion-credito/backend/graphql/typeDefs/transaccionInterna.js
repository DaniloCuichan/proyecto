// backend/graphql/typeDefs/transaccionInterna.js
const { gql } = require('apollo-server-express');

const transaccionInternaTypeDefs = gql`
    type TransaccionInterna {
        id_transaccion: ID!
        id_solicitud: ID!
        monto: Float!
        tipo: String!
        fecha_transaccion: String!
        # Añade otros campos según tu modelo
    }

    type Query {
        transaccionesInternas: [TransaccionInterna!]!
        transaccionInterna(id: ID!): TransaccionInterna
    }

    type Mutation {
        crearTransaccionInterna(id_solicitud: ID!, monto: Float!, tipo: String!): TransaccionInterna!
        actualizarTransaccionInterna(id: ID!, monto: Float, tipo: String): TransaccionInterna!
        eliminarTransaccionInterna(id: ID!): String!
    }
`;

module.exports = transaccionInternaTypeDefs;
