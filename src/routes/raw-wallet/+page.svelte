<script lang="ts">
import {PrivateKey} from "@bsv/sdk"

let WIF:string
let address:string

function  createKeys(){
const privateKey = PrivateKey.fromRandom()
WIF = privateKey.toWif()
console.log("Private Key WIF format is ",WIF)
address = privateKey.toAddress()
console.log("Your Bitcoin Address is ",address)
}

</script>

<section>
<button class="bg-black text-white p-1 rounded shadow-rose-300" on:click={createKeys}>Generate New Wallet Keys</button>
<p>Private Key WIF format is {WIF}</p>
<p>Your BitCoin Address is {address}</p>
</section>