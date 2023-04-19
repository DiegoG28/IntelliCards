import axios from 'axios';

const URL_API = 'https://intellicardsapi-production.up.railway.app';
export const MusclesApi = {
   getMuscles: async (search) =>
      await axios
         .get(`${URL_API}/muscles/suggest/?search=${search}`)
         .then((response) => {
            if (response.data.length > 0) {
               return response.data;
            }
            return false;
         })
         .catch(() => false),
};
