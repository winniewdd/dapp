// Disable no-unused-vars, broken for spread args
/* eslint no-unused-vars: off */
import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron';

export type Channels = 'ipc-example';

const electronHandler = {
  ipcRenderer: {
    sendMessage(channel: Channels, ...args: unknown[]) {
      ipcRenderer.send(channel, ...args);
    },
    on(channel: Channels, func: (...args: unknown[]) => void) {
      const subscription = (_event: IpcRendererEvent, ...args: unknown[]) =>
        func(...args);
      ipcRenderer.on(channel, subscription);

      return () => {
        ipcRenderer.removeListener(channel, subscription);
      };
    },
    once(channel: Channels, func: (...args: unknown[]) => void) {
      ipcRenderer.once(channel, (_event, ...args) => func(...args));
    },
  },
  listContainers: () => ipcRenderer.invoke('list-containers'),
  listImages: () => ipcRenderer.invoke('list-images'),
  dockerService: () => ipcRenderer.invoke('check-docker-service'),
  createContainer: (imageName: any, containerName:any) => ipcRenderer.invoke('create-container', imageName, containerName),
  startContainer: (containerId: any) => ipcRenderer.invoke('start-container', containerId),
  stopContainer: (containerId: any) => ipcRenderer.invoke('stop-container', containerId),
  checkContainerStatus: (containerId: any) => ipcRenderer.invoke('check-container', containerId),
};

contextBridge.exposeInMainWorld('electron', electronHandler);

export type ElectronHandler = typeof electronHandler;
