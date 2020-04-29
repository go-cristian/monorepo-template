const file = require('fs').readFileSync('contentful-export.json')

const data = JSON.parse(file)

module.exports = (migration) => {
  data.contentTypes
    .map((content) => content.sys.id)
    .forEach((id) => {
      migration.deleteContentType(id)
    })
}
