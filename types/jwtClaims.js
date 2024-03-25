exports.jwtClaimsSchema = {
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "object",
  "properties": {
    "username": { "type": "string" },
    "tenant": { "type": "string" },
    "role": { "type": "string" },
    "origin": { "type": "string" },
    "iat": { "type": "number" },
    "exp": { "type": "number" },
    "isSuperAdmin": { "type": "boolean" }
  },
  "required": ["username", "tenant", "role", "origin", "iat", "exp", "isSuperAdmin"]
}