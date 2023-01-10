// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract HelloK is ERC20{

   uint constant initalSupply = 100 * (10**18);

   constructor() ERC20("HelloK", "HK") {
       _mint(msg.sender, initalSupply);
   }

}