export const bookingSchema = {
  type: 'object',
  required: ['dearId', 'date', 'time', 'duration', 'status', 'user'],
  properties: {
    _id: { type: 'string' },
    dearId: { type: 'string' },
    date: { type: 'string' },
    time: { type: 'string' },
    duration: { type: 'number' },
    status: { type: 'string', enum: ['active', 'canceled', 'completed'] },
    user: { type: 'string' },
    createdAt: { type: 'string' },
    updatedAt: { type: 'string' },
    createdBy: { type: 'string' },
    updatedBy: { type: 'string' },
  },
  additionalProperties: false,
} as const