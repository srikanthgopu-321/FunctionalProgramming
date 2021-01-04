module.exports = {
    digitalsum(number) {

        let sum = 0;

        while(number > 0 ) {
        reminder = number%10;
        sum = sum + reminder;
        number = Math.floor(number/10);
        }
        return sum;

    },
    firstandLast_Sum(number) {

        lastDigit = number%10;
        firstDigit = number;
        while(firstDigit >= 10) {
            firstDigit = Math.floor(firstDigit/10);
        }
        sum = lastDigit + firstDigit;

        return sum;
        
    },
    secondLargest_Number() {
        
        sL = n1>n2&&n1>n3 ? n2>n3?n2:n3 : n2>n1&&n2>n3 ? n1>n3?n1:n3 : n1>n2?n1:n2;
        return sL;
    },
    expenses(quantity,price_per_iterm) {
        let total_expense;

        total_expense = quantity*price_per_iterm;

        if(total_expense >= 1000 ) {
            //let discount;
            discount = total_expense * 0.1;
            total_expense= total_expense - discount;
        }
        return total_expense;
    },
    withdraw(withdraw_amout,initial_amount) {
        let amount;

        if(withdraw_amout % 5 == 0 && initial_amount > (withdraw_amout + 0.5 )) {
            amount = (initial_amount - withdraw_amout - 0.5);
        } else {
            console.log("amount should be multiple of 5")
        }
        
        return amount;
    }
}