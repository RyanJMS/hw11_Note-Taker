const util = require("util");
const fs = require("fs");

const read = util.promisify(fs.readFile);

class Service {
  read() {
    return read("./db/db.json", "utf8");
  }

  receive(note, callback) {
    fs.readFile("./db/db.json", "utf8", (err, data) => {
      if (err) throw err;
      let getData = JSON.parse(data);
      getData.push(note);

      fs.writeFile("./db/db,json", JSON.stringify(getData), (err) => {
        if (err) throw err;

        return callback(getData);
      });
    });
  }

  delete(index, callback) {
    fs.readFile("./db/db.json", "utf8", (err, data) => {
      if (err) throw err;

      let getData = JSON.parse(data);
      getData.splice(index, 1);

      fs.writeFile("./db/db.json", JSON.stringify(getData), (err) => {
        if (err) throw err;
        return callback(getData);
      });
    });
  }
}

module.exports = Service;
