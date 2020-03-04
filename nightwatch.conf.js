module.exports = {
  src_folders: ['tests/endToEnd'],

  webdriver: {
    start_process: true,
    server_path: 'node_modules/.bin/chromedriver',
    port: 9515
  },

  test_settings: {
    default: {
      screenshots: {
        enabled: true,
        on_failure: true,
        on_error: true,
        path: 'tests/endToEnd/screenshots/'
      }
    },
    desiredCapabilities: {
      browserName: 'chrome',
      javascriptEnabled: true,
      acceptSslCerts: true,
      chromeOptions: {
        args: ['--headless']
      }
    }
  }
}