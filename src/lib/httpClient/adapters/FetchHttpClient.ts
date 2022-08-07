import { iHttpClient } from '../base'

export class FetchHttpClient extends iHttpClient {
  public async get(
    params: iHttpClient.baseRequestParams,
  ): Promise<iHttpClient.response> {
    const { headers } = params

    const response: Response = await fetch(params.url, { headers })

    return {
      status: response.status,
      body: await response.text(),
    }
  }

  public async post(
    params: iHttpClient.writeRequestParams,
  ): Promise<iHttpClient.response> {
    const { headers } = params

    const response: Response = await fetch(params.url, {
      headers,
      body: params.body,
      method: 'POST',
    })

    return {
      status: response.status,
      body: await response.text(),
    }
  }

  public async patch(
    params: iHttpClient.writeRequestParams,
  ): Promise<iHttpClient.response> {
    const { headers } = params

    const response: Response = await fetch(params.url, {
      headers,
      body: params.body,
      method: 'PATCH',
    })

    return {
      status: response.status,
      body: await response.text(),
    }
  }

  public async put(
    params: iHttpClient.writeRequestParams,
  ): Promise<iHttpClient.response> {
    const { headers } = params

    const response: Response = await fetch(params.url, {
      headers,
      body: params.body,
      method: 'PUT',
    })

    return {
      status: response.status,
      body: await response.text(),
    }
  }

  public async delete(
    params: iHttpClient.baseRequestParams,
  ): Promise<iHttpClient.response> {
    const { headers } = params

    const response: Response = await fetch(params.url, {
      headers,
      method: 'DELETE',
    })

    return {
      status: response.status,
    }
  }
}
