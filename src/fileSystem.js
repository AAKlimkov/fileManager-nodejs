import { chdir, cwd } from 'process';
import { parse } from 'path';

function up() {
  chdir(parse(cwd()).dir);
}
export { up };
