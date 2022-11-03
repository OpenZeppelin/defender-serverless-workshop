const { DefenderRelayProvider, DefenderRelaySigner } = require('defender-relay-client/lib/ethers');
const { ethers } = require('ethers');

const abi = [{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"workshopperAddress","type":"address"}],"name":"Pause","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"workshopperAddress","type":"address"}],"name":"attackInProgress","type":"event"},{"inputs":[{"internalType":"address","name":"workshopperAddress","type":"address"}],"name":"pauseContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"workshopperAddress","type":"address"}],"name":"vulnerableFunction","outputs":[],"stateMutability":"nonpayable","type":"function"}];
const ADDRESS = "0x238C14b8FE864596B0bb7cce134A7c8b8C7692a1";

exports.handler = async function(params) {
   const provider = new DefenderRelayProvider(params);
   const signer = new DefenderRelaySigner(params, provider, { speed: 'fast' });
   const WorkshopContract = new ethers.Contract(ADDRESS, abi, signer);
   const workshopAddress = params.request.body.matchReasons[0].args[0];
   await WorkshopContract.pauseContract(workshopAddress);
  return `Paused contract for address: ${workshopAddress}`;
}
