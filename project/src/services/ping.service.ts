export class PingService {
  constructor() {
    console.log('PingService constructor');
  }

  getPingResponse = () => {
    return 'pong\n';
  }

  echoResponse = (body: any) => {
    return JSON.stringify(body);
  }
}

// Singleton
const $PingService = new PingService();

export { $PingService };
