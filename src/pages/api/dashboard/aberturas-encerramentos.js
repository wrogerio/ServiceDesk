import { GetAbertuarasEncerramentos } from '@/controller/Dashboard.Controller'

export default async (req, res) => {
    switch (req.method) {
        case 'GET':
            const result = await GetAbertuarasEncerramentos()
            res.json(result)
            break;
        default:
            res.json("Método não permitido")
            break;
    }
}