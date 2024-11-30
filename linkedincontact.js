(function() {
    const delay = 2000; // Wait time between actions in milliseconds
    const scrollDelay = 1500; // Wait time between scrolls

    function scrollPage() {
        window.scrollBy(0, window.innerHeight);
        console.log('Scrolling down the page...');
    }

    async function connect() {
        try {
            const buttons = document.querySelectorAll('button');
            const connectButtons = Array.from(buttons).filter(btn => 
                (btn.innerText.includes('Connect') || btn.innerText.includes('Conectar')) && !btn.disabled
            );

            if (connectButtons.length === 0) {
                console.log('No more visible connections or all requests sent. Scrolling the page...');
                scrollPage();
                await new Promise(resolve => setTimeout(resolve, scrollDelay));
                connect();
                return;
            }

            for (let i = 0; i < connectButtons.length; i++) {
                const btn = connectButtons[i];
                try {
                    btn.click();
                    console.log(`Sending connection request... (${i + 1} of ${connectButtons.length})`);
                    // Wait for a random time between 2 and 4 seconds to simulate human behavior
                    const randomDelay = Math.floor(Math.random() * 2000) + 2000;
                    await new Promise(resolve => setTimeout(resolve, randomDelay));
                } catch (error) {
                    console.error(`Error trying to connect with profile ${i + 1}:`, error);
                }
            }

            console.log('Requests sent. Scrolling to load more profiles...');
            scrollPage();
            await new Promise(resolve => setTimeout(resolve, scrollDelay));
            connect();
        } catch (err) {
            console.error('Error during the connection process:', err);
            // Optional: Retry after some time if an unexpected error occurs
            await new Promise(resolve => setTimeout(resolve, delay));
            connect();
        }
    }

    console.log('Starting the LinkedIn auto-connect script with continuous scrolling...');
    connect();
})();
