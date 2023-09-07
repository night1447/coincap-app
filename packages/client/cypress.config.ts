import { defineConfig } from 'cypress';
import * as dotenv from 'dotenv';

dotenv.config();
export default defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
        baseUrl: process.env.VITE_CYPRESS_URL,
    },
});
