import type { IncomingMessage } from 'http';
import { useBody, useCookie, useCookies } from 'h3';

export default async (req: IncomingMessage) => {
  await useBody(req)

  const token = useCookie(req, 'token');

  console.log('token: ' + token)

  return {};
};
