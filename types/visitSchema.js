const visitSchema = {
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "object",
  "properties": {
    "datetime": {
      "type": "string",
      "format": "date-time"
    },
    "visitorId": {
      "type": "string"
    },
    "dearId": {
      "type": "string"
    },
    "additionalVisitors": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "number": {
            "type": "number"
          },
          "type": {
            "type": "string"
          },
          "slug": {
            "type": "string"
          },
        },
      }
    }
  },
  "required": [
    "datetime",
    "visitorId",
    "dearId"
  ]
}

export default visitSchema
