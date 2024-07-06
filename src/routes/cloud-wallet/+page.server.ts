/** @type {import('./$types').Actions} */
import NeucronSDK from "neucron-sdk";


export const actions = {
    login: async ({request}) => {
        const [data] = await Promise.all([request.formData()]);
        const id = data.get('email');
        const password = data.get('password');
        console.log(id);
        console.log(password);

        const neucron = new NeucronSDK();

        const authModule = neucron.authentication;
        const walletModule = neucron.wallet;

        const loginResponse = await authModule.login({email: id, password: password});
        console.log(loginResponse);

        const DefaultWalletBalance = await walletModule.getWalletBalance({});
        console.log(DefaultWalletBalance);

        return {success: true, login: true, data: DefaultWalletBalance['data']['balance']['summary']};
    },
    send: async ({request}) => {
        const [data] = await Promise.all([request.formData()]);
        const id = data.get('email');
        const password = data.get('password');
        const paymail = data.get('paymail');
        const ammount = data.get('ammount');
        console.log(id);
        console.log(password);
        console.log(paymail);
        console.log(ammount);


        const neucron = new NeucronSDK();

        const authModule = neucron.authentication;
        const walletModule = neucron.wallet;


        const loginResponse = await authModule.login({email: id, password: password});
        console.log(loginResponse);


        const DefaultWalletBalance = await walletModule.getWalletBalance({});
        console.log(DefaultWalletBalance);

        const options = {
            outputs: [
                {
                    address: paymail,
                    note: 'I send u satoshi',
                    amount: Number(ammount),
                }
            ]
        };
        const payResponse = await neucron.pay.txSpend(options);
        console.log(payResponse);

        return {success: true, send: true, tx: payResponse['data']['txid']};
    }
};
  
  
  
  