const path = require('path')
const fs = require('fs')

const filePath = path.join(__dirname, '/export/contentful.json')
const file = fs.readFileSync(filePath)

const data = JSON.parse(file)

module.exports = (migration) => {
  data.contentTypes
    .map((content) => content.sys.id)
    .forEach((id) => {
      migration.deleteContentType(id)
    })
}
