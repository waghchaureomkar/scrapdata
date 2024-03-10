import puppeteer, { ElementHandle } from "puppeteer";
import NodeVersionModal from "../database/nodeversionModal";

const url = "https://nodejs.org/en";

const nodeVersion = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    await page.waitForSelector('#home-intro > div:nth-child(4) > a');
    console.log("newdata");
    const data = await page.evaluate(() => {
        return document.querySelector('#home-intro > div:nth-child(4) > a').textContent;
    })
    let latestVersion = data.split(" ")[0];
    console.log("Node.js latest Version:", latestVersion);
    let newVersion = new NodeVersionModal({
        name: "node",
        version: latestVersion,
        creation_date: new Date(),
        modified_date: new Date(),
    })
    newVersion.save();
    browser.close();
}

export default nodeVersion;