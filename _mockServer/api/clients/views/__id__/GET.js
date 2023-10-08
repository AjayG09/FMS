module.exports = (req, res) => {
  const { id } = req.params;

  setTimeout(() => {
    if (Number(id) >= 0 && Number(id) <= 2) {
      res.status(200).sendFile(`GET.${id}.json`, { root: __dirname });
    } else {
      res.status(422).sendFile('GET.ERROR.422.json', { root: __dirname });
    }
  }, 1000);
};
