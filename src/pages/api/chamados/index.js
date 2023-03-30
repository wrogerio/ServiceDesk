import { GetAll, GetEncerrados, Add } from "@/controller/Chamados.Controller";

export default async (req, res) => {
    const { areaid, andamentoid } = req.headers;
    switch (req.method) {
        case "GET":
            if (andamentoid) {
                const result = await GetEncerrados(areaid);
                res.json(result);
            }
            else {
                const result = await GetAll(areaid);
                res.json(result);
            }
            break;
        case "POST":
            const area = req.body;
            const resultAdd = await Add(area);
            res.json(resultAdd);
            break;
        default:
            res.json("Método não permitido")
            break;
    }
}