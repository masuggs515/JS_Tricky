function createAccount(pin, amount = 0) {
    return {
        checkBalance(pinInput){
            if(pinInput !== pin) return "Invalid PIN.";
            return `$${amount}`
        },

        deposit(pinInput, amountInput){
            if(pinInput !== pin) return "Invalid PIN.";
            amount += +amountInput;
            return `Succesfully deposited $${amountInput}. Current balance: $${amount}.`
        },
        withdraw(pinInput, amountInput){
            if(pinInput !== pin) return "Invalid PIN.";
            if(+amountInput > amount) return "Withdrawal amount exceeds account balance. Transaction cancelled."
            amount -= +amountInput;
            return `Succesfully withdrew $${amountInput}. Current balance: $${amount}.`
        },
        changePin(checkPin, newPin) {
            if(checkPin !== pin) return "Invalid PIN."
            pin = newPin;
            return "PIN successfully changed!"
        }
    }
}

module.exports = { createAccount };
