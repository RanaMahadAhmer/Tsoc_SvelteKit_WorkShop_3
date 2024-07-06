/** @type {import('./$types').Actions} */
export const actions = {
    login: async ({request}) => {
        const [data] = await Promise.all([request.formData()]);
        const id = data.get('email');
        const password = data.get('password');
        console.log(id);
        console.log(password);
        return {success: true};
    }
};
  
  
  
  