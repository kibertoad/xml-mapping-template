import { parseXml } from '../lib/xml/xmlParser'
import fs from 'fs'

describe('xmlParser', () => {
  it('happy path', async () => {
    const sampleXml = fs.readFileSync(__dirname + '/../lib/xml/sample.xml').toString()
    const parsedXml = await parseXml(sampleXml)
    expect(parsedXml).toEqual({
      OTA_HotelAvailRQ: {
        $: {
          EchoToken: 'HP',
          PrimaryLangID: 'EN',
          TimeStamp: '2015-04-01T12:31:54Z',
          Version: '2.001',
          xmlns: 'http://www.opentravel.org/OTA/2003/05',
          'xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
        },
        AvailRequestSegments: [
          {
            AvailRequestSegment: [
              {
                HotelSearchCriteria: [
                  {
                    Criterion: [
                      {
                        HotelRef: [
                          {
                            $: {
                              HotelCode: '1111',
                            },
                          },
                        ],
                      },
                    ],
                  },
                ],
                RatePlanCandidates: [
                  {
                    RatePlanCandidate: [
                      {
                        $: {
                          RatePlanCode: 'BBB',
                        },
                      },
                    ],
                  },
                ],
                RoomStayCandidates: [
                  {
                    RoomStayCandidate: [
                      {
                        $: {
                          Quantity: '1',
                          RoomTypeCode: 'AAA',
                        },
                        GuestCounts: [
                          {
                            $: {
                              IsPerRoom: 'true',
                            },
                            GuestCount: [
                              {
                                $: {
                                  AgeQualifyingCode: '10',
                                  Count: '1',
                                },
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
                StayDateRange: [
                  {
                    $: {
                      End: '2015-09-02',
                      Start: '2015-08-30',
                    },
                  },
                ],
              },
            ],
          },
        ],
        POS: [
          {
            Source: [
              {
                RequestorID: [
                  {
                    $: {
                      ID: 'TTT',
                      ID_Context: 'DUMMY',
                      Type: '13',
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
    })
  })
})
