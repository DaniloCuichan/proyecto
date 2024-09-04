// backend/graphql/typeDefs/apiExterna.js
const { gql } = require('apollo-server-express');

const apiExternaTypeDefs = gql`
    type ApiExterna {
        id_api: ID!
        nombre: String!
        url_base: String!
        token_acceso: String
        # Añade otros campos según tu modelo
    }

    type Query {
        apisExternas: [ApiExterna!]!
        apiExterna(id: ID!): ApiExterna
    }

    type Mutation {
        crearApiExterna(nombre: String!, url_base: String!, token_acceso: String): ApiExterna!
        actualizarApiExterna(id: ID!, nombre: String, url_base: String, token_acceso: String): ApiExterna!
        eliminarApiExterna(id: ID!): String!
    }
`;

module.exports = apiExternaTypeDefs;
