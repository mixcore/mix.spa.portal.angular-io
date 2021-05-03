import { AxiosRequestConfig } from 'axios';
import { Api } from '../infrastructure/axios/api';
export declare class MixRestService extends Api {
    constructor(modelName: string, viewName: string, specificulture?: string, config?: AxiosRequestConfig);
}
