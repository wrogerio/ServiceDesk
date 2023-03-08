import { GetAll, Add } from "@/controller/Andamentos.Controller";

export default async (req, res) => {
    switch (req.method) {
        case "GET":
            const result = await GetAll();
            res.json(result);
            break;
        case "POST":
            const andamento = req.body;
            const resultAdd = await Add(andamento);
            res.json(resultAdd);
            break;
        default:
            res.json("Método não permitido")
            break;
    }
}