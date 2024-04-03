export const userSchema = {
  type: 'object',
  properties: {
    _id: { type: 'string' },
    username: { type: 'string' },
    origin: { type: 'string', enum: ['APP', 'CLIENT']},
    role: { type: 'string', enum: ['visitor', 'user', 'admin'] },
    additionalProps: {
      type: 'object',
      properties: {
        dearId: { type: 'string' },
        qrCode: { type: 'string' },
        qrCodeCategory: { type: 'object',
          properties: {
            _id: { type: 'string' },
            name: { type: 'string' },
          },
        },
      },
    },
    createdAt: { type: 'string' },
    updatedAt: { type: 'string' },
    createdBy: { type: 'string' },
    updatedBy: { type: 'string' },
  },
}