module.exports = {
  src_folders: ['tests/endToEnd'],

  webdriver: {
    start_process: true,
    server_path: require('chromedriver').path,
    port: 3000
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
      chromeOptions: {
        args: ['--headless']
      }
    }
  }
}
