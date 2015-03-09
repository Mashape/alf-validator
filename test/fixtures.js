exports.invalid = {
  token: {
    har: {
      log: {
        version: '1.2',
        creator: {
          name: '',
          version: ''
        },
        pages: [],
        entries: []
      }
    }
  },

  version: {
    serviceToken: '<my service token>',
    har: {
      log: {
        version: 1.2,
        creator: {
          name: '',
          version: ''
        },
        pages: [],
        entries: []
      }
    }
  },

  creator: {
    serviceToken: '<my service token>',
    har: {
      log: {
        version: '1.2',
        creator: {
          name: ''
        },
        pages: [],
        entries: []
      }
    }
  }
};

exports.minimal = {
  serviceToken: '<my service token>',
  har: {
    log: {
      version: '1.2',
      creator: {
        name: 'ALF Agent',
        version: '1.0'
      },
      entries: [{
        startedDateTime: '2015-01-20T18:22:09.052Z',
        request: {
          method: 'POST',
          url: 'http://api.domain.com/path/',
          httpVersion: 'HTTP/1.1',
          headers: [{
            name: 'Accept',
            value: 'text/plain'
          }, {
            name: 'Cookie',
            value: 'ijafhIAGWF3Awf93f'
          }],
          headersSize: 44
        },
        response: {
          status: 200,
          statusText: 'OK',
          httpVersion: 'HTTP/1.1',
          headers: [{
            name: 'Content-Length',
            value: '11'
          }, {
            name: 'Mime-Type',
            value: 'text/plain'
          }],
          headersSize: 41
        },
        timings: {
          send: 20,
          wait: 38,
          receive: 12
        }
      }]
    }
  }
};

exports.valid = {
  serviceToken: '<my service token>',
  har: {
    log: {
      version: '1.2',
      creator: {
        name: 'ALF Agent',
        version: '1.0'
      },
      entries: [{
        startedDateTime: '2015-01-20T18:22:09.052Z',
        serverIPAddress: '10.10.10.10',
        clientIPAddress: '10.10.10.20',
        time: 50,
        request: {
          method: 'POST',
          url: 'http://api.domain.com/path/',
          httpVersion: 'HTTP/1.1',
          queryString: [{
            name: 'foo',
            value: 'bar'
          }, {
            name: 'baz',
            value: 'abc'
          }],
          headers: [{
            name: 'Accept',
            value: 'text/plain'
          }, {
            name: 'Cookie',
            value: 'ijafhIAGWF3Awf93f'
          }],
          headersSize: 44,
          bodySize: 14,
          content: {
            size: 14,
            mimeType: 'application/json',
            text: '{\'foo\: \'bar\'}'
          }
        },
        response: {
          status: 200,
          statusText: 'OK',
          httpVersion: 'HTTP/1.1',
          headers: [{
            name: 'Content-Length',
            value: '11'
          }, {
            name: 'Mime-Type',
            value: 'text/plain'
          }],
          content: {
            size: 11,
            mimeType: 'text/plain',
            text: 'hello world'
          },
          bodySize: 11,
          headersSize: 41
        },
        timings: {
          blocked: 0,
          dns: 0,
          connect: 15,
          send: 20,
          wait: 38,
          receive: 12,
          ssl: 0
        }
      }]
    }
  }
};

// ALF Spec example from https://github.com/Mashape/api-log-format#full-example
exports.example = {
  serviceToken: "<my service token>",
  har: {
    log: {
      version: "1.2",
      creator: {
        name: "My HAR client",
        version: "1.0"
      },
      entries: [
        {
          startedDateTime: "2015-01-20T18:22:09.052Z",
          serverIPAddress: "10.10.10.10",
          clientIPAddress: "10.10.10.20",
          time: 50,
          request: {
            method: "POST",
            url: "http://api.domain.com/path/",
            httpVersion: "HTTP/1.1",
            queryString: [
              {
                name: "foo",
                value: "bar"
              },
              {
                name: "baz",
                value: "abc"
              }
            ],
            headers: [
              {
                name: "Accept",
                value: "text/plain"
              },
              {
                name: "Cookie",
                value: "ijafhIAGWF3Awf93f"
              }
            ],
            headersSize: 44,
            bodySize: 14,
            content: {
                size: 14,
                mimeType: "application/json",
                text: "{\"foo\": \"bar\"}"
            }
            },
          response: {
            status: 200,
            statusText: "OK",
            httpVersion: "HTTP/1.1",
            headers: [
              {
                name: "Content-Length",
                value: "11"
              },
              {
                name: "Mime-Type",
                value: "text/plain"
              }
            ],
            content: {
                size: 11,
                mimeType: "text/plain",
                text: "hello world"
            },
            bodySize: 11,
            headersSize: 41
          },
          timings: {
            blocked: 0,
            dns: 0,
            connect: 15,
            send: 20,
            wait: 38,
            receive: 12,
            ssl: 0
          }
        }
      ]
    }
  }
};
