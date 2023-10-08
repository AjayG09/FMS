module.exports = (req, res) => {
  const { vendorId } = req.query;

  setTimeout(() => {
    if (vendorId) {
      res.status(200).sendFile(`GET.${vendorId}.json`, { root: __dirname });
    } else {
      res.status(422).sendFile('GET.ERROR.422.json', { root: __dirname });
    }
  }, 1000);
};
