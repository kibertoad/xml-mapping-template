import fs from "fs";
import {parseXml} from "../lib/xml/xmlParser";
import {mapToJson} from "../lib/xml/xmlToJson";

describe('xmlToJson', () => {
    it('happy path', async () => {
        const sampleXml = fs.readFileSync(__dirname + '/../lib/xml/sample.xml').toString()
        const parsedXml = await parseXml(sampleXml)
        const jsonObject = mapToJson(parsedXml)
        expect(jsonObject).toEqual({
            "echoToken": "HP"
        })
    })
})
