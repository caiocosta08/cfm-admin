import axios from 'axios';
const cfmServices = {
  getInscricoes: async (): Promise<any> => {
    return (await axios
      .get('http://cfm-api.acutistecnologia.com/cfm')).data
  },
  confirmPayment: async (id: string): Promise<any> => {
    return (await axios
      .get('http://cfm-api.acutistecnologia.com/cfm_confirm_payment/' + id)).data
  },
  confirmNotPaid: async (id: string): Promise<any> => {
    return (await axios
      .get('http://cfm-api.acutistecnologia.com/cfm_confirm_not_paid/' + id)).data
  },
  remove: async (id: string): Promise<any> => {
    return (await axios
      .delete('http://cfm-api.acutistecnologia.com/cfm/' + id)).data
  },
  subscription: async (name: string, phone: string, email: string): Promise<any> => {
    return (await axios
      .post('http://cfm-api.acutistecnologia.com/cfm', {
        name, phone, email
      })).data
  },
};

export default cfmServices;