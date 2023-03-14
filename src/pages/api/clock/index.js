export default async (req, res) => {
  switch (req.method) {
    case "GET":
      const d = new Date();
      res.status(200).send({
        year: d.getFullYear(),
        month: d.getMonth() + 1,
        day: d.getDate(),
        hour: d.getHours(),
        minute: d.getMinutes(),
        second: d.getSeconds(),
      });
      break;
    default:
      res.json("Método não permitido")
      break;
  }
}