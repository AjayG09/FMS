module.exports = (req, res) => {
  setTimeout(() => {
    res.status(200).sendFile(`GET.json`, { root: __dirname });
    // res.status(422).sendFile('GET.ERROR.422.json', { root: __dirname });
  }, 1000);
};
