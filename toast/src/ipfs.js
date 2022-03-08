const ipfsClient = require("ipfs-http-client");

const ipfs = ipfsClient.create({
    host: "ipfs.infura.io",
    port: 5001,
    protocol: "https",
});

export const sendToIpfs =  async (input) =>{
    
    try{
        const cid = await ipfs.add(input);
        console.log(cid);
        return cid;
    }catch(error){
        console.log('Error sending to ipfs');
    }
};