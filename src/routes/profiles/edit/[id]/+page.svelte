<script>
    export let data

    export let form;

</script>


<div
    class="mt-10 pt-10 w-full max-w-xl p-12 mx-auto rounded-lg shadow-xl dark:bg-white/10 bg-white/30 ring-1 ring-gray-900/5 backdrop-blur-lg"
>
    <form method="POST" action="?/update">
        <div class="flex flex-wrap -mx-3 mb-2">
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-city"
                >
                    Name
                </label>
                <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="name"
                    type="text"
                    name="name"
                    bind:value={data.props.name}
                />
            </div>
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-city"
                >
                    Email
                </label>
                <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="email"
                    type="text"
                    name="email"
                    bind:value={data.props.email}
                />
            </div>
            <input type="hidden" name="id" id="id" bind:value={data.props.id}>
            <button
                type="submit"
                class="bg-yellow-500 hover:bg-blue-700 text-white font-bold mt-5 ml-2 px-2 rounded "
            >
                Update Applicant
            </button>
        </div>
    </form>
    {#if form?.success}
        <!-- this message is ephemeral; it exists because the page was rendered in
               response to a form submission. it will vanish if the user reloads -->
        <script>
            window.location.href = '../';
        </script>
    {/if}
</div>
