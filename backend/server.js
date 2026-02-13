const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Configuration Nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER, // Votre email (le serveur)
        pass: process.env.EMAIL_PASS  // Votre mot de passe d'application
    }
});

// Route POST pour recevoir le devis
app.post('/api/devis', async (req, res) => {
    const { nom, tel, email, service, ville, description } = req.body;

    try {
        // --- 1. EMAIL POUR VOUS (ADMIN) ---
        const mailOptionsAdmin = {
            from: `"Site Web" <${process.env.EMAIL_USER}>`,
            replyTo: email, // Pour répondre directement au client
            to: process.env.EMAIL_DEST, // Votre adresse perso
            subject: `🔔 Nouvelle demande : ${service} - ${nom}`,
            html: `
                <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #ddd;">
                    <h2 style="color: #0F172A;">Nouveau Prospect</h2>
                    <ul style="background: #f1f5f9; padding: 20px;">
                        <li><strong>Nom :</strong> ${nom}</li>
                        <li><strong>Email :</strong> ${email}</li>
                        <li><strong>Tél :</strong> ${tel}</li>
                        <li><strong>Service :</strong> ${service}</li>
                        <li><strong>Ville :</strong> ${ville}</li>
                    </ul>
                    <h3>Message :</h3>
                    <p style="padding: 10px; border-left: 4px solid #0EA5E9;">${description}</p>
                </div>
            `
        };

        // --- 2. EMAIL POUR LE CLIENT (CONFIRMATION) ---
        const mailOptionsClient = {
            from: `"Service Client Global Étanchéité" <${process.env.EMAIL_USER}>`,
            to: email, // L'adresse du client
            subject: `Confirmation de votre demande de devis - ${service}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <div style="background-color: #0F172A; padding: 20px; text-align: center;">
                        <h2 style="color: #ffffff; margin: 0;">Merci de votre confiance</h2>
                    </div>
                    
                    <div style="padding: 20px; border: 1px solid #eee; border-top: none;">
                        <p>Bonjour <strong>${nom}</strong>,</p>
                        
                        <p>Nous avons bien reçu votre demande de devis concernant : <strong>${service}</strong>.</p>
                        
                        <p>Nos experts techniques vont étudier votre projet. Vous recevrez une estimation détaillée ou un appel de notre part sous <strong>24 à 48 heures</strong>.</p>
                        
                        <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
                        
                        <h4 style="color: #0F172A;">Récapitulatif de votre demande :</h4>
                        <p style="color: #666; font-size: 14px;">
                            <em>"${description}"</em>
                        </p>
                        
                        <div style="background-color: #f8fafc; padding: 15px; border-radius: 5px; margin-top: 20px;">
                            <p style="margin: 0; font-size: 12px; color: #64748b;">
                                Si vous avez des photos ou des documents complémentaires, vous pouvez répondre directement à cet email.
                            </p>
                        </div>
                        
                        <p style="margin-top: 30px;">Cordialement,<br><strong>L'équipe Global Étanchéité</strong></p>
                    </div>
                </div>
            `
        };

        // --- ENVOI DES DEUX EMAILS ---
        // On utilise await pour attendre que les emails partent
        await transporter.sendMail(mailOptionsAdmin);
        console.log('Email Admin envoyé.');

        await transporter.sendMail(mailOptionsClient);
        console.log('Email Client envoyé.');

        // Si tout s'est bien passé
        res.status(200).json({ message: 'Emails envoyés avec succès' });

    } catch (error) {
        console.error("Erreur lors de l'envoi :", error);
        // Même si ça échoue, on ne veut pas forcément dire au client que SON email a échoué
        // s'il a mal tapé son adresse, mais on renvoie une erreur 500 pour le debug.
        res.status(500).json({ message: "Erreur serveur lors de l'envoi", error: error.toString() });
    }
});

app.listen(PORT, () => {
    console.log(`Serveur Backend démarré sur le port ${PORT}`);
});