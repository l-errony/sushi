
/**
 * отправляет fetch
 * @param {string} url - url для запроса
 * @param {object} fields - url для запроса
 * @returns {Promise} - Propmise с результатом запроса
 */
export const getApiResource = async (url) => {
   /*let exmp = {action: 'get_products'};
   let form_data = null;

   if(fields !== null){
      form_data = new FormData();
      for(let key in fields){
         form_data.append(key, fields[key]);
      }
   }

   let options = {};

   if(form_data !== null){
      options.method = 'post';
      options.body = form_data;
   }*/

   try {
      const res = await fetch(url)

      if (!res.ok){
         console.error('Could not fetch', res.status)
         return false
      }
      return await res.json()
   }catch (error){
      console.error('Could not fetch', error.message)
      return false
   }
}

/*

export const makeCuncurrentResponse = async (array_of_url) => {
   const res = await Promise.all(array_of_url.map(res => {
      return fetch(res).then(res => res.json())
   }))

   return res
}
*/
