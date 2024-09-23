import pyperclip
import subprocess
import pygetwindow as gw
import time
import pyautogui
import os
import sys

required_libraries = ["pyperclip", "pygetwindow", "pyautogui"]
missing_libraries = []

# Check for each required library
for library in required_libraries:
    try:
        __import__(library)  # Attempt to import the library
        print(f"{library} is already installed.")
    except ImportError:
        print(f"{library} is not installed. Installing...")
        missing_libraries.append(library)
        subprocess.check_call([sys.executable, "-m", "pip", "install", library])

# If there are missing libraries, restart the script
if missing_libraries:
    print("Some libraries were just installed. Restarting the script...")
    os.execv(sys.executable, ['python'] + sys.argv)  # Restart the script
else:
    print("All required libraries are installed. Continuing with the script.")

# Step 1: Get the initial list of open windows
initial_windows = gw.getAllTitles()
print("Initial list of windows:")
print([win for win in initial_windows if win])
folder_name = r"./fin"  

folder_path = os.path.abspath(folder_name)  


# Step 2: Open Chrome Dev (replace the path if needed)
chrome_path = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
subprocess.Popen([chrome_path])

# Step 3: Continuously check for the new window
while True:
    updated_windows = gw.getAllTitles()  # Get the current list of windows
    if len(updated_windows) > len(initial_windows):  # Check if a new window is opened
        break  # Exit the loop once a new window is detected
    time.sleep(0.5)  # Wait briefly to avoid high CPU usage during polling

print("\nNew window detected! Updated list of windows:")
print([win for win in updated_windows if win])

# Step 4: Find the new window (opened after Chrome Dev launch)
new_windows = set(updated_windows) - set(initial_windows)

# Step 5: If a new window is found (e.g., Chrome Dev), resize and move it

new_window_title = list(new_windows)[0]  # Get the title of the new window
print("\nNewly opened window: ", new_window_title)

# Step 6: Get the window object by title
chrome_window = gw.getWindowsWithTitle(new_window_title)[0]

# Step 7: Resize the window to 600x700 and move it to (0, 0)
chrome_window.resizeTo(1024, 768)
chrome_window.moveTo(0, 0)
print(f"Resized and moved {new_window_title} to (600x700) at position (0, 0)")
#chrome_window.activate()

pyautogui.typewrite("https://www.youtube.com/upload",interval=.05)
pyautogui.press('enter')
upload_button='[aria-label="Select files]"'
js_get_position = '''
function getElementPosition(targetElement) {
    if (!targetElement || !(targetElement instanceof Element)) {
        console.error("Please provide a valid target element.");
        return null;
    }

    const rect = targetElement.getBoundingClientRect();

    // Calculate the position from (0, 0) of the document, considering scrolling
    const posX = rect.left + window.scrollX;
    const posY = rect.top + window.scrollY;

    return { x: posX, y: posY };
}

setTimeout(()=>{
    const target = document.querySelector('[aria-label="Select files"]');
    const position = getElementPosition(target);
    if (position) {
        navigator.clipboard.writeText(`X: ${position.x}, Y: ${position.y}`).then(() => {
            console.log('Position copied to clipboard: ', position);
        });
    } else {
        navigator.clipboard.writeText('Element not found').then(() => {
            console.log('Failed to find element.');
        });
    }
},3000)
'''

js_check_load = '''
function getElementPosition(targetElement) {
    if (!targetElement || !(targetElement instanceof Element)) {
        console.error("Please provide a valid target element.");
        return null;
    }

        const rect = targetElement.getBoundingClientRect();

    // Calculate the position from (0, 0) of the document, considering scrolling
    const posX = rect.left + window.scrollX;
        const posY = rect.top + window.scrollY;

    return { x: posX, y: posY };
}

function checkStudioReady() {
    if (document.domain === 'studio.youtube.com' && document.readyState === 'complete') {
        navigator.clipboard.writeText('true').then(() => {
            console.log('Copied true to clipboard');
        });
    } else {
        navigator.clipboard.writeText('false').then(() => {
            console.log('Copied false to clipboard');
        });
    }
}
setTimeout(checkStudioReady,3000)
'''
# Copy JS code to clipboard
pyperclip.copy(js_check_load)

while True:
    pyperclip.copy(js_check_load)
    chrome_window.resizeTo(1024, 768)
    chrome_window.moveTo(0, 0)
    chrome_window.activate()
    pyautogui.press('f12')
    time.sleep(1)  # Wait a little before checking again
    pyautogui.hotkey('ctrl', 'v')
    pyautogui.press('enter')
    time.sleep(1)
    pyautogui.press('f12')
    time.sleep(3.1)  # Wait a little before checking again
    # Get the clipboard content to check if the page is ready
    clipboard_content = pyperclip.paste()
    if clipboard_content == 'true':
        print("The page is ready and the domain is 'studio.youtube.com'")
        break  # Exit the loop when the page is ready
    elif clipboard_content == 'false':
        print("Waiting for the page to load...")
#use the web console and web navigator to evecust code and copy the out to clipbored

while True:
    chrome_window.resizeTo(1024, 768)
    chrome_window.moveTo(0, 0)
    pyperclip.copy(js_get_position)
    chrome_window.activate()
    pyautogui.press('f12')
    time.sleep(1)  # Wait a little before checking again
    pyautogui.hotkey('ctrl', 'v')
    pyautogui.press('enter')
    time.sleep(1)
    pyautogui.press('f12')
    time.sleep(3.1)  # Wait a little before checking again
    # Get the clipboard content
    clipboard_content = pyperclip.paste()
    if "X: " in clipboard_content and "Y: " in clipboard_content:
        print(f"Element position: {clipboard_content}")
        
        # Parse the coordinates from the clipboard content
        pos_x = float(clipboard_content.split(",")[0].split(": ")[1].strip())
        pos_y = float(clipboard_content.split(",")[1].split(": ")[1].strip())
        # Adjust the Y position for the title bar height (e.g., 40 pixels)
        title_bar_height = 40
        adjusted_pos_y = int(pos_y) - title_bar_height
        
        # Click at the adjusted position
        pyautogui.click(x=int(pos_x), y=adjusted_pos_y)
        
        # Click at the position
        pyautogui.click(x=pos_x, y=pos_y)
        print(f"Clicked at position: ({pos_x}, {pos_y})")
        break  # Exit the loop when position is found

    elif "Element not found" in clipboard_content:
        print("Element not found, retrying...")
        break
time.sleep(0.5)  # Wait a little before checking again
# set the files to be chosen
pyautogui.hotkey('ctrl', 'l')
pyautogui.typewrite(folder_path, interval=0.05)  # Type the file paths
pyautogui.press('enter')  # Press Enter to select the files
print("Files set to be chosen.")
time.sleep(2)  # Wait a little before checking again
# crtl + a end enter
pyautogui.hotkey('ctrl', 'shift','n')
pyautogui.press('enter') # Press Enter to select the files
pyautogui.press('delete') # 

print("Title and description set.")
time.sleep(2)  # Wait a little before checking again
# click on the publish button
pyautogui.hotkey('ctrl', 'a')
pyautogui.press('enter') # Press Enter to select the files
time.sleep(2)
js_tooltip='''
setInterval(()=>{

navigator.clipboard.writeText(!!document.querySelector('[tooltip-label="Cancel"]')?'true':'false').then(() => {
            console.log('Copied true to clipboard');
        });
}, 1000)
'''
chrome_window.activate()
pyautogui.press('f12')
chrome_window.activate()
pyperclip.copy(js_tooltip)
time.sleep(1)  # Wait a little before checking again
chrome_window.activate()
pyautogui.hotkey('ctrl', 'v')
chrome_window.activate()
pyautogui.press('enter')
chrome_window.activate()
time.sleep(1)
pyautogui.press('f12')
time.sleep(3.1) 

while True:
    # Get the clipboard content to check if the page is ready
    clipboard_content = pyperclip.paste()
    if clipboard_content == 'false':
        print("Finished uploaded videos to youtube :>")
        break  # Exit the loop when the page is ready
    elif clipboard_content == 'true':
        print("Waiting for uploads to finish...")
    time.sleep(1)  # Wait a little before checking again
