import { injectable } from 'inversify'

@injectable()
abstract class iHttpClient {
  abstract get(
    params: iHttpClient.baseRequestParams,
  ): Promise<iHttpClient.response>

  abstract post(
    params: iHttpClient.writeRequestParams,
  ): Promise<iHttpClient.response>

  abstract put(
    params: iHttpClient.writeRequestParams,
  ): Promise<iHttpClient.response>

  abstract patch(
    params: iHttpClient.writeRequestParams,
  ): Promise<iHttpClient.response>

  abstract delete(
    params: iHttpClient.baseRequestParams,
  ): Promise<iHttpClient.response>
}

namespace iHttpClient {
  export interface baseRequestParams {
    url: string
    headers?: Record<string, string>
  }

  export interface writeRequestParams extends baseRequestParams {
    body: string
  }

  export const successStatuses = [200, 201, 202, 203, 204]

  export const errorStatuses = [
    400, 401, 402, 403, 404, 405, 406,
    500, 501, 502, 503, 504,
  ]

  export interface response {
    status: number
    body?: string
  }
}

export default iHttpClient
