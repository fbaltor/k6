import http from 'k6/http';
import { check } from 'k6';

export default function () {
  const rnd = Math.floor(Math.random() * 1000);
  // You must use the below adress since k6 is running from inside docker.
  const localhost = '127.0.0.1';
  const response = http.get(`http://${localhost}:3000/${rnd}`);
  check(response, {
    'is status 200': (r) => r.status === 200,
    'is id the same we asked': (r) => {
      const id = Number(r.json('id'));
      return id === rnd;
    },
  });
}

export let options = {
  vus: 1,
  duration: '5s',
};
