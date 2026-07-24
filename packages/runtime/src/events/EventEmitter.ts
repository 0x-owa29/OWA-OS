import type { EventMap } from "@owa/core";

export class EventEmitter {
  private listeners = new Map<
    keyof EventMap,
    Set<(payload: any) => void>
  >();

  on<K extends keyof EventMap>(
    event: K,
    listener: (payload: EventMap[K]) => void
  ) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, new Set());
    }

    this.listeners.get(event)!.add(listener);
  }

  emit<K extends keyof EventMap>(
    event: K,
    payload: EventMap[K]
  ) {
    this.listeners.get(event)?.forEach(listener => {
      listener(payload);
    });
  }
}