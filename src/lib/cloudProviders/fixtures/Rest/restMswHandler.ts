import { rest } from 'msw'
import { restProvidersFixture, restInstanceTypesFixture } from '.'

export const restMswHandler = () => [
  rest.get('/api/v1/cloud-providers', (_, res, ctx) => 
    res(ctx.json(restProvidersFixture)),
  ),
  rest.get('/api/v1/cloud-instance-types', (_, res, ctx) =>
    res(ctx.json(restInstanceTypesFixture)),
  ),
]
