// backend/graphql/typeDefs/solicitudCredito.js
const { gql } = require('apollo-server-express');

const solicitudCreditoTypeDefs = gql`
    type SolicitudCredito {
        id_solicitud: ID!
        monto: Float!
        plazo: Int!
        id_usuario: ID!
        estatus: String!
        fecha_creacion: String!
        # Añade otros campos según tu modelo
    }

    type Query {
        solicitudesCredito: [SolicitudCredito!]!
        solicitudCredito(id: ID!): SolicitudCredito
    }

    type Mutation {
        crearSolicitudCredito(monto: Float!, plazo: Int!, id_usuario: ID!, estatus: String!): SolicitudCredito!
        actualizarSolicitudCredito(id: ID!, monto: Float, plazo: Int, estatus: String): SolicitudCredito!
        eliminarSolicitudCredito(id: ID!): String!
    }
`;

module.exports = solicitudCreditoTypeDefs;
