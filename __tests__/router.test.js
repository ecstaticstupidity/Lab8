/**
 * @jest-environment jsdom
 */

import { pushToHistory } from "../scripts/router";


describe('pushToHistory Tests', () => {
  test('Settings Case', () => {
    expect(history.length).toBe(1);
    expect(pushToHistory('settings',5)).to;
    expect(history.length).toBe(2);
    expect(history[0]).toBe({ page: 'settings' });

  });

  test('Entry Case', () => {
    expect(pushToHistory('entry', 3)).toContain({ page: 'entry3' });
    expect(history.length).toBe(3);
  })

  test('Empty Case', () => {
    expect(pushToHistory('', 2)).toContain({});
    expect(history.length).toBe(4);
  })
});