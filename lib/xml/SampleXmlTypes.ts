export type AvailabilityXmlRequest = {
  OTA_HotelAvailRQ: {
    $: {
      EchoToken: string
      PrimaryLangID: string
      TimeStamp: string
      Version: string
      xmlns: string
      'xmlns:xsi': string
    }
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
                          HotelCode: string
                        }
                      }
                    ]
                  }
                ]
              }
            ]
            RatePlanCandidates: [
              {
                RatePlanCandidate: [
                  {
                    $: {
                      RatePlanCode: string
                    }
                  }
                ]
              }
            ]
            RoomStayCandidates: [
              {
                RoomStayCandidate: [
                  {
                    $: {
                      Quantity: string
                      RoomTypeCode: string
                    }
                    GuestCounts: [
                      {
                        $: {
                          IsPerRoom: string
                        }
                        GuestCount: [
                          {
                            $: {
                              AgeQualifyingCode: string
                              Count: string
                            }
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
            StayDateRange: [
              {
                $: {
                  End: string
                  Start: string
                }
              }
            ]
          }
        ]
      }
    ]
    POS: [
      {
        Source: [
          {
            RequestorID: [
              {
                $: {
                  ID: string
                  ID_Context: string
                  Type: string
                }
              }
            ]
          }
        ]
      }
    ]
  }
}
