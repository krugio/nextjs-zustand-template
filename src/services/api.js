import axios from 'axios';


export const api = axios.create({
   baseURL:'https://jsonplaceholder.typicode.com'
});


async function listaPlaceHolder() {
  try {
    const response = await api.get('/users/');
    return response;
  } catch (error) {
    const { response } = error;
    const { data } = response;
   
  }
}





export { listaPlaceHolder };
export default api;