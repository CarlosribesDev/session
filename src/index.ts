import dotenv from 'dotenv';
dotenv.config();

import app from './app';

const PORT = process.env.PORT || 3000;

async function main() {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

main();