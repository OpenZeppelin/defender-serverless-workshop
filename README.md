# Defender Serverless Workshop


## Summary

In this workshop, we'll create a Defender account, use Sentinels, Relayers, and Autotasks to trigger an function calls to [this contract](https://goerli.etherscan.io/address/0x238c14b8fe864596b0bb7cce134a7c8b8c7692a1).  

### Install Steps

1. Install serverless framework: https://www.serverless.com/framework/docs/getting-started/

    `npm install -g serverless`
    
If you are running on a windows machine you may need to install something like [Windows Subsytem for Linux](https://learn.microsoft.com/en-us/windows/wsl/install) to execute linux command line commands.

### Defender Setup

1. Sign up for Free Defender account: https://defender.openzeppelin.com/

2. Create an API key and secret

### Serverless Steps

1. Checkout this Repository

2. Update these settings in `serverless.yml`
- `env:TEAM_API_KEY` with your generated api key
- `env:TEAM_API_KEY` with your generated secret
- `env:YOUR_ADDRESS` with your wallet address

3. Run serverlesss to deploy to your account

     `sls deploy`


### Look at Defender to see Deployments
1. Navigate to your relayer

2. Navigate to your autotask

3. Navigate to your sentinal
### Fund your Relayer

1. Log into defender an navigate to your Relay

2. In another tab go to: https://goerlifaucet.com/

3. Enter your wallet address (the same address you want to receive a POAP)

4. Once your wallet receives funds login to Defender and navigate to your relayers

5. Send the test Eth (on goerli) to your relayer

### Perform Transaction

1. Go to your deployed relayer and make a manual transaction to this address `0x238c14b8fe864596b0bb7cce134a7c8b8c7692a1` (make sure your relayer has test Eth).

2. Select the `vulnerableFunction` and pass in your wallet address.

3. Confirm transaction.

