// backend/graphql/typeDefs/usuario.js
const { gql } = require('apollo-server-express');

const usuarioTypeDefs = gql`
    type Usuario {
        id_usuario: ID!
        nombre: String!
        correo_electronico: String!
        password: String!
        role: String!
        # Añade otros campos según tu modelo
    }

    type Query {
        usuarios: [Usuario!]!
        usuario(id: ID!): Usuario
    }

    type Mutation {
        crearUsuario(nombre: String!, correo_electronico: String!, password: String!, role: String!): Usuario!
        actualizarUsuario(id: ID!, nombre: String, correo_electronico: String, password: String, role: String): Usuario!
        eliminarUsuario(id: ID!): String!
        loginUsuario(correo_electronico: String!, password: String!): AuthPayload!
    }

    type AuthPayload {
        token: String!
        usuario: Usuario!
    }
`;

module.exports = usuarioTypeDefs;
