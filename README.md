# Forta Serverless Workshop


## Summary

In this workshop, we'll create a Defender account, use Sentinels, Relayers, and Autotasks to trigger an function calls to [this contract](https://goerli.etherscan.io/address/0x238c14b8fe864596b0bb7cce134a7c8b8c7692a1).  

### Install Steps

1. Install serverless framework: https://www.serverless.com/framework/docs/getting-started/

    `npm install -g serverless`

### Defender Setup

1. Sign up for Free Defender account

2. Create an API key and secret

### Serverless Steps

1. Checkout this Repository

2. Update these settings 
- API Key
- API Secret

3. Run serverlesss to deploy to your account

     `sls deploy`

### Look at Defender to see Deployments

1. See: Relayer, Sentinel, Autotask

### Perform Transaction

1. Go to your deployed relayer and make a manual transaction to this address `0x238c14b8fe864596b0bb7cce134a7c8b8c7692a1`.

2. Select the `vulnerableFunction` and pass in your wallet address.

3. Confirm transaction


### What you should see
