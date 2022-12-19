import { opendir } from 'fs/promises';

 async function open(path) {
    try {
        const dir = await opendir(`${path}`);
        for await (const dirent of dir)
            console.log(dirent.name);
    } catch (err) {
        console.error(err);
    }

}

export  {
    open
}
