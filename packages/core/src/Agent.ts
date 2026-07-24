export interface Agent {
  start(): Promise<void>;
  stop(): Promise<void>;
}