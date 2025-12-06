// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

class MockAudioContext {
  destination = { channelCount: 2, maxChannelCount: 2, channelCountMode: 'explicit' };

  constructor() {
    // 明示的にプロトタイプ継承を確保（null になるケースを防ぐ）
    Object.setPrototypeOf(this, MockAudioContext.prototype);
  }

  createGain() {
    return {
      gain: { value: 1, setValueAtTime: () => {} },
      connect: () => {},
      disconnect: () => {},
    };
  }

  createOscillator() {
    return { start: () => {}, stop: () => {}, connect: () => {} };
  }

  createBufferSource() {
    return { start: () => {}, stop: () => {}, connect: () => {}, buffer: null };
  }

  createMediaElementSource() {
    return { connect: () => {}, disconnect: () => {} };
  }

  createAnalyser() {
    return { connect: () => {}, getByteFrequencyData: () => {} };
  }

  decodeAudioData(_buffer: ArrayBuffer) {
    // テストでは ArrayBuffer をそのまま返すか、必要に応じてモックの AudioBuffer を返す
    return Promise.resolve({} as unknown as AudioBuffer);
  }

  resume() { return Promise.resolve(); }
  suspend() { return Promise.resolve(); }
  close() { return Promise.resolve(); }
}

Object.defineProperty(window, 'AudioContext', { value: MockAudioContext, configurable: true });
Object.defineProperty(window, 'webkitAudioContext', { value: MockAudioContext, configurable: true });
