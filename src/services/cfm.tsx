import axios from 'axios';
const cfmServices = {
  getInscricoes: async (): Promise<any> => {
    return (await axios
      .get('http://18.224.212.72/inscricoes')).data
  },
  confirmPayment: async (id: string): Promise<any> => {
    return (await axios
      .get('http://18.224.212.72/confirm_payment/' + id)).data
  },
  confirmNotPaid: async (id: string): Promise<any> => {
    return (await axios
      .get('http://18.224.212.72/confirm_not_paid/' + id)).data
  },
  remove: async (id: string): Promise<any> => {
    return (await axios
      .get('http://18.224.212.72/delete/' + id)).data
  },
  subscription: async (name: string, phone: string): Promise<any> => {
    return (await axios
      .post('http://18.224.212.72/manual_subscription', {
        name, phone
      })).data
  },
};

export default cfmServices;