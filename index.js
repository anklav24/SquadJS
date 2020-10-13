import SquadServer from 'squad-server';
import printLogo from 'squad-server/logo';

const configPath = process.argv[2] || './config.json';

printLogo();
SquadServer.buildFromConfig(configPath).then((server) => {
  server.watch().then(() => {
    console.log(`Watching ${server.serverName}...`);
  });
});
