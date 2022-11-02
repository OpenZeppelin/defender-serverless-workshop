const { Relayer } = require('defender-relay-client');

const abi = [{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"workshopperAddress","type":"address"}],"name":"Pause","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"workshopperAddress","type":"address"}],"name":"attackInProgress","type":"event"},{"inputs":[{"internalType":"address","name":"workshopperAddress","type":"address"}],"name":"pauseContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"workshopperAddress","type":"address"}],"name":"vulnerableFunction","outputs":[],"stateMutability":"nonpayable","type":"function"}]

exports.handler = async function(params) {
   const client = new Relayer(params);
    const relayer = await client.getRelayer();
    const provider = new DefenderRelayProvider(params);
    const signer = new DefenderRelaySigner(params, provider, {
      speed: 'fast',
      from: relayer.address,
    });
    const WorkshopContract = new ethers.Contract(address, abi, signer);

  	console.log(JSON.stringify(params.request.body));
    return await WorkshopContract.pauseContract(params.request.body.workshopperAddress)
}
