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