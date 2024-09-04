// backend/graphql/typeDefs/documento.js
const { gql } = require('apollo-server-express');

const documentoTypeDefs = gql`
    type Documento {
        id_documento: ID!
        tipo_documento: String!
        url: String!
        id_solicitud: ID!
        fecha_subida: String!
        # Añade otros campos según tu modelo
    }

    type Query {
        documentos: [Documento!]!
        documento(id: ID!): Documento
    }

    type Mutation {
        crearDocumento(tipo_documento: String!, url: String!, id_solicitud: ID!): Documento!
        actualizarDocumento(id: ID!, tipo_documento: String, url: String): Documento!
        eliminarDocumento(id: ID!): String!
    }
`;

module.exports = documentoTypeDefs;
