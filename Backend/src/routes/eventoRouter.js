import { Router } from "express";
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
import { create, getEventos, getEvento } from "../controllers/eventoController.js";

const router = Router();

// Configuração do multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '..', 'uploads')); // Define o diretório de upload
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Define o nome único para o arquivo
    }
});

// Validação do tipo de arquivo
const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif/;
        const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
        const mimeType = fileTypes.test(file.mimetype);

        if (extname && mimeType) {
            return cb(null, true);  // Arquivo permitido
        } else {
            cb(new Error('Apenas imagens são permitidas!'), false);  // Arquivo não permitido
        }
    }
});

// Definição das rotas
router.get('/listar', getEventos);
router.post('/criar', upload.single('imagem'), (req, res, next) => {
    // Middleware para capturar erros do multer
    try {
        create(req, res); // Chama o controlador para criar o evento
    } catch (error) {
        next(error);  // Passa o erro para o middleware de erro
    }
});
router.get('/:id', getEvento);
// router.put('/:id', updateEvento);
// router.delete('/:id', deleteEvento);

// Middleware de tratamento de erros
router.use((err, req, res, next) => {
    if (err instanceof multer.MulterError) {
        // Erros do multer
        return res.status(400).send({ message: 'Erro no upload de arquivo.', error: err.message });
    } else if (err) {
        // Erros gerais
        return res.status(400).send({ message: err.message });
    }
    next();
});

export default router;
