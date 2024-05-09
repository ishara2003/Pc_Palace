import { getEnv } from "./envConfig";

let env = getEnv();

const ENDPOINT_TESTING = env?.ENDPOINT;



export const PRODUCT_MICROSERVICE = ENDPOINT_TESTING + 'products/'



export const PRODUCT_TYPE_MICROSERVICE = PRODUCT_MICROSERVICE + 'filter_by_type?'



export const MANUFACTURE_MICROSERVICE = PRODUCT_MICROSERVICE + 'filter_by_manufacture?'
export const PROCESSOR_MICROSERVICE   = PRODUCT_MICROSERVICE + 'filter_by_processor?'
export const WORKSTATION_MICROSERVICE = PRODUCT_MICROSERVICE + 'filter_by_workstation?'
export const GPU_MICROSERVICE         = PRODUCT_MICROSERVICE + 'filter_by_gpu?'
export const RAM_MICROSERVICE         = PRODUCT_MICROSERVICE + 'filter_by_ram?'
export const SCREEN_SIZE_MICROSERVICE = PRODUCT_MICROSERVICE + 'filter_by_screen_size?'



export const MF_SS_CPU_GPU_RAM = PRODUCT_MICROSERVICE + 'filter_by_mf_ss_cpu_gpu_ram?'
export const MF_SS_CPU_GPU = PRODUCT_MICROSERVICE + 'filter_by_mf_ss_cpu_gpu?'
export const MF_SS_CPU_RAM = PRODUCT_MICROSERVICE + 'filter_by_mf_ss_cpu_ram?'
export const MF_SS_GPU_RAM = PRODUCT_MICROSERVICE + 'filter_by_mf_ss_gpu_ram?'
export const MF_CPU_GPU_RAM = PRODUCT_MICROSERVICE + 'filter_by_mf_cpu_gpu_ram?'



export const WS_CPU_GPU_RAM = PRODUCT_MICROSERVICE + 'filter_all?'



export const WS_CPU_GPU     = PRODUCT_MICROSERVICE + 'filter_by_three?'
export const WS_CPU_RAM     = PRODUCT_MICROSERVICE + 'filter_by_workstation_processor_ram?'
export const WS_GPU_RAM     = PRODUCT_MICROSERVICE + 'filter_by_workstation_gpu_ram?'
export const CPU_GPU_RAM    = PRODUCT_MICROSERVICE + 'filter_by_three_2nd?'



export const WS_CPU         = PRODUCT_MICROSERVICE + 'filter_by_workstation_processor?'
export const WS_GPU         = PRODUCT_MICROSERVICE + 'filter_by_workstation_gpu?'
export const WS_RAM         = PRODUCT_MICROSERVICE + 'filter_by_workstation_ram?'
export const CPU_GPU        = PRODUCT_MICROSERVICE + 'filter_by_processor_gpu?'
export const CPU_RAM        = PRODUCT_MICROSERVICE + 'filter_by_processor_ram?'
export const GPU_RAM        = PRODUCT_MICROSERVICE + 'filter_by_gpu_ram?'
