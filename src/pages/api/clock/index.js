export default async (req, res) => {
  switch (req.method) {
    case "GET":
      // get date time from pt-br
      const d = new Date();
      res.json({
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