import Evento from "../models/eventoModel.js";
import { z } from "zod";

// Validar evento 
const createSchema = z.object({
    titulo: z.string({
        invalid_type_error: "O titulo do evento deve ser um texto",
        required_error: "Titulo é obrigatório"
    }),
    local: z.string({
        invalid_type_error: "O local do evento deve ser um texto",
        required_error: "Local é obrigatório"
    }),
    cidade: z.string({
        invalid_type_error: "A cidade do evento deve ser um texto",
        required_error: "Cidade é obrigatório"
    }),
    data: z.string().pipe(z.coerce.date()),
    categoria: z.string({
        invalid_type_error: "A categoria do evento deve ser um texto",
        required_error: "Categoria é obrigatória"
    }),
    palestrante: z.string({
        invalid_type_error: "O nome do palestrante deve ser um texto",
        required_error: "Palestrante é obrigatório"
    }),
    vagas: z.string({
        required_error: "Vagas é obrigatório"
    }),
    ingresso: z.string({
        required_error: "Ingresso é obrigatório"
    })
});
//validar id
const idSchema = z.object({
    id: z.string().uuid({ message: 'ID inválido' })
});

//validar update
const updateSchema = z.object({
    titulo: z.string({
        invalid_type_error: "O titulo do evento deve ser um texto",
        required_error: "Titulo é obrigatório"
    }),
    local: z.string({
        invalid_type_error: "O local do evento deve ser um texto",
        required_error: "Local é obrigatório"
    }),
    cidade: z.string({
        invalid_type_error: "A cidade do evento deve ser um texto",
        required_error: "Cidade é obrigatório"
    }),
    data: z.string().pipe(z.coerce.date()),
    categoria: z.string({
        invalid_type_error: "A categoria do evento deve ser um texto",
        required_error: "Categoria é obrigatória"
    }),
    palestrante: z.string({
        invalid_type_error: "O nome do palestrante deve ser um texto",
        required_error: "Palestrante é obrigatório"
    }),
    vagas: z.string({
        required_error: "Vagas é obrigatório"
    }),
    ingresso: z.string({
        required_error: "Ingresso é obrigatório"
    })
});

// POST -> criar
export const create = async (request, response) => {
    const createValidation = createSchema.safeParse(request.body);
    if (!createValidation.success) {
        return response.status(400).json(createValidation.error);
    }

    const { titulo, local, cidade, data, categoria, palestrante, vagas, ingresso } = createValidation.data;
    
    // Campo opcional
    const descricao = request.body?.descricao || null;
    const image = request.body?.image || null;
    const disponibilidade = request.body?.disponibilidade || "Disponível";

    const novoEvento = { titulo, local, image, cidade, data, categoria, palestrante, vagas, ingresso, descricao, disponibilidade };

    try {
        const addEvento = await Evento.create(novoEvento);
        response.status(201).json({ message: "Evento criado", addEvento });
    } catch (error) {
        console.log(error)
        response.status(500).json({ message: "Erro ao criar evento" });
    }
};

// GET => 3333/eventos/select?page=1&limit=10
export const getEventos = async (request, response) => {
    const page = parseInt(request.query.page) || 1;
    const limit = parseInt(request.query.limit) || 10;
    const offset = (page - 1) * 10;

    try {
        const eventos = await Evento.findAndCountAll({
            limit,
            offset
        });//select * from tabela

        const totalPages = Math.ceil(eventos.count / limit)
        response.status(200).json({
            totalEventos: eventos.count,
            totalPages,
            paginaAtual: page,
            itensPorPage: limit,
            proximaPage: totalPages === 0 ? null : `http://localhost:3333/eventos/page=${page + 1}`,
            eventos: eventos.rows,
        });

    } catch (error) {
        console.log(error);
        response.status(500).json({ error: "Error ao buscar a eventos", error });
    }
    // try {
    //     const eventos = await Evento.findAll();
    //     res.status(200).json(eventos);
    // } catch (error) {
    //     console.error("Erro ao listar eventos:", error);
    //     res.status(500).json({ error: "Erro ao listar eventos" });
    // }
};

//GET -> pegar evento por id
export const getEvento = async (request, response) => {
    const idValidation = idSchema.safeParse(request.params);
    if (!idValidation.success) {
        return response.status(400).json({ message: idValidation.error });
    }
    const id = idValidation.data.id;

    try {
        const evento = await Evento.findByPk(id);
        if (!evento) {
            return response.status(404).json({ message: "Evento não encontrada" });
        }
        response.status(200).json(evento);

    } catch (error) {
        console.log(error);
        response.status(500).json({ message: "Erro ao buscar evento" });
    }
};

// //PUT -> mod 
// export const updateEvento = async (request, response) => {
//     const idValidation = idSchema.safeParse(request.params);
//     if (!idValidation.success) {
//         return response.status(400).json({ message: idValidation.error });
//     };

//     const id = idValidation.data.id;

//     const updateValidation = updateSchema.safeParse(request.body);
//     if (!updateValidation.success) {
//         return response.status(400).json({ message: updateValidation.error });
//     };

//     const { titulo, local, image, cidade, data, categoria, palestrante, vagas, ingresso } = updateValidation.data;
//     const descricao = request.body.descricao || "";
//     const disponibilidade = request.body?.disponibilidade || "Disponível";

//     const eventoAtualizado = {
//         titulo, local, image, cidade, data, categoria, palestrante, vagas, ingresso, descricao, disponibilidade
//     };
//     try {
//         const [numAffectedRow] = await Evento.update(eventoAtualizado, {
//             where: { id },
//         });
//         if (numAffectedRow <= 0) {
//             return response.status(404).json({ message: "Evento não encontrado" });
//         }
//         response.status(200).json({ message: "Evento atualizado com sucesso" });
//     } catch (error) {
//         console.log(error);
//         response.status(500).json({ message: "Erro ao atualizar evento" });
//     }
// };

// //DELETE -> del por id 
// export const deleteTarefa = async (request, response) => {
//     const idValidation = idSchema.safeParse(request.params);
//     if (!idValidation.success) {
//         return response.status(400).json({ message: idValidation.error });
//     }
//     const id = idValidation.data.id;

//     try {
//         const eventoDeletado = await Evento.destroy({ where: { id } });
//         if (eventoDeletado === 0) {
//             return response.status(404).json({ message: "Evento não existe" });
//         }

//         response.status(200).json({ message: "Evento deletada com sucesso!" });

//     } catch (error) {
//         console.log(error);
//         response.status(500).json({ error: "Error ao deletar a evento", error });
//     }
// };
