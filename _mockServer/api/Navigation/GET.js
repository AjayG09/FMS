const jwt = require('jsonwebtoken');
const path = require('path');
const fs = require('fs').promises;
const utils = require('../../utils');

module.exports = async (req, res) => {
  const decodeToken = jwt.decode(req?.headers?.authorization?.split(' ')[1]);
  let realm = decodeToken?.iss?.split('/').pop();
  if (!realm) {
    realm = req.query.realm;
  }

  /** Sets the realm so we can use this context in other parts of the mock server without parsing the token every time */
  utils.realm = realm || 'VW';

  const data = await fs.readFile(path.join(__dirname, './GET.json'), 'utf8');
  const parseData = JSON.parse(data);
  if (parseData[realm]) {
    res.status(200).send(parseData[realm]);
  } else {
    res.status(422).sendFile('GET.ERROR.422.json', { root: __dirname });
  }
};
