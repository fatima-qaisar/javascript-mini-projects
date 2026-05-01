const BASE_URL="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";
const drop_downs=document.querySelectorAll(".drop-down select");
const btn=document.querySelector("#btn");
const fromCurr=document.querySelector(".from select");
const toCurr=document.querySelector(".to select");
const message = document.querySelector(".msg");

/*
for(let code in countryList){
    console.log(code, countryList[code]);

}
*/

for(let select of drop_downs){
    for(let currCode in countryList){
        let newOption=document.createElement("option");
        newOption.innerText=currCode;
        newOption.value=currCode;
        if(select.name === "from" && currCode === "USD"){
            newOption.selected = "selected";
        }else if(select.name === "to" && currCode === "PKR"){
            newOption.selected = "selected";
        }
         select.append(newOption);
    }

    select.addEventListener("change", (evt)=>{
        updateFlag(evt.target);
    });
}

const updateFlag = (element) => {
   let currCode = element.value;
   let countryCode = countryList[currCode];
   let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
   let imgelement = element.parentElement.querySelector("img");
   imgelement.src = newSrc;
};

btn.addEventListener("click", (evt)=>{
    evt.preventDefault(); //defualt behavior of  form submission is to  reload page. we want to prevent that.
    updateExchangeRate();
});

const updateExchangeRate = async () => {
        let amount=document.querySelector(".amount input");
    let amountVal=amount.value;
    console.log(amountVal);
    if(amountVal === "" || amountVal <= 0){
        alert("Please enter a valid amount");
        return;
    }
    const URL=`${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;
    let response= await fetch(URL);
    //console.log(response);
    let data = await response.json();
    //console.log(data);
    let rate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];
    //console.log(rate);
    let finalAmount =  amountVal * rate;
    message.innerText = `${amountVal} ${fromCurr.value} = ${finalAmount.toFixed(2)} ${toCurr.value}`;
};

window.addEventListener("load", updateExchangeRate);