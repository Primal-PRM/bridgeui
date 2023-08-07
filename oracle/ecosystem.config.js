module.exports = {
  apps: [
    {
      name: 'Oracle-signature-request',
      script: 'yarn watcher:signature-request',
      time: true
    },
    {
      name: 'Oracle-collected-signatures',
      script: 'yarn watcher:collected-signatures',
      time: true
    },
    {
      name: 'Oracle-affirmation-request',
      script: 'yarn watcher:affirmation-request',
      time: true
    },
    {
      name: 'Oracle-sender-home',
      script: 'yarn sender:home',
      time: true
    },
    {
      name: 'Oracle-sender-foreign',
      script: 'yarn sender:foreign',
      time: true
    }
  ]
}
