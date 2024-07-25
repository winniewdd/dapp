const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

yargs(hideBin(process.argv))
  .command('start-container [id]', 'Start a Docker container', (yargs: { positional: (arg0: string, arg1: { describe: string; type: string; }) => void; }) => {
    yargs.positional('id', {
      describe: 'Container ID',
      type: 'string',
    });
  }, async (argv: { id: any; }) => {
    if (argv.id) {
      const container = docker.getContainer(argv.id);
      await container.start();
      console.log(`Container ${argv.id} started`);
    }
  })
  .command('stop-container [id]', 'Stop a Docker container', (yargs: { positional: (arg0: string, arg1: { describe: string; type: string; }) => void; }) => {
    yargs.positional('id', {
      describe: 'Container ID',
      type: 'string',
    });
  }, async (argv: { id: any; }) => {
    if (argv.id) {
      const container = docker.getContainer(argv.id);
      await container.stop();
      console.log(`Container ${argv.id} stopped`);
    }
  })
  .command('list-containers', 'List all Docker containers', async () => {
    const containers = await docker.listContainers({ all: true });
    console.log(containers);
  })
  .argv;
