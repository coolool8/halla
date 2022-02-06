import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useContractReader } from "eth-hooks";
import {Button, Card, Input, Row, Col} from "antd";
import { StarOutlined, StarFilled, StarTwoTone, MinusSquareOutlined, PlusSquareOutlined } from '@ant-design/icons'
import { ethers } from "ethers";
import { Address, Balance, Blockie, Events } from "../components";

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
   const blocktime = useContractReader(readContracts, "YourContract","getCurrentTime");
   const messageTimestamp = useContractReader(readContracts, "YourContract","getTimestamp", [index]);
   if(membership && blocktime-messageTimestamp<30){
   return(<Card>
    <Address address={messageAddress} ensProvider={mainnetProvider} fontSize={16} ></Address>
          <p>{messageText}</p>
          <p>{String(voteCount)}<Button type="text" onClick={() => {
                  /* look how you call setPurpose on your contract: */
                  tx(writeContracts.YourContract.voteToggle(index));
                }}><MinusSquareOutlined/></Button ></p>
                <p>{"Time Left: " +String(30-(blocktime-messageTimestamp))}</p>
        </Card>);
   } else if(membership && blocktime-messageTimestamp >30){
    return(<Card>
      <Address address={messageAddress} ensProvider={mainnetProvider} fontSize={16} ></Address>
            <p>{messageText}</p>
      
                  <p>{"published"}</p>
          </Card>
    


    );
   } else if (voteCount < minVotes && blocktime-messageTimestamp>30 ){
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
  <Tweet0  useContractReader = {useContractReader} readContracts = {readContracts} mainnetProvider = {mainnetProvider} tx = {tx} writeContracts = {writeContracts} address = {address} index= {2}/>
  
  </div>
  <div>
  <Tweet0  useContractReader = {useContractReader} readContracts = {readContracts} mainnetProvider = {mainnetProvider} tx = {tx} writeContracts = {writeContracts} address = {address} index= {3}/>
  </div>
  
  <div>
  <Tweet0  useContractReader = {useContractReader} readContracts = {readContracts} mainnetProvider = {mainnetProvider} tx = {tx} writeContracts = {writeContracts} address = {address} index= {4}/>
  </div>
  <div>
  <Tweet0  useContractReader = {useContractReader} readContracts = {readContracts} mainnetProvider = {mainnetProvider} tx = {tx} writeContracts = {writeContracts} address = {address} index= {5}/>
  </div>
  <div>
  <Tweet0  useContractReader = {useContractReader} readContracts = {readContracts} mainnetProvider = {mainnetProvider} tx = {tx} writeContracts = {writeContracts} address = {address} index= {6}/>
  </div>
  <div>
  <Tweet0  useContractReader = {useContractReader} readContracts = {readContracts} mainnetProvider = {mainnetProvider} tx = {tx} writeContracts = {writeContracts} address = {address} index= {7}/>
  </div>
  <div>
  <Tweet0  useContractReader = {useContractReader} readContracts = {readContracts} mainnetProvider = {mainnetProvider} tx = {tx} writeContracts = {writeContracts} address = {address} index= {8}/>
  </div>
  </div>
    );

}

function SubmitBox({useContractReader, readContracts, mainnetProvider, tx, writeContracts, address}){
  const membership =useContractReader(readContracts, "YourContract", "getMembership", [address]);
  const [tempTweet, setTempTweet] = useState("loading...");
if(membership){
  return(
    <Row>
  <Col span={23}>
      <Input placeholder = "submit tweet" onChange={e => {
          setTempTweet(e.target.value);
        }}></Input> 
        </Col>
        <Col span = {1}>< Button type="text" onClick={() => {
              /* you can also just craft a transaction and send it to the tx() transactor */
              tx(writeContracts.YourContract.newMessage(tempTweet));}}><PlusSquareOutlined/></Button></Col>
              </Row>
  );
} else {
  return (<div/>)

}

}

function Home({ yourLocalBalance, readContracts, mainnetProvider, tx, writeContracts, address}) {
  // you can also use hooks locally in your component of choice
  // in this case, let's keep track of 'purpose' variable from our contract
  const purpose = useContractReader(readContracts, "YourContract", "purpose");
  
  
  return (
    
    <div>
      <Row>
      <Col span={8}></Col>
      <Col span={8}><div>
        <Row>
        <SubmitBox 
        useContractReader = {useContractReader} readContracts = {readContracts} mainnetProvider = {mainnetProvider} tx = {tx} writeContracts = {writeContracts} address= {address}/>

        </Row>
      </div>
      <Tweets
      useContractReader = {useContractReader} readContracts = {readContracts} mainnetProvider = {mainnetProvider} tx = {tx} writeContracts = {writeContracts} address= {address}/>
      </Col>
      
      
      <Col span={8}></Col>
      </Row>
    </div>
  );
}

export default Home;
