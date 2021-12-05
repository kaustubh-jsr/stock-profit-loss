let buyingPrice = document.querySelector('#buying-price');
let sellingPrice = document.querySelector('#selling-price');
let numStocks = document.querySelector('#num-of-stocks');
let btnCheck = document.querySelector('#btn-check');
let neutralMsg = document.querySelector('#neutral-msg');
let profitMsg = document.querySelector('#profit-msg');
let lossMsg = document.querySelector('#loss-msg');
let mainEl = document.querySelector('main');
let footerEl = document.querySelector('footer');

let isValidInput = (num) => {
    if(num <0 || num ==='' || num === null || num==0){
        return false;
    }
    return true;
}

let calculatePL = () => {
    if(isValidInput(buyingPrice.value) && isValidInput(sellingPrice.value) && isValidInput(numStocks.value)){
        sP = Number(sellingPrice.value);
        cP = Number(buyingPrice.value);
        quan = Number(numStocks.value);

        netPL = (sP - cP) * quan;
        if(netPL>0){
            perPL = ((sP - cP)/cP) * 100;
            neutralMsg.style.display = 'none';
            lossMsg.style.display = 'none';
            profitMsg.style.display = 'block';
            profitMsg.innerText = `You had a net profit of ${netPL} amounting to ${Math.round(perPL)}% profit!`;
            mainEl.style.boxShadow = '0 -12px 15px #61E786';
            footerEl.style.boxShadow = '0 1px 15px #61E786';
        }else if(netPL<0){
            netPL = netPL * (-1);
            perPL = ((cP - sP)/cP) * 100;
            neutralMsg.style.display = 'none';
            profitMsg.style.display = 'none';
            lossMsg.style.display = 'block';
            lossMsg.innerText = `You had a net loss of ${netPL} amounting to ${Math.round(perPL)}% loss!`;
            mainEl.style.boxShadow = '0 -12px 15px rgb(245, 23, 103)';
            footerEl.style.boxShadow = '0 1px 15px rgb(245, 23, 103)';
        }else{
            neutralMsg.style.display = 'block';
            profitMsg.style.display = 'none';
            lossMsg.style.display = 'none';
            neutralMsg.innerText = 'NO PAIN NO GAIN';
            mainEl.style.boxShadow = '0 -12px 15px rgb(245, 23, 103)';
            footerEl.style.boxShadow = '0 1px 15px rgb(245, 23, 103)';
        }
    }else{
        neutralMsg.style.display = 'block';
        profitMsg.style.display = 'none';
        lossMsg.style.display = 'none';
        neutralMsg.innerText = 'Please enter valid inputs in the fields';
        mainEl.style.boxShadow = '0 -12px 15px #ced4da';
        footerEl.style.boxShadow = '0 1px 15px #ced4da';
    }
}

btnCheck.addEventListener('click',calculatePL)

