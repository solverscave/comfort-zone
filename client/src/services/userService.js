import http from './httpService';
import { apiUrl } from '../config.json';

const apiEndpoint = apiUrl + '/users';

export function register(user) {
  return http.post(apiEndpoint, {
    email: user.email,
    password: user.password,
    name: user.name,
    phone: user.phone,
    sector: user.sector,
    address: user.address,
    role: user.role,
    imageUrl: 'http://localhost:3000/uploads/avatar.jpg',
  });
}
