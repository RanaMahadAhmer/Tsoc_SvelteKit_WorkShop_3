<script>
    export let form
</script>


<div
        class="mt-10 pt-10 w-full max-w-xl p-12 mx-auto rounded-lg shadow-xl dark:bg-white/10 bg-white/30 ring-1 ring-gray-900/5 backdrop-blur-lg"
>
    <form method="POST" action="?/deploy">
        <div class="flex flex-wrap -mx-3 mb-2">
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="bounty"
                >
                    Bounty
                </label>
                <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="bounty"
                        type="number"
                        placeholder="Enter Bounty"
                        name="bounty"

                />
            </div>
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="square"
                >
                    Square
                </label>
                <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="square"
                        type="number"
                        placeholder="Enter square"
                        name="square"
                />
            </div>

            <button
                    type="submit"
                    class="bg-yellow-500 hover:bg-blue-700 text-white font-bold mt-5 ml-2 px-2 rounded "
            >
                Deploy Bounty
            </button>
        </div>
        {#if form?.success && form?.deploy}
            <p class="pt-2">Bounty Deployed Successfully: <a style="color: blue"
                                                             target="_blank"
                                                             href='https://whatsonchain.com/tx/{form?.tx}'>WhatsOnChain Transaction
                Link!</a>
            </p>
        {/if}
    </form>


</div>
<div
        class="mt-10 pt-10 w-full max-w-xl p-12 mx-auto rounded-lg shadow-xl dark:bg-white/10 bg-white/30 ring-1 ring-gray-900/5 backdrop-blur-lg"
>
    <form method="POST" action="?/unlock">
        <div class="flex flex-wrap -mx-3 mb-2">
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="root"
                >
                    Root
                </label>
                <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="root"
                        type="number"
                        placeholder="Enter Root Awnser"
                        name="root"
                />
            </div>
            <button
                    type="submit"
                    class="bg-yellow-500 hover:bg-blue-700 text-white font-bold mt-5 ml-2 px-2 rounded "
            >
                Unlock Bounty
            </button>
        </div>

        {#if form?.success && form?.unlock}
            <p class="pt-2">Bounty Unlocked Successfully: <a style="color: blue"
                                                             target="_blank"
                                                             href='https://whatsonchain.com/tx/{form?.tx}'>WhatsOnChain Transaction
                Link!</a>
            </p>
        {/if}
    </form>


</div>
