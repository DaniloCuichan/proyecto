// backend/controllers/solicitudCreditoController.js
const SolicitudCredito = require('../models/solicitud_credito');

// Obtener todas las solicitudes de crédito
exports.getSolicitudesCredito = async (req, res) => {
    try {
        const solicitudes = await SolicitudCredito.findAll();
        res.json(solicitudes);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las solicitudes de crédito' });
    }
};

// Obtener una solicitud de crédito por ID
exports.getSolicitudCreditoById = async (req, res) => {
    try {
        const solicitud = await SolicitudCredito.findByPk(req.params.id);
        if (!solicitud) {
            return res.status(404).json({ error: 'Solicitud de crédito no encontrada' });
        }
        res.json(solicitud);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener la solicitud de crédito' });
    }
};

// Crear una nueva solicitud de crédito
exports.createSolicitudCredito = async (req, res) => {
    try {
        const nuevaSolicitud = await SolicitudCredito.create(req.body);
        res.status(201).json(nuevaSolicitud);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear la solicitud de crédito' });
    }
};

// Actualizar una solicitud de crédito
exports.updateSolicitudCredito = async (req, res) => {
    try {
        const solicitud = await SolicitudCredito.findByPk(req.params.id);
        if (!solicitud) {
            return res.status(404).json({ error: 'Solicitud de crédito no encontrada' });
        }
        await solicitud.update(req.body);
        res.json(solicitud);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar la solicitud de crédito' });
    }
};

// Eliminar una solicitud de crédito
exports.deleteSolicitudCredito = async (req, res) => {
    try {
        const solicitud = await SolicitudCredito.findByPk(req.params.id);
        if (!solicitud) {
            return res.status(404).json({ error: 'Solicitud de crédito no encontrada' });
        }
        await solicitud.destroy();
        res.json({ message: 'Solicitud de crédito eliminada' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar la solicitud de crédito' });
    }
};
