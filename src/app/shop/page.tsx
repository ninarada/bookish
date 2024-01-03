import { getItem } from "../api/items/route"

let item = {
    id: 0,
    title: ""
};

async function gItem () {
    item = await getItem();
}

gItem();

export default function Shop () {
    return (
        <main>
            <p>This is Shop page.</p>
            <p>{item.title}</p>
        </main>
      )
}