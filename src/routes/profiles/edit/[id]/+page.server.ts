
export async function load({ params, url }) {
    const { id } = params;
    const name = url.searchParams.get('name');
    const email = url.searchParams.get('email');
    return { props: { id, name, email } };
}
