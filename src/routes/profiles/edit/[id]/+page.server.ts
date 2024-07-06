export async function load({params, url}) {
    const {id} = params;
    const name = url.searchParams.get('name');
    const email = url.searchParams.get('email');
    return {props: {id, name, email}};
}


// import { error } from '@sveltejs/kit';
import {createPool, sql} from '@vercel/postgres'
import {POSTGRES_URL} from '$env/static/private'


/** @type {import('./$types').Actions} */
export const actions = {

    update: async ({request}) => {
        const data = await request.formData();
        const db = createPool({connectionString: POSTGRES_URL})
        const client = await db.connect();

        const email = data.get('email');
        const name = data.get('name');
        const id = data.get('id');


        const updateUser = await client.sql`
            UPDATE names
            SET email = ${email},
                name  = ${name}
            WHERE id = ${id};`
        return {success: true};
    },
};


