var job = new CronJob('0 */45 * * * *', () => {
  cleanup()
  .then(() => {
    return run();
  })
  .then(() => {
    console.log('--- all done ---');
    process.exit(0);
  })
  .catch(err => {
    console.log('--- main error ---');
    console.error(err);
    process.exit(1);
  });
}, () => {
  console.log('--- cront done ---');
},
  true,
  'Etc/UTC'
);
