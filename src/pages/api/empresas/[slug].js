import { GetById, Update, Delete } from '@/controller/Empresas.Controller'

export default async (req, res) => {
    const { slug } = req.query
    const empresa = req.body
    switch (req.method) {
        case 'GET':
            const result = await GetById(slug)
            res.json(result)
            break;
        case 'PUT':
            const resultAdd = await Update(empresa)
            res.json(resultAdd)
            break;
        case 'DELETE':
            const resultDelete = await Delete(slug)
            res.json(resultAdd)
            break;
        default:
            res.json("Método não permitido")
            break;
    }
}
