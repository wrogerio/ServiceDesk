import { GetById, Update, Delete } from "@/controller/Chamados.Controller";

export default async (req, res) => {
    const { slug } = req.query;
    switch (req.method) {
        case "GET":
            const result = await GetById(slug);
            res.json(result);
            break;
        case "PUT":
            const area = req.body;
            const resultUpdate = await Update(area);
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
