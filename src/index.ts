import express from "express";

const app = express();
let ETH_BALANCE = 200;
let USDC_BALANCE = 700000;

// app.post('/add-liquidity', (req, res) => {});

app.post('/buy-asset', (req, res) => {
    const product = ETH_BALANCE * USDC_BALANCE;
    const quatity = req.body.quantity;
    const updatedEthQuantity = ETH_BALANCE + quatity;
    const updatedUsdcBalance = product / updatedEthQuantity;
    const paidAmount = updatedUsdcBalance - USDC_BALANCE;

    ETH_BALANCE = updatedEthQuantity;
    USDC_BALANCE = updatedUsdcBalance

    res.json({
        message: `You paid ${paidAmount} USDC for ${quatity} ETH`
    })
    
});

app.post('/sell-asset', (req, res) => {
    const product = ETH_BALANCE * USDC_BALANCE;
    const quatity = req.body.quantity;
    const updatedEthQuantity = ETH_BALANCE + quatity;
    const updatedUsdcBalance = product / updatedEthQuantity;
    const gottenUsdc = USDC_BALANCE - updatedUsdcBalance;

    ETH_BALANCE = updatedEthQuantity;
    USDC_BALANCE = updatedUsdcBalance

    res.json({
        message: `You got ${gottenUsdc} USDC for ${quatity} ETH`
    })
});

// app.post('/quote', (req, res) => {});

app.listen(3000);