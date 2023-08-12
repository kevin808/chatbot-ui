import { OPENAI_API_TYPE } from '../utils/app/const';

export interface OpenAIModel {
  id: string;
  name: string;
  maxLength: number; // maximum length of a message
  tokenLimit: number;
}

export enum OpenAIModelID {
  GPT_3_5 = 'gpt-3.5-turbo',
  GPT_3_5_AZ = 'gpt-35-turbo',
  GPT_3_5_16k_AZ = 'gpt-35-turbo-16k',
  Text_Embedding_Ada_AZ = 'text-embedding-ada-002',
  Code_Davinci_002_AZ = 'code-davinci-002',
  GPT_4 = 'gpt-4',
  GPT_4_32K = 'gpt-4-32k',
}

// in case the `DEFAULT_MODEL` environment variable is not set or set to an unsupported model
export const fallbackModelID = OpenAIModelID.GPT_3_5_AZ;

export const OpenAIModels: Record<OpenAIModelID, OpenAIModel> = {
  [OpenAIModelID.GPT_3_5]: {
    id: OpenAIModelID.GPT_3_5,
    name: 'GPT-3.5',
    maxLength: 12000,
    tokenLimit: 4000,
  },
  [OpenAIModelID.GPT_3_5_AZ]: {
    id: OpenAIModelID.GPT_3_5_AZ,
    name: 'GPT-3.5',
    maxLength: 12000,
    tokenLimit: 4000,
  },
  [OpenAIModelID.GPT_3_5_16k_AZ]: {
    id: OpenAIModelID.GPT_3_5_16k_AZ,
    name: 'GPT-3.5-16k',
    maxLength: 48000,
    tokenLimit: 16000,
  },
  [OpenAIModelID.Code_Davinci_002_AZ]: {
    id: OpenAIModelID.Code_Davinci_002_AZ,
    name: 'Code-Davinci-002',
    maxLength: 12000,
    tokenLimit: 4000,
  },
  [OpenAIModelID.Text_Embedding_Ada_AZ]: {
    id: OpenAIModelID.Text_Embedding_Ada_AZ,
    name: 'Text_Embedding_Ada',
    maxLength: 24000,
    tokenLimit: 8000,
  },
  [OpenAIModelID.GPT_4]: {
    id: OpenAIModelID.GPT_4,
    name: 'GPT-4',
    maxLength: 24000,
    tokenLimit: 8000,
  },
  [OpenAIModelID.GPT_4_32K]: {
    id: OpenAIModelID.GPT_4_32K,
    name: 'GPT-4-32K',
    maxLength: 96000,
    tokenLimit: 32000,
  },
};
