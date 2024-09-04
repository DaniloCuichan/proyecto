// backend/graphql/typeDefs/analistaCredito.js
const { gql } = require('apollo-server-express');

const analistaCreditoTypeDefs = gql`
    type AnalistaCredito {
        id_analista: ID!
        nombre: String!
        especialidad: String!
        id_usuario: ID!
        # Añade otros campos según tu modelo
    }

    type Query {
        analistasCredito: [AnalistaCredito!]!
        analistaCredito(id: ID!): AnalistaCredito
    }

    type Mutation {
        crearAnalistaCredito(nombre: String!, especialidad: String!, id_usuario: ID!): AnalistaCredito!
        actualizarAnalistaCredito(id: ID!, nombre: String, especialidad: String): AnalistaCredito!
        eliminarAnalistaCredito(id: ID!): String!
    }
`;

module.exports = analistaCreditoTypeDefs;
