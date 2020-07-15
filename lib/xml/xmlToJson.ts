import { AvailabilityXmlRequest } from './SampleXmlTypes'
import { AvailabilityJsonRequest } from '../json/SampleJsonTypes'

export function mapToJson(request: AvailabilityXmlRequest): AvailabilityJsonRequest {
  return {
    echoToken: request.OTA_HotelAvailRQ.$.EchoToken,
  }
}
