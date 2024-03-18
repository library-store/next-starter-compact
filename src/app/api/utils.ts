import { isObject, isUndefined, isNull } from 'lodash';

interface URLQueryData {
  [key: string]: string | number | boolean | null;
}

export const transformObjToUrlQuery = (data: URLQueryData) => {
  if (!isObject(data)) {
    return '';
  }

  const query = Object.entries(data)
    .filter(([, value]) => !isUndefined(value) && value !== -1 && !isNull(value))
    .map(([key, value]) => `${encodeURIComponent(key)}=${value ? encodeURIComponent(value) : ''}`) // Encode URL
    .join('&');

  return query ? `?${query}` : ''; 
};