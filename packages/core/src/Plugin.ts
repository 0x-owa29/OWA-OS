export interface Plugin {
  name: string;

  onLoad?(): Promise<void>;
  onUnload?(): Promise<void>;
}