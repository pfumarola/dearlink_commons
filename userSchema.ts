export const additionalPropsSchema = {
  type: 'object',
  required: ['dearId', 'qrCodeCategory'],
  properties: {
    dearId: { type: 'string' },
    qrCode: { type: 'string' },
    qrCodeCategory: {
      type: 'object',
      required: ['_id', 'name'],
      properties: {
        _id: { type: 'string' },
        name: { type: 'string' },
      },
      additionalProperties: false,
    },
  },
  additionalProperties: false,
} as const

export const userSchema = {
  type: 'object',
  required: ['username', 'password', 'origin', 'role'],
  properties: {
    _id: { type: 'string' },
    username: { type: 'string' },
    password: { type: 'string' },
    origin: { type: 'string', enum: ['APP', 'CLIENT']},
    role: { type: 'string', enum: ['visitor', 'user', 'admin'] },
    additionalProps: additionalPropsSchema,
    createdAt: { type: 'string' },
    updatedAt: { type: 'string' },
    createdBy: { type: 'string' },
    updatedBy: { type: 'string' },
  },
  additionalProperties: false,
} as const