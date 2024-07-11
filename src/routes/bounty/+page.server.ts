// import {DefaultProvider, bsv} from 'scrypt-ts';
// import {Root} from "../../contracts/root";
// import {NeucronSigner} from 'neucron-signer';
//
// const provider = new DefaultProvider({network: bsv.Networks.mainnet});
// const signer = new NeucronSigner(provider);
// let instance: Root;
//
// await signer.login('sales@timechainlabs.io', 'string');
// Root.loadArtifact();
//
//
// export const actions = {
//    deploy: async ({request}) => {
//        const [data] = await Promise.all([request.formData()]);
//
//        const bounty = data.get('bounty');
//        const sq = data.get('square');
//
//        console.log(bounty);
//        console.log(sq);
//
//        const square = BigInt(sq);
//        instance = new Root(square);
//        await instance.connect(signer);
//        console.log("Here")
//
//        const deployTx = await instance.deploy(bounty);
//        console.log(
//            'smart lock deployed : https://whatsonchain.com/tx/'
//        );
//
//
//        return {success: true, tx: "deployTx.id"};
//    },
//    unlock: async ({request}) => {
//        const [data] = await Promise.all([request.formData()]);
//
//        const root = data.get('root');
//        console.log(root);
//
//        const {tx: callTx} = await instance.methods.unlock(root);
//        console.log(
//            'contract unlocked successfully : https://whatsonchain.com/tx/' +
//            callTx.id
//        );
//
//        return {success: true, tx: callTx}
//    },
//
// };
//
//
//
