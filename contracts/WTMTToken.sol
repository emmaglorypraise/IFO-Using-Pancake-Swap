// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";


contract WTMTToken is ERC20("Women TeckMakers Token", "WTMT"){


  constructor() {
      _mint(msg.sender, 1000000e18);
  }

 function withdrawFromContract(address _to, uint _amount) public {
      uint currentBalance = balanceOf(address(this));
      uint withdrawAmount = _amount;
      require(currentBalance >= withdrawAmount, "Not enough money to transfer");
      _transfer(msg.sender, _to, withdrawAmount);
  }
 // DEPLOYED AT: 0xF1D3Bb93659C808eaAaF7863669e83822e3C142F   
}