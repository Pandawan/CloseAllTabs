document.getElementById('closeOnLeft').onclick = () => {
    getCurrent((current) => {
        closeLeft(current, false);
    });
};

document.getElementById('closeOnRight').onclick = () => {
    getCurrent((current) => {
        closeRight(current);
    });
};

document.getElementById('closeAllTabs').onclick = () => {
    getCurrent((current) => {
        closeAll(current, true);
    });
};

document.getElementById('closeAllWindows').onclick = () => {
    getCurrent((current) => {
        closeAll(current, false);
    });
};


// Get Current State from Local Storage
chrome.storage.local.get(['current'], (value) => {
    document.getElementById('currentCheckbox').checked = value.current || false;
});
// Set Current state to Local Storage
document.getElementById('currentCheckbox').addEventListener('change', (e) => {
    chrome.storage.local.set({'current': e.target.checked}, () => {
    });
});
