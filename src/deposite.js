document.getElementById("deposite-btn").addEventListener("click", function () {
    const depositeInput = document.getElementById("deposite-input")
    const depositeBalance = document.getElementById("deposite-balance")
    const totalBalance = document.getElementById("total-balance")
    
    if (depositeInput.value != "") {
        const totalDeposite = parseFloat(depositeBalance.innerText) + parseFloat(depositeInput.value) 
        depositeBalance.innerText = totalDeposite
        const newTotalBalance = parseFloat(totalBalance.innerText) + parseFloat(depositeInput.value)
        totalBalance.innerText = newTotalBalance
        depositeInput.value = ""
      
    } else {
        alert("please provie a valid number")
    }
})


// withdra system ...

document.getElementById("withdra-btn").addEventListener("click",function(){
    const withdraInput = document.getElementById("withdra-input")
    const withdraBalance = document.getElementById("withdra-balance")
    const totalBalance = document.getElementById("total-balance")

    if (withdraInput.value != "") {
        const totalWithdra = parseFloat(withdraBalance.innerText) + parseFloat(withdraInput.value)

        withdraBalance.innerText = totalWithdra
        totalBalance.innerText = parseFloat(totalBalance.innerText) - parseFloat(withdraInput.value)
        withdraInput.value = ""
    } else {
        alert("please provide a valid number")
    }
    
})