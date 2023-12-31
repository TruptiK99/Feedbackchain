window.addEventListener('load', () => {
    const loginButton = document.getElementById('loginButton');

    if (typeof window.ethereum !== 'undefined') {
        console.log('MetaMask is installed!');
    }

    loginButton.addEventListener('click', () => {
        if (window.ethereum) {
            window.ethereum.request({ method: 'eth_requestAccounts' })
            .then(accounts => {
                console.log('Connected', accounts[0]);
                // Here you can use the account info
            })
            .catch(error => {
                console.log('Error connecting to MetaMask', error);
            });
        } else {
            console.log('Please install MetaMask!');
        }
    });
});
