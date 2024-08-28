import { app } from '@/config/app';

const port = 3000;

function startServer() {
  const listener = app.listen(port, () => {
    console.log(`Server running at PORT:${port}`);
  });

  listener.on('error', (err) => {
    console.error(err);
    throw err;
  });
}

startServer();
