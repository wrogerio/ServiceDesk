import { GetAll, Add } from '@/controller/Empresas.Controller'

export default async (req, res) => {
    switch (req.method) {
        case 'GET':
            const result = await GetAll()
            res.json(result)
            break;
        case 'POST':
            const empresa = req.body
            const resultAdd = await Add(empresa)
            res.json(resultAdd)
            break;
        default:
            res.json("Método não permitido")
            break;
    }
}