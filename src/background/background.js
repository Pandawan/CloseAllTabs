// Init event
chrome.runtime.onInstalled.addListener(init);

// Keyboard Shortcuts
chrome.commands.onCommand.addListener(function(command) {
    if (command === 'closeOnLeft') {
        getCurrent((current) => {
            closeLeft(current, false);
        });
    } else if (command === 'closeOnRight') {
        getCurrent((current) => {
            closeRight(current);
        });
    } else if (command === 'closeAllTabs') {
        getCurrent((current) => {
            closeAll(current, true);
        });
    }
});
