import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useContractReader } from "eth-hooks";
import {Button, Card, Input, Row, Col} from "antd";
import { StarOutlined, StarFilled, StarTwoTone, MinusSquareOutlined, PlusSquareOutlined } from '@ant-design/icons'
import { ethers } from "ethers";
import { Address, Balance, Events } from "../components";

/**
 * web3 props can be passed from '../App.jsx' into your local view component for use
 * @param {*} yourLocalBalance balance on current network
 * @param {*} readContracts contracts from current chain already pre-loaded using ethers contract module. More here https://docs.ethers.io/v5/api/contract/contract/
 * @returns react component
 **/

 function Tweet0({useContractReader, readContracts, mainnetProvider, tx, writeContracts, address, index}){
   const membership =useContractReader(readContracts, "YourContract", "getMembership", [address]);
   const messageAddress = useContractReader(readContracts, "YourContract","getAddress",[index]);
   const messageText = useContractReader(readContracts, "YourContract","getMessage", [index]);
   const voteCount = useContractReader(readContracts, "YourContract","getVotes", [index]);
   const minVotes = useContractReader(readContracts, "YourContract","getMinVotes");
   if(membership){
   return(<Card>
    <Address address={messageAddress} ensProvider={mainnetProvider} fontSize={16} ></Address>
          <p>{messageText}</p>
          <p>{String(voteCount)}<Button type="text" onClick={() => {
                  /* look how you call setPurpose on your contract: */
                  tx(writeContracts.YourContract.voteToggle(index));
                }}><MinusSquareOutlined/></Button ></p>
        </Card>);
   } else if (voteCount < minVotes){
     return(
     <Card>
      <Address address={messageAddress} ensProvider={mainnetProvider} fontSize={16} ></Address>
            <p>{messageText}</p>
          </Card>
        
          
          );
   } else {
     return(<div></div>);
   }
 }
function Tweets({useContractReader, readContracts, mainnetProvider, tx, writeContracts, address}){
return(
  <div>
  <div>
    <Tweet0 useContractReader = {useContractReader} readContracts = {readContracts} mainnetProvider = {mainnetProvider} tx = {tx} writeContracts = {writeContracts} address = {address} index= {0}/>
    </div>
    <div>
<Tweet0  useContractReader = {useContractReader} readContracts = {readContracts} mainnetProvider = {mainnetProvider} tx = {tx} writeContracts = {writeContracts} address = {address} index= {1}/>
  </div>
  <div>
    <Card>
    <Address address={useContractReader(readContracts, "YourContract","getAddress",[2])} ensProvider={mainnetProvider} fontSize={16} ></Address>
    <p>{useContractReader(readContracts, "YourContract","getMessage", [2])}</p>
    <p>{String(useContractReader(readContracts, "YourContract","getVotes", [2]))}<Button type="text" onClick={() => {
              /* look how you call setPurpose on your contract: */
              tx(writeContracts.YourContract.voteToggle(2));
            }}><MinusSquareOutlined/></Button></p>
  </Card>
  
  </div>
  <div>
    <Card>
    <Address address={useContractReader(readContracts, "YourContract","getAddress",[3])} ensProvider={mainnetProvider} fontSize={16} ></Address>
    <p>{useContractReader(readContracts, "YourContract","getMessage", [3])}</p>
    <p>{String(useContractReader(readContracts, "YourContract","getVotes", [3]))}<Button type="text" onClick={() => {
              /* look how you call setPurpose on your contract: */
              tx(writeContracts.YourContract.voteToggle(3));
            }}><MinusSquareOutlined/></Button></p>
  </Card>
  </div>
  <div>
    <Card>
    <Address address={useContractReader(readContracts, "YourContract","getAddress",[4])} ensProvider={mainnetProvider} fontSize={16} ></Address>
    <p>{useContractReader(readContracts, "YourContract","getMessage", [4])}</p>
    <p>{String(useContractReader(readContracts, "YourContract","getVotes", [4]))}<Button type="text" onClick={() => {
              /* look how you call setPurpose on your contract: */
              tx(writeContracts.YourContract.voteToggle(4));
            }}><MinusSquareOutlined/></Button></p>
  </Card>
  </div>
  <div>
    <Card>
    <Address address={useContractReader(readContracts, "YourContract","getAddress",[5])} ensProvider={mainnetProvider} fontSize={16} ></Address>
    <p>{useContractReader(readContracts, "YourContract","getMessage", [5])}</p>
    <p>{String(useContractReader(readContracts, "YourContract","getVotes", [5]))}<Button type="text" onClick={() => {
              /* look how you call setPurpose on your contract: */
              tx(writeContracts.YourContract.voteToggle(5));
            }}><MinusSquareOutlined/></Button></p>
  </Card>
  </div>
  <div>
    <Card>
    <Address address={useContractReader(readContracts, "YourContract","getAddress",[6])} ensProvider={mainnetProvider} fontSize={16} ></Address>
    <p>{useContractReader(readContracts, "YourContract","getMessage", [6])}</p>
    <p>{String(useContractReader(readContracts, "YourContract","getVotes", [6]))}<Button type="text" onClick={() => {
              /* look how you call setPurpose on your contract: */
              tx(writeContracts.YourContract.voteToggle(6));
            }}><MinusSquareOutlined/></Button></p>
  </Card>
  </div>
  <div>
    <Card>
    <Address address={useContractReader(readContracts, "YourContract","getAddress",[7])} ensProvider={mainnetProvider} fontSize={16} ></Address>
    <p>{useContractReader(readContracts, "YourContract","getMessage", [7])}</p>
    <p>{String(useContractReader(readContracts, "YourContract","getVotes", [7]))}<Button type="text" onClick={() => {
              /* look how you call setPurpose on your contract: */
              tx(writeContracts.YourContract.voteToggle(7));
            }}><MinusSquareOutlined/></Button></p>
  </Card>
  </div>
  <div>
    <Card>
    <Address address={useContractReader(readContracts, "YourContract","getAddress",[8])} ensProvider={mainnetProvider} fontSize={16} ></Address>
    <p>{useContractReader(readContracts, "YourContract","getMessage", [8])}</p>
    <p>{String(useContractReader(readContracts, "YourContract","getVotes", [8]))}<Button type="text" onClick={() => {
              /* look how you call setPurpose on your contract: */
              tx(writeContracts.YourContract.voteToggle(8));
            }}><MinusSquareOutlined/></Button></p>
  </Card>
  </div>
  <div>
    <Card>
    <Address address={useContractReader(readContracts, "YourContract","getAddress",[9])} ensProvider={mainnetProvider} fontSize={16} ></Address>
    <p>{useContractReader(readContracts, "YourContract","getMessage", [9])}</p>
    <p>{String(useContractReader(readContracts, "YourContract","getVotes", [9]))}<Button type="text" onClick={() => {
              /* look how you call setPurpose on your contract: */
              tx(writeContracts.YourContract.voteToggle(9));
            }}><MinusSquareOutlined/></Button></p>
  </Card>
  </div>
  </div>
    );

}

function Home({ yourLocalBalance, readContracts, mainnetProvider, tx, writeContracts, address}) {
  // you can also use hooks locally in your component of choice
  // in this case, let's keep track of 'purpose' variable from our contract
  const purpose = useContractReader(readContracts, "YourContract", "purpose");
  const [tempTweet, setTempTweet] = useState("loading...");
  
  return (
    
    <div>
      <Row>
      <Col span={8}>col-8</Col>
      <Col span={8}><div>
        <Row>
        <Col span={23}>
      <Input onChange={e => {
          setTempTweet(e.target.value);
        }}></Input> 
        </Col>
        <Col span = {1}>< Button type="text" onClick={() => {
              /* you can also just craft a transaction and send it to the tx() transactor */
              tx(writeContracts.YourContract.newMessage(tempTweet));}}><PlusSquareOutlined/></Button></Col>

        </Row>
      </div>
      <Tweets
      useContractReader = {useContractReader} readContracts = {readContracts} mainnetProvider = {mainnetProvider} tx = {tx} writeContracts = {writeContracts} address= {address}/>
      
      <div style={{ margin: 32 }}>
        <span style={{ marginRight: 8 }}>📝</span>
        This Is Your App Home. You can start editing it in{" "}
        <span
          className="highlight"
          style={{ marginLeft: 4, /* backgroundColor: "#f9f9f9", */ padding: 4, borderRadius: 4, fontWeight: "bolder" }}
        >
          packages/react-app/src/views/Home.jsx
        </span>
      </div>
      <div style={{ margin: 32 }}>
        <span style={{ marginRight: 8 }}>✏️</span>
        Edit your smart contract {" "}
        <span
          className="highlight"
          style={{ marginLeft: 4, /* backgroundColor: "#f9f9f9", */ padding: 4, borderRadius: 4, fontWeight: "bolder" }}
        >
          YourContract.sol
        </span>{" "}in{" "}
        <span
          className="highlight"
          style={{ marginLeft: 4, /* backgroundColor: "#f9f9f9", */ padding: 4, borderRadius: 4, fontWeight: "bolder" }}
        >
          packages/hardhat/contracts
        </span>
      </div>
      {!purpose?<div style={{ margin: 32 }}>
        <span style={{ marginRight: 8 }}>👷‍♀️</span>
        You haven't deployed your contract yet, run
        <span
          className="highlight"
          style={{ marginLeft: 4, /* backgroundColor: "#f9f9f9", */ padding: 4, borderRadius: 4, fontWeight: "bolder" }}
        >
          yarn chain
        </span> and <span
            className="highlight"
            style={{ marginLeft: 4, /* backgroundColor: "#f9f9f9", */ padding: 4, borderRadius: 4, fontWeight: "bolder" }}
          >
            yarn deploy
          </span> to deploy your first contract!
      </div>:<div style={{ margin: 32 }}>
        <span style={{ marginRight: 8 }}>🤓</span>
        The "purpose" variable from your contract is{" "}
        <span
          className="highlight"
          style={{ marginLeft: 4, /* backgroundColor: "#f9f9f9", */ padding: 4, borderRadius: 4, fontWeight: "bolder" }}
        >
          {purpose}
        </span>
      </div>}

      <div style={{ margin: 32 }}>
        <span style={{ marginRight: 8 }}>🤖</span>
        An example prop of your balance{" "}
        <span style={{ fontWeight: "bold", color: "green" }}>({ethers.utils.formatEther(yourLocalBalance)})</span> was
        passed into the
        <span
          className="highlight"
          style={{ marginLeft: 4, /* backgroundColor: "#f9f9f9", */ padding: 4, borderRadius: 4, fontWeight: "bolder" }}
        >
          Home.jsx
        </span>{" "}
        component from
        <span
          className="highlight"
          style={{ marginLeft: 4, /* backgroundColor: "#f9f9f9", */ padding: 4, borderRadius: 4, fontWeight: "bolder" }}
        >
          App.jsx
        </span>
      </div>
      <div style={{ margin: 32 }}>
        <span style={{ marginRight: 8 }}>💭</span>
        Check out the <Link to="/hints">"Hints"</Link> tab for more tips.
      </div>
      <div style={{ margin: 32 }}>
        <span style={{ marginRight: 8 }}>🛠</span>
        Tinker with your smart contract using the <Link to="/debug">"Debug Contract"</Link> tab.
      </div></Col>
      
      <Col span={8}>col-8</Col>
      </Row>
    </div>
  );
}

export default Home;
