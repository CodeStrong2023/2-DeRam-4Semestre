const express = require('express');
const cors = require('cors');
const mercadopago = require("mercadopago");
const path = require("path");
require('dotenv').config();

mercadopago.configure({
    access_token: "APP_USR-3479855928984815-102310-c761e1010324108d6e9179e18865b93f-469192017", // Asegúrate de usar una variable de entorno
});

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "../client/media")));
app.use(cors());

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "..", "client", "media", "index.html"));
});

app.post('/create_preference', async (req, res) => {
    const { items } = req.body;

    console.log('Received items:', items); // Para depurar

    const preference = {
        items: items.map(item => ({
            title: item.title,
            quantity: parseInt(item.quantity, 10),
            unit_price: parseFloat(item.unit_price), // Asegúrate de que el precio sea un número
        })),
        back_urls: {
            success: 'http://localhost:3000/success',
            failure: 'http://localhost:3000/failure'
        },
        auto_return: 'approved',
    };

    try {
        const response = await mercadopago.preferences.create(preference);
        res.status(200).json({ id: response.body.id, init_point: response.body.init_point });

    } catch (error) {
        console.error('Error creating preference:', error);
        res.status(500).json({ error: "Error al crear la preferencia de pago." });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor en funcionamiento en http://localhost:${PORT}`);
});
