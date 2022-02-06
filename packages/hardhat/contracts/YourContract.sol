pragma solidity >=0.8.0 <0.9.0;
//SPDX-License-Identifier: MIT

import "hardhat/console.sol";
// import "@openzeppelin/contracts/access/Ownable.sol"; 
// https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol

contract YourContract {


  // event SetPurpose(address sender, string purpose);
  event MessageReceived(address sender, uint256 timestamp);
  string public purpose = "Building Unstoppable Apps!!!";

  mapping(address=>bool) public membership;
  uint256 public membership_amount;
  uint256 public messagecount;
  struct message {
    address sender;
    string messageText;
    uint256 timestamp;
    uint256 votes;
  }
  
  address[][] voteMap;

   message[] public messages;
  constructor() payable {
    // what should we do on deploy?
  }

  function getMembership(address yourAddress) public view returns(bool){
    return membership[yourAddress];

  }


  function getMessage(uint256 messageIndex) public view returns (string memory){
    return messages[messageIndex].messageText;


  }
  
  function getTimestamp(uint256 messageIndex) public view returns (uint256){
    return messages[messageIndex].timestamp;

  }

  function getVotes(uint256 messageIndex) public view returns (uint256){
    return messages[messageIndex].votes;

  }
  function getAddress(uint256 messageIndex) public view returns (address){
    return messages[messageIndex].sender;

  }
/*
  function setPurpose(string memory newPurpose) public {
      purpose = newPurpose;
      console.log(msg.sender,"set purpose to",purpose);
      // emit SetPurpose(msg.sender, purpose);
  }
*/
  function addMember(address newAccount) public {
    membership[newAccount]= true;
    membership_amount++;
  }

  function newMessage(string memory submittedMessage) public{
    
    if(membership[msg.sender]){
      message memory temp = message(msg.sender, submittedMessage, block.timestamp, 0);
      messages.push(temp);
      emit MessageReceived(msg.sender, block.timestamp);
      voteMap.push({});
    }
    messagecount++;
  }
  function getMinVotes() public pure returns (uint256){
    return 2;
  }
  function voteToggle(uint256 messageIndex) public {
    bool inMap =false;
    
    
    if(voteMap[messageIndex].length > 0){
      
    for(uint256 i = 0; i<voteMap[messageIndex].length;i++){
      if(voteMap[messageIndex][i] == msg.sender){
        
        voteMap[messageIndex][i] = address(0);
        inMap = true;
      }
    }
        
    }
    
    if(inMap){
      messages[messageIndex].votes--;
    } else{
      voteMap[messageIndex].push(msg.sender);
      messages[messageIndex].votes++; 
    }

  }

  // to support receiving ETH by default
  receive() external payable {}
  fallback() external payable {}

}
