import {DefaultProvider, bsv} from 'scrypt-ts';
import {Root} from "../../contracts/root";
import {NeucronSigner} from 'neucron-signer';

const provider = new DefaultProvider({network: bsv.Networks.mainnet});
const signer = new NeucronSigner(provider);
let instance: Root;

await signer.login('sales@timechainlabs.io', 'string');
Root.loadArtifact();





/** @type {import('./$types').Actions} */
export const actions = {
    deploy: async ({request}) => {
        const [data] = await Promise.all([request.formData()]);
        const bounty = data.get('bounty');
        const sq = data.get('square');



        const square = BigInt(sq);
        instance = new Root(square);
        await instance.connect(signer);


        const deployTx = await instance.deploy(bounty);
        console.log(
            `smart lock deployed : https://whatsonchain.com/tx/${deployTx.id}`
        );


        return {success: true,deploy:true, tx: deployTx.id};
    },
    unlock: async ({request}) => {
        const [data] = await Promise.all([request.formData()]);
        const root = data.get('root');



        const {tx: callTx} = await instance.methods.unlock(BigInt(root));
        console.log(
            `contract unlocked successfully : https://whatsonchain.com/tx/${callTx.id}`

        );

        return {success: true,unlock:true, tx: callTx.id}
    }
};



