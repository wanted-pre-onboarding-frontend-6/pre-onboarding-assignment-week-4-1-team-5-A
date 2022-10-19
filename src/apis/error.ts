import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

class ApiError<T = any> extends Error implements AxiosError<T> {
  config!: AxiosRequestConfig<any>;
  code?: string | undefined;
  request?: any;
  response?: AxiosResponse<T, any> | undefined;
  isAxiosError!: boolean;
  status?: string | undefined;
  toJSON!: () => object;

  constructor(message: string, error: AxiosError<T>) {
    super(message ?? error.message);
    this.config = error.config;
    this.code = error.code;
    this.request = error.request;
    this.response = error.response;
    this.isAxiosError = error.isAxiosError;
    this.status = error.status;
    this.toJSON = error.toJSON;

    const errosrStatus = error.response?.status || 0;
    let name = 'ApiError';

    if (errosrStatus === 400) {
      name = 'BadRequest';
    }
    if (errosrStatus === 401) {
      name = 'Unauthorized';
    }
    if (errosrStatus === 403) {
      name = 'Forbidden';
    }
    if (errosrStatus === 404) {
      name = 'NotFound';
    }
    if (errosrStatus === 500) {
      name = 'InternalServerError';
    }

    this.name = name;
    this.stack = error.stack;
  }
}
export default ApiError;
