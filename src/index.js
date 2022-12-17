import { argv } from 'node:process';

const parseArgs = () => {
  const userName = argv[2].slice(11);
  console.log(userName);

};

parseArgs ()
