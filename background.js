console.log('Firekeese are active!');

function parseCommand(command) {
    if (command == 'duplicate-tab')
        browser.tabs.query({active: true, currentWindow: true})
        .then(tabs => browser.tabs.duplicate(tabs[0].id));
    if (command == 'search-tabs')
        browser.tabs.query({active: true, currentWindow: true})
        .then(currentTab => browser.tabs.query({currentWindow: true})
              .then(alltabs => browser.tabs.sendMessage(currentTab[0].id,
                                                        {tabs: alltabs})));
}

browser.commands.onCommand.addListener(parseCommand);
