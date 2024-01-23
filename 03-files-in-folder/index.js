const fs = require('fs');
const path = require('path');

const pathFolder = path.join(__dirname, 'secret-folder');

fs.readdir(pathFolder, { withFileTypes: true }, (error, data) => {
  if (error) console.log(error.message);

  data.forEach((item) => {
    if (item.isFile()) {
      const itemPath = path.join(pathFolder, item.name);
      const itemName = path.parse(itemPath).name;
      const itemExt = path.parse(itemPath).ext.slice(1);

      fs.stat(itemPath, (error, stat) => {
        if (error) console.log(error.message);
        console.log(`${itemName} - ${itemExt} - ${stat.size / 1000}kb\n`);
      });
    }
  });
});
