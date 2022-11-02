// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract PauseThis {
    mapping(address => bool) hasAttacked;
    mapping(address => bool) hasPaused;
    event attackInProgress(address workshopperAddress);
    event Pause(address workshopperAddress);

    function pauseContract(address workshopperAddress) public {
        require(
          hasAttacked[workshopperAddress] && !hasPaused[workshopperAddress]
        );
        emit Pause(workshopperAddress);
    }

    function vulnerableFunction(address workshopperAddress) public {
        hasAttacked[workshopperAddress] = true;
        emit attackInProgress(workshopperAddress);
    }
}
