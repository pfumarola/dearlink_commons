const configurationsSchema = {
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "object",
  "properties": {
    "maxNumberOfVisits": {
      "type": "integer"
    },
    "dateBlacklist": {
      "type": "array",
      "items": {
        "type": "string",
        "format": "date"
      }
    },
  },
  "required": [
    "maxNumberOfVisits"
  ]
}

export default configurationsSchema
