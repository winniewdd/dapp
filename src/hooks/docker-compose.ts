const path = require('path');
const dockerCompose = require('docker-compose');

async function startCompose(projectName: any, filePath: any) {
  try {
    await dockerCompose.upAll({ cwd: path.resolve(filePath), log: true, projectName });
    return true;
  } catch (error) {
    console.error('Error starting Docker Compose:', error);
    throw error;
  }
}

async function stopCompose(projectName: any, filePath: any) {
  try {
    await dockerCompose.upAll({ cwd: path.resolve(filePath), log: true, projectName });
    return true;
  } catch (error) {
    console.error('Error stopping Docker Compose:', error);
    throw error;
  }
}

module.exports = {
  startCompose,
  stopCompose,
};
