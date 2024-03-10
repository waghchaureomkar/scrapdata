import nodeVersion from "./jobs/nodeVersion.js";
import cron from "node-cron";

cron.schedule('*/5 * * * * *', () => {
    console.log('Running a cron job at:', new Date());
    nodeVersion();
    // Your cron job logic goes here
});