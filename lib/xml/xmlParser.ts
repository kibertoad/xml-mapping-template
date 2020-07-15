export function parseXml(xml: string): Promise<any> {
  return new Promise((resolve, reject) => {
    const parseString = require('xml2js').parseString
    parseString(xml, function (err: Error, result: any) {
      if (err) {
        return reject(err)
      }
      resolve(result)
    })
  })
}
