const readline = require('readline');
const express = require('express');
const cors = require('cors'); // Import the cors middleware
const { exec } = require('child_process');
const fs = require('fs-extra'); // You need to install fs-extra for copying directories
const { firefox, chromium } = require('playwright');
const path = require('path');
let email, password;


/**
 * Function to drag and drop an element from a draggable location to a target location.
 * 
 * @param {Page} page - The Playwright page instance.
 * @param {string} draggableSelector - The selector for the draggable element (e.g. '[data-testid="asset-draggable"]').
 * @param {string} dropTargetSelector - The selector for the drop target element (e.g. '[data-testid="timeline-scroll-container"]').
 */
async function dragAndDropToCenter(page, draggableSelector, dropTargetSelector) {
    // Get the center of the draggable element
    const draggableCenter = await page.evaluate(selector => {
        const element = document.querySelector(selector);
        const rect = element.getBoundingClientRect();
        return {
            x: rect.left + (rect.width / 2) + window.scrollX,
            y: rect.top + (rect.height / 2) + window.scrollY
        };
    }, draggableSelector);

    // Get the center of the drop target element
    const dropTargetCenter = await page.evaluate(selector => {
        const element = document.querySelector(selector);
        const rect = element.getBoundingClientRect();
        return {
            x: rect.left + (rect.width / 2) + window.scrollX,
            y: rect.top + (rect.height / 2) + window.scrollY
        };
    }, dropTargetSelector);

    // Simulate the drag and drop by moving the mouse
    await page.mouse.move(draggableCenter.x, draggableCenter.y); // Move to draggable element
    await page.mouse.down(); // Click and hold the draggable element
    await sleep(1000)
    await page.mouse.move(dropTargetCenter.x, dropTargetCenter.y, { steps: 10 }); // Move to drop target
    await page.mouse.up(); // Release the element at the drop target
}

/**
 * Function to drag and drop an element from a draggable location to the bottom-left corner of the target location.
 * 
 * @param {Page} page - The Playwright page instance.
 * @param {string} draggableSelector - The selector for the draggable element (e.g. '[data-testid="asset-draggable"]').
 * @param {string} dropTargetSelector - The selector for the drop target element (e.g. '[data-testid="timeline-scroll-container"]').
 */
async function dragAndDropToBottomLeft(page, draggableSelector, dropTargetSelector) {
    // Get the center of the draggable element
    const draggableCenter = await page.evaluate(selector => {
        const element = document.querySelector(selector);
        const rect = element.getBoundingClientRect();
        return {
            x: rect.left + (rect.width / 2) + window.scrollX,
            y: rect.top + (rect.height / 2) + window.scrollY
        };
    }, draggableSelector);

    // Get the bottom-left corner of the drop target element
    const dropTargetBottomLeft = await page.evaluate(selector => {
        const element = document.querySelector(selector);
        const rect = element.getBoundingClientRect();
        return {
            x: rect.left + window.scrollX, // Left edge of the target
            y: rect.bottom + window.scrollY // Bottom edge of the target
        };
    }, dropTargetSelector);

    // Simulate the drag and drop by moving the mouse
    await page.mouse.move(draggableCenter.x, draggableCenter.y); // Move to draggable element
    await page.mouse.down(); // Click and hold the draggable element
    await sleep(1000)
    await page.mouse.move(dropTargetBottomLeft.x, dropTargetBottomLeft.y, { steps: 10 }); // Move to bottom-left of the drop target
    await page.mouse.up(); // Release the element at the drop target
}

/**
 * Returns the center coordinates of an element's hitbox.
 * 
 * @param {string} selector - The CSS selector or attribute to target the element (e.g. '[data-testid="asset-draggable"]').
 * @returns {Object} An object containing the `x` and `y` coordinates of the element's center.
 */
function getCenterOfElement(selector) {
    // Find the element using the selector
    const element = document.querySelector(selector);

    if (!element) {
        throw new Error(`Element with selector ${selector} not found.`);
    }

    // Get the element's bounding rectangle
    const rect = element.getBoundingClientRect();

    // Calculate the center of the element, adjusted for page scroll
    const centerX = rect.left + (rect.width / 2) + window.scrollX;
    const centerY = rect.top + (rect.height / 2) + window.scrollY;

    return {
        x: centerX,
        y: centerY
    };
}


// Example usage:
var videosFolder = './hellow'
function getAllFilePaths(folderPath) {
    return new Promise((resolve, reject) => {
        fs.readdir(folderPath, (err, files) => {
            if (err) {
                return reject(err); // Handle error
            }

            // Create absolute file paths by joining the folder path with each file
            const filePaths = files.map(file => path.join(folderPath, file));
            resolve(filePaths);
        });
    });
}

function prompt(question) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}
// Function to handle the checking of credentials
async function checkCreds() {

    // Check if creds.json exists
    if (fs.existsSync('creds.json')) {
        const creds = JSON.parse(fs.readFileSync('creds.json', 'utf8'));
        email = creds.email;
        password = creds.password;

        // If both email and password exist
        if (email && password) {
            const userInput = await prompt(`You have \nEmail:${email}\nPassword:${password}\nAre these credentials correct? (yes/no): `);
            if (userInput.toLowerCase().startsWith('y')) {
                console.log('Credentials are correct.');
            } else {
                console.log('Please re-enter your credentials.');
                await enterAndSaveCreds();
            }
        } else {
            console.log('Missing email or password. Please enter new credentials.');
            await enterAndSaveCreds();
        }
    } else {
        console.log('creds.json not found. Please enter your credentials.');
        await enterAndSaveCreds();
    }
}

// Function to prompt for credentials and save them to creds.json
async function enterAndSaveCreds() {
    const email = await prompt("Enter your email: ");
    const password = await prompt("Enter your password: ");
    
    const creds = { email, password };
    
    fs.writeFileSync('creds.json', JSON.stringify(creds, null, 2), 'utf8');
    console.log('Credentials saved.');
    await checkCreds();
}

async function simulateEnterKey(page) {
    await page.keyboard.press('Enter');
}
const sleep = (ms) => new Promise((resolve, reject) => {
    setTimeout(resolve, ms)
})
async function clickSelector(page, selector) {
    await page.waitForSelector(selector, { state: 'visible' });
    const element = await page.$(selector);
    if (element) {
        await element.click();
    } else {
        console.error(`Element with selector '${selector}' not found.`);
    }
}
/**
* Find a page that matches the specified content or URL.
* @param {string|RegExp} content - Content to match against the page content.
* @param {string|RegExp} url - URL to match against the page URL.
* @param {boolean} matchFull - Whether to match the full content/URL or just a part of it.
* @returns {Promise<object|null>} The matching page or null if not found.
*/
async function findPage(context, url, matchFull) {
    const pages = context.pages();

    for (const page of pages) {
        const pageContent = await page.content();
        const pageUrl = page.url();
        ; ('Page:', pageUrl)
        const urlMatch = matchFull
            ? (typeof url === 'string' ? pageUrl === url : url.test(pageUrl))
            : (typeof url === 'string' ? pageUrl.includes(url) : url.test(pageUrl));

        if (urlMatch) {
            return page;
        }
    }

    return null;
}
/**
* Close all pages in the browser context except for the page that matches the specified content or the spared page.
* @param {object} context - The browser context to search within.
* @param {string|RegExp} content - Content to match against the page content.
* @param {object} sparedPage - The page that should be spared from closing.
* @returns {Promise<void>} A promise that resolves when all other pages are closed.
*/
async function closeOtherPages(context, sparedPage) {
    sparedPage.isActive = true;
    const pages = context.pages();

    for (const page of pages) {
        if (page.isActive) continue;
        page.close()
    }
    delete sparedPage.isActive
}
async function getInputValue(page, selector) {
    const value = await page.$eval(selector, input => input.value);
    return value;
}

async function waitPageLoad(page) {
    while (true) {
        await sleep(1);
        try { if (await page.evaluate("document.readyState") == "complete") break; } catch { }
    }
}

async function type(page, selector, input) {
    const element = await page.$(selector);
    if (!element) {
        console.error(`Element with selector '${selector}' not found.`);
        return;
    }
    await element.type(input);
}

async function waitForSelector(page, selector, timeout = 30000) {
    try {
        return await page.waitForSelector(selector, {
            timeout
        });
        ; (`Element with selector '${selector}' is now visible.`);
    } catch (error) {
        console.error(`Timeout exceeded. Element with selector '${selector}' not found.`);
    }
}

async function createPage(br = browser, url, waitForLoad) {
    const page = await br.newPage();
    if (url) waitForLoad ? (await page.goto(url)) : page.goto(url);
    if (waitForLoad) {
        while (true) {
            await sleep(1);
            try { if (await page.evaluate("document.readyState") == "complete") break; } catch { }
        }
        ; ("Page loaded");
    }
    return page;
}
async function puppeteerPage() {
    let a = await createPage(context, 'https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo', 1)
    await waitForSelector(a, '.UywwFc-LgbsSe')
    await clickSelector(a, '.UywwFc-LgbsSe')
    a
    //;('Allow Extenstion', await a.evaluate(`(function (){return document.querySelector('.UywwFc-LgbsSe').innerText})()`))
    await sleep(100000)
}
async function createFireFoxPage(context, monkey = true) {
    if (monkey) {
        let a = await createPage(context, 'https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/', 1)
        await waitForSelector(a, '.AMInstallButton-button')
        await clickSelector(a, '.AMInstallButton-button')
            ; ('Allow Extenstion', await a.evaluate(`(function (){return document.querySelector('.AMInstallButton-button').innerText})()`))
        for (; ;) {
            await sleep(500)
            try {
                ; ("Status: ", await a.evaluate(`(function (){return document.querySelector('.AMInstallButton-button').innerText})()`))
                if (await a.evaluate(`(function (){return document.querySelector('.AMInstallButton-button').innerText})()`) == "Remove") break;
            } catch { }
        }
        return a
    } else return await createPage(context)
}
async function setInputFiles(page, selector, filePaths) {
    const [fileChooser] = await Promise.all([
        page.waitForEvent('filechooser'),
        page.click(selector) // Replace with the actual selector of the file input
    ]);

    // Set the files to be uploaded
    await fileChooser.setFiles(filePaths); // Replace with the actual file paths
}
/**
 * Creates an instance of the Keyboards class.
 * @param {object} page - The browser page context (e.g., Puppeteer page).
 * @param {object} options - Options for keyboard behavior.
 * @param {boolean} options.shiftOnEnter - Holds 'Shift' while pressing 'Enter' for newline characters.
 * @param {number} options.speed - Sets the typing speed for the keyboard (in milliseconds).
 */
class Keyboards {
    #page = null;

    constructor(page, { shiftOnEnter = false, speed = 100 }) {
        this.#page = page;
        this.shiftOnEnter = shiftOnEnter;
        this.speed = speed;
    }

    // Getter for page (instance method)
    get page() {
        return this.#page;
    }

    // Setter for page (instance method)
    set page(newPage) {
        this.#page = newPage;
    }

    // Instance method to type text
    async type(string) {
        for (let i = 0; i < string.length; i++) {
            await this.#page.keyboard.type(string[i]);
            if (this.shiftOnEnter && string[i] === '\n') {
                await this.#page.keyboard.down('Shift');
                await this.#page.keyboard.press('Enter');
                await this.#page.keyboard.up('Shift');
            } else {
                await this.#page.keyboard.press(string[i]);
            }
            await new Promise(resolve => setTimeout(resolve, this.speed));
        }
    }
}

var browser
!(async function () {
    //log booting up
    console.log('booting up')
    await checkCreds();
    browser = await chromium.launch({
        downloadsPath: path.resolve(__dirname, videosFolder),
        headless: (await prompt('Start headless?(y|n)')).startsWith('y'),
        executablePath: "C:\\Program Files\\Google\\Chrome Dev\\Application\\chrome.exe"
    });
    //create firefox page
    let firefoxPage = await createPage(browser, false)
    //await sleep(5000)
    // goto https://app.clipchamp.com/login and log it
    await firefoxPage.goto('https://app.clipchamp.com/login')

    console.log('loading page')
    //wait for button with this tage data-testid="provider-google"
    await waitForSelector(firefoxPage, '[data-testid="provider-Microsoft1P"]')
    console.log('Logging in with provider Microsoft')
    //click itg
    await clickSelector(firefoxPage, '[data-testid="provider-Microsoft1P"]')
    //wait for and click aria-describedby="usernameTitle" this si where the email goes
    await waitForSelector(firefoxPage, '[aria-describedby="usernameTitle"]')
    console.log("Entrering email")
    await sleep(1000)
    await type(firefoxPage, '[aria-describedby="usernameTitle"]', email)
    await simulateEnterKey(firefoxPage);


    await new Promise(async (fin) => {
        let done = 0;
    
        // First async function to input the password
        await (async function () {
            try {
                await waitForSelector(firefoxPage, '[type="password"]');
                if (done) return; // If done, exit the function early

                console.log("Entrering password")
                // Wait for the password input and simulate typing
                await sleep(1000);
                await type(firefoxPage, '[type="password"]', password);
                await simulateEnterKey(firefoxPage);
    
                // Mark the process as complete and finalize
                if (!done) {
                    done = 1;
                    fin();
                }
            } catch (e) {
                console.error('Error while entering password:', e);
            }
        })();
    
        if (done) return; // If the password process was successful, stop further execution
    
        // Second async function to input the code
        await (async function () {
            try {
                await waitForSelector(firefoxPage, '[placeholder="Enter code"]');
                if (done) return; // If done, exit the function early
    
                // Wait for the code input and simulate typing
                await sleep(1000);
                const code = await prompt('What is the code:');
                await type(firefoxPage, '[placeholder="Enter code"]', code);
                await simulateEnterKey(firefoxPage);
                console.log("Thanks")
    
                // Mark the process as complete and finalize
                if (!done) {
                    done = 1;
                    fin();
                }
            } catch (e) {
                console.error('Error while entering code:', e);
            }
        })();
    });
    

    console.log("Skipping nonsene")
    //wait for and ehck the input box id="checkboxField"
    await waitForSelector(firefoxPage, '#checkboxField')
    // wait for and click this checkbox
    await clickSelector(firefoxPage, '#checkboxField')
    // wait for and click this button aria-label="Next"
    await waitForSelector(firefoxPage, '[type="submit"]')
    await clickSelector(firefoxPage, '[type="submit"]')



    console.log("Creating new project")
    // wait for and click this button aria-label="Create a video"
    await waitForSelector(firefoxPage, '[aria-label="Create a video"]')
    await clickSelector(firefoxPage, '[aria-label="Create a video"]')
    // wait for and click this button aria-label="Create a video"
    await waitForSelector(firefoxPage, '[aria-label="Create a video"]')
    await clickSelector(firefoxPage, '[aria-label="Create a video"]')

    console.log("Getting files...")
    const videos=await getAllFilePaths(videosFolder)
    // this button wil ask for the files id="splitButton-r55__primaryActionButton" in ${videosFolder}
    await waitForSelector(firefoxPage, '.fui-SplitButton__primaryActionButton')
    await setInputFiles(firefoxPage, '.fui-SplitButton__primaryActionButton', videos)
    await sleep(300)
    // wait for and click data-testid="aspect-ratio-selector"
    console.log("Changing Aspect Ratio to 9:16")
    await waitForSelector(firefoxPage, '[data-testid="aspect-ratio-selector"]')
    await clickSelector(firefoxPage, '[data-testid="aspect-ratio-selector"]')
    await sleep(300)
    // wait for and click aria-label="9:16"
    await waitForSelector(firefoxPage, '[aria-label="9:16"]')
    await sleep(300)
    await clickSelector(firefoxPage, '[aria-label="9:16"]')

    await sleep(500)

    // this part only work in web console
    /*
    var allVideos=document.querySelectorAll('[data-testid="asset"]')

    // the graggable part
    data-testid="asset-draggable"
    have to get the center 
     */
    const dragselector = '[data-testid="asset-draggable"]'
    //loop starts here

    while (await firefoxPage.evaluate((a) => {
        return !!document.querySelector(a)
    }, dragselector)) {
        console.log('Converting video')
        //await for [data-testid="asset"]
        await waitForSelector(firefoxPage, '[data-testid="asset-draggable"]')
        await sleep(1000)
        console.log("Dragging video...")
        await dragAndDropToCenter(firefoxPage, '[data-testid="asset-draggable"]', '[data-testid="timeline-scroll-container"]')
        await sleep(100)
        console.log("Dragging second video...")
        await dragAndDropToBottomLeft(firefoxPage, '[data-testid="asset-draggable"]', '[data-right-click="track-empty-state-audio"]')
        //wait for .fui-Toolbar
        console.log('Wating for tool bar...')
        await waitForSelector(firefoxPage, '.fui-Toolbar')
        console.log('Found Toolbar')
        await sleep(1000)
        await firefoxPage.evaluate(() => {
            const toolbar = document.querySelector('.fui-Toolbar');
            if (toolbar) {
                const buttons = toolbar.querySelectorAll('button');
                if (buttons[1]) {
                    buttons[1].click();
                    setTimeout(()=>{buttons[1].click();},400)
                }
            }
        });
        await sleep(1000)
        //wait for and click data-testid="property-panel-button-effects"
        console.log("Waiting for effects panel")
        await waitForSelector(firefoxPage, '[data-testid="property-panel-button-effects"]')
        await clickSelector(firefoxPage, '[data-testid="property-panel-button-effects"]')
        await sleep(1000)
        var downLoaded = 0
        console.log("Added event listener for Download")
        firefoxPage.on('download', async (download) => {
            console.log(`Downloading file: ${download.suggestedFilename()}`);

            // Save the file to the specified folder
            await download.saveAs(path.resolve(__dirname, videosFolder, download.suggestedFilename()));
            console.log('Fin')
            downLoaded = 1
        });
        console.log("Adding video effects")
        while (!await firefoxPage.evaluate(() => {
            const tiles = document.querySelectorAll('[data-testid="filter-tile"]');
            var found = 0
            tiles.forEach(tile => {
                if (tile.innerText.trim() === 'Glass'||tile.innerText.trim() === 'Blur') {
                    tile.click();
                    found = 1
                }
            });
            return !!found
        })) await sleep(1000);
        
        try {
            // Wait for the element with a timeout of 2 seconds
            await firefoxPage.waitForSelector('[aria-label="Show pane"]', { timeout: 2000 });

            // If the element is found, perform the click action
            await firefoxPage.click('[aria-label="Show pane"]');
            await sleep(1000); // wait for 1 second

        } catch (error) {
            console.log('Element not found within the timeout period');
        }
        console.log('getting clip tittle')
        const clipTitle = await firefoxPage.evaluate(async (s) => {
            // Locate the asset-draggable element
            let p = document.querySelector('[aria-label="Show pane"]')
            p && (p.click, await eval(s)(1000))
            const assetElement = document.querySelector('[data-testid="asset-draggable"]');
            if (assetElement) {
                // Traverse up the DOM tree to find the parent node that contains the title
                const titleText = assetElement
                    .parentNode
                    .parentNode
                    .parentNode
                    .innerText
                    .split('\n')[1]; // Assuming the title is the second line
                return titleText;
            }
            return null; // Return null if the element is not found
        }, sleep.toString());
        console.log(`Clip title:${clipTitle}`)
        // type in this input the clip name aria-label="Video name"
        console.log('Entering Video name',clipTitle)
        await waitForSelector(firefoxPage, '[aria-label="Video name"]')
        await sleep(1000)
        await type(firefoxPage, '[aria-label="Video name"]', clipTitle.split('.').slice(0, -1).join('.'))
        await sleep(100)
        //await for and click data-testid="button-export"
        console.log('Exporting...')
        await waitForSelector(firefoxPage, '[data-testid="button-export"]')
        await clickSelector(firefoxPage, '[data-testid="button-export"]')
        // wait for and click data-testid="id-1080p"
        console.log('Choosing 1080p')

        await waitForSelector(firefoxPage, '[data-testid="id-1080p"]')
        await clickSelector(firefoxPage, '[data-testid="id-1080p"]')
        console.log('Waiting for Video to Download')
        while (!downLoaded) await sleep(1000);
        //wait for and click data-testid="keep-editing-button"
        console.log('Going Back to Editor...')
        await waitForSelector(firefoxPage, '[data-testid="keep-editing-button"]')
        await clickSelector(firefoxPage, '[data-testid="keep-editing-button"]')
        await waitForSelector(firefoxPage, '[data-testid="asset-draggable"]')
        const draggableCenter = await firefoxPage.evaluate(selector => {
            const element = document.querySelector(selector);
            const rect = element.getBoundingClientRect();
            return {
                x: rect.left + (rect.width / 2) + window.scrollX,
                y: rect.top + (rect.height / 2) + window.scrollY
            };
        }, dragselector);
        await firefoxPage.mouse.move(draggableCenter.x, draggableCenter.y);
        // await for `aria-label="Delete ${cliptitle}"`
        await sleep(100)
        console.log('Deleting used clip...')
        await waitForSelector(firefoxPage, `[aria-label="Delete ${clipTitle}"]`)
        await clickSelector(firefoxPage, `[aria-label="Delete ${clipTitle}"]`)
        //await for and click data-testid="delete-asset-confirm"
        console.log('Deleted...')
        await waitForSelector(firefoxPage, '[data-testid="delete-asset-confirm"]')
        await clickSelector(firefoxPage, '[data-testid="delete-asset-confirm"]')
    }
    /*
    videos.forEach(filePath=>{
        console.log(`Deleting file: ${filePath}`)
        fs.unlink(filePath, (err) => {
            if (err) {
                console.error('Error deleting the file:', err);
            } else {
                console.log('File deleted successfully.',filePath.split(/[\/\\]/).pop());
            }
        });
    })*/
    
    await firefoxPage.close()
    console.log('Finished')
    await browser.close()
    return "Finshed Clipping the stuff lmfao"
}()).then(a => { }, console.warn).catch(console.error)
