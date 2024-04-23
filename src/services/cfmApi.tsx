import axios from 'axios';
const cfmServices = {
  // https://cfm-api.acutistecnologia.com/benfeitor
  getBenfeitores: async (): Promise<any> => {
    return (await axios
      .get('https://cfm-api.acutistecnologia.com/benfeitor')).data
  },
  getInscricoes: async (): Promise<any> => {
    return (await axios
      .get('https://cfm-api.acutistecnologia.com/cfm')).data
  },
  confirmPayment: async (id: string): Promise<any> => {
    return (await axios
      .get('https://cfm-api.acutistecnologia.com/cfm_confirm_payment/' + id)).data
  },
  confirmNotPaid: async (id: string): Promise<any> => {
    return (await axios
      .get('https://cfm-api.acutistecnologia.com/cfm_confirm_not_paid/' + id)).data
  },
  remove: async (id: string): Promise<any> => {
    return (await axios
      .delete('https://cfm-api.acutistecnologia.com/benfeitor/' + id)).data
  },
  removeCfm: async (id: string): Promise<any> => {
    return (await axios
      .delete('https://cfm-api.acutistecnologia.com/cfm/' + id)).data
  },
  subscription: async (name: string, phone: string, email: string): Promise<any> => {
    return (await axios
      .post('https://cfm-api.acutistecnologia.com/cfm', {
        name, phone, email
      })).data
  },
};

export default cfmServices;