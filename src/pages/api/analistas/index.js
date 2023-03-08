import { GetAll, Add } from "@/controller/Analistas.Controller";

export default async (req, res) => {
    switch (req.method) {
        case "GET":
            const result = await GetAll();
            res.json(result);
            break;
        case "POST":
            const analista = req.body;
            const resultAdd = await Add(analista);
            res.json(resultAdd);
            break;
        default:
            res.json("Método não permitido")
            break;
    }
}