const { exec } = require('child_process');

function startDockerCompose() {
  exec('docker-compose up -d', (error: { message: any; }, stdout: any, stderr: any) => {
    if (error) {
      console.error(`Error starting docker-compose: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`docker-compose stderr: ${stderr}`);
      return;
    }
    console.log(`docker-compose stdout: ${stdout}`);
  });
}

function stopDockerCompose() {
  exec('docker-compose down', (error: { message: any; }, stdout: any, stderr: any) => {
    if (error) {
      console.error(`Error stopping docker-compose: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`docker-compose stderr: ${stderr}`);
      return;
    }
    console.log(`docker-compose stdout: ${stdout}`);
  });
}

startDockerCompose();
stopDockerCompose();
