import { GetById, Update, Delete } from "@/controller/Analistas.Controller";

export default async (req, res) => {
    const { slug } = req.query;
    switch (req.method) {
        case "GET":
            const result = await GetById(slug);
            res.json(result);
            break;
        case "PUT":
            const analista = req.body;
            const resultUpdate = await Update(analista);
            res.json(resultUpdate);
            break;
        case "DELETE":
            const resultDelete = await Delete(slug);
            res.json(resultDelete);
            break;
        default:
            res.json("Método não permitido")
            break;
    }
}
