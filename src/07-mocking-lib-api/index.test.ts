import axios, { AxiosInstance } from 'axios';
import { throttledGetDataFromApi } from './index';

jest.mock('axios');

describe('throttledGetDataFromApi', () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.useRealTimers();
  });

  test('should create instance with provided base url', async () => {
    const responseData = { id: 1, title: 'Example Post' };

    const axiosInstance = {
      get: jest.fn().mockResolvedValueOnce({ data: responseData }),
    } as unknown as AxiosInstance;

    const mockedAxios = axios as jest.Mocked<typeof axios>;
    mockedAxios.create.mockReturnValueOnce(axiosInstance);

    await throttledGetDataFromApi('/posts');

    expect(mockedAxios.create).toHaveBeenCalledWith({
      baseURL: 'https://jsonplaceholder.typicode.com',
    });
  });
  test('should perform request to correct provided url', async () => {
    const responseData = { id: 1, title: 'Example Post' };

    const axiosInstance = {
      get: jest.fn().mockResolvedValueOnce({ data: responseData }),
    } as unknown as AxiosInstance;

    const mockedAxios = axios as jest.Mocked<typeof axios>;
    mockedAxios.create.mockReturnValueOnce(axiosInstance);

    const relativePath = '/posts';
    await throttledGetDataFromApi(relativePath);

    expect(axiosInstance.get).toHaveBeenCalledWith(relativePath);
  });
  test('should return response data', async () => {
    const responseData = { id: 1, title: 'Example Post' };
    const axiosInstance = {
      get: jest.fn().mockResolvedValueOnce({ data: responseData }),
    } as unknown as AxiosInstance;
    const mockedAxios = axios as jest.Mocked<typeof axios>;
    mockedAxios.create.mockReturnValueOnce(axiosInstance);

    const relativePath = '/posts';
    const data = await throttledGetDataFromApi(relativePath);

    expect(data).toEqual(responseData);
  });
});
