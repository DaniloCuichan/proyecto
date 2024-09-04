// backend/graphql/resolvers/usuario.js
const Usuario = require('../../models/usuario');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();

const usuarioResolvers = {
    Query: {
        usuarios: async () => {
            try {
                return await Usuario.findAll();
            } catch (error) {
                throw new Error('Error al obtener los usuarios');
            }
        },
        usuario: async (_, { id }) => {
            try {
                return await Usuario.findByPk(id);
            } catch (error) {
                throw new Error('Error al obtener el usuario');
            }
        },
    },
    Mutation: {
        crearUsuario: async (_, { nombre, correo_electronico, password, role }) => {
            try {
                const hashedPassword = await bcrypt.hash(password, 10);
                const nuevoUsuario = await Usuario.create({
                    nombre,
                    correo_electronico,
                    password: hashedPassword,
                    role,
                });
                return nuevoUsuario;
            } catch (error) {
                throw new Error('Error al crear el usuario');
            }
        },
        actualizarUsuario: async (_, { id, nombre, correo_electronico, password, role }) => {
            try {
                const usuario = await Usuario.findByPk(id);
                if (!usuario) {
                    throw new Error('Usuario no encontrado');
                }
                if (password) {
                    password = await bcrypt.hash(password, 10);
                }
                await usuario.update({ nombre, correo_electronico, password, role });
                return usuario;
            } catch (error) {
                throw new Error('Error al actualizar el usuario');
            }
        },
        eliminarUsuario: async (_, { id }) => {
            try {
                const usuario = await Usuario.findByPk(id);
                if (!usuario) {
                    throw new Error('Usuario no encontrado');
                }
                await usuario.destroy();
                return 'Usuario eliminado correctamente';
            } catch (error) {
                throw new Error('Error al eliminar el usuario');
            }
        },
        loginUsuario: async (_, { correo_electronico, password }) => {
            try {
                const usuario = await Usuario.findOne({ where: { correo_electronico } });
                if (!usuario) {
                    throw new Error('Usuario no encontrado');
                }
                const validPassword = await bcrypt.compare(password, usuario.password);
                if (!validPassword) {
                    throw new Error('Contraseña inválida');
                }
                const token = jwt.sign(
                    { id_usuario: usuario.id_usuario, role: usuario.role },
                    process.env.JWT_SECRET,
                    { expiresIn: '1h' }
                );
                return {
                    token,
                    usuario,
                };
            } catch (error) {
                throw new Error('Error en el login del usuario');
            }
        },
    },
};

module.exports = usuarioResolvers;
