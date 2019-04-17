import assert from 'assert';

import queryGet from '../src/index';

describe('query get', () => {
  it('query get with url parameter', () => {
    assert.equal(
      JSON.stringify(queryGet("http://localhost:8080/?test=1&test2=2&test3=3")),
      JSON.stringify({test: "1", test2: "2", test3: "3"})
    );
  });
  it('query get with url parameter', () => {
    assert.equal(
      JSON.stringify(queryGet("http://localhost:8080/?test=1&test2&test3=3")),
      JSON.stringify({test: "1", test2: true, test3: "3"})
    );
  });
  it('query get with url parameter', () => {
    assert.equal(
      JSON.stringify(queryGet("http://localhost:8080/?test=1&==&test3=3")),
      JSON.stringify({test: "1", test3: "3"})
    );
  });
  it('query get with url and no get parameter', () => {
    assert.equal(
      JSON.stringify(queryGet("http://localhost:8080/")),
      JSON.stringify({})
    );
  });
  it('query get without url parameter', () => {
    global.location = {
      search: '?test=1&test2=2&test3=3'
    }
    assert.equal(
      JSON.stringify(queryGet()),
      JSON.stringify({test: "1", test2: "2", test3: "3"})
    );
  });
  it('query get without anything', () => {
    global.location = {
    }
    assert.equal(
      JSON.stringify(queryGet()),
      JSON.stringify({})
    );
  });
});
