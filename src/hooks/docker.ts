const Docker = require('dockerode');
const docker = new Docker({ socketPath: '/var/run/docker.sock' });

function listContainers() {
  return docker.listContainers({ all: true });
}

function checkContainerStatus(containerId: any) {
  const container = docker.getContainer(containerId);
  return container.inspect();
}

async function createContainer(imageName: any, containerName: any) {
  // 检查镜像是否存在
  const images = await docker.listImages();
  const imageExists = images.some((image: { RepoTags: string | any[]; }) => image.RepoTags && image.RepoTags.includes(imageName));

  // 如果镜像不存在，拉取镜像
  if (!imageExists) {
    await new Promise((resolve, reject) => {
      docker.pull(imageName, (err: any, stream: any) => {
        if (err) {
          return reject(err);
        }
        docker.modem.followProgress(stream, (err: any, res: unknown) => (err ? reject(err) : resolve(res)));
      });
    });
  }

  // 创建新容器
  const container = await docker.createContainer({
    Image: imageName,
    name: containerName,
    Tty: true,
  });

  // 启动新容器
  await container.start();
  return { Id: container.id, Name: containerName };
}

function startContainer(containerId: any) {
  const container = docker.getContainer(containerId);
  return container.start();
}

function stopContainer(containerId: any) {
  const container = docker.getContainer(containerId);
  return container.stop();
}

function dockerService() {
  return docker.info();
}

function listImages() {
  return docker.listImages();
}

module.exports = {
  listContainers,
  startContainer,
  stopContainer,
  dockerService,
  listImages,
  checkContainerStatus,
  createContainer,
};
