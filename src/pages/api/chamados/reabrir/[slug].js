import { ReabrirChamado } from "@/controller/Chamados.Controller";

export default async (req, res) => {
    const { slug } = req.query;
    switch (req.method) {
        case "GET":
            const result = await ReabrirChamado(slug);
            res.json(result);
            break;
        default:
            res.json("Método não permitido")
            break;
    }
}
