/**
 * Current checkbox
 * @return {boolean} Whether or not to remove the current tab
 */
function getCurrent() {
    return document.getElementById('currentCheckbox').checked;
}

document.getElementById('closeOnLeft').onclick = () => {
    closeLeft(getCurrent(), false);
};

document.getElementById('closeOnRight').onclick = () => {
    closeRight(getCurrent());
};

document.getElementById('closeAllTabs').onclick = () => {
    closeAll(getCurrent(), true);
};

document.getElementById('closeAllWindows').onclick = () => {
    closeAll(getCurrent(), false);
};


// Get Current State from Local Storage
chrome.storage.local.get(['current'], (value) => {
    document.getElementById('currentCheckbox').checked = value.current;
});
// Set Current state to Local Storage
document.getElementById('currentCheckbox').addEventListener('change', (e) => {
    chrome.storage.local.set({'current': e.target.checked}, () => {
    });
});
