var calculator = new Vue({
    el: "#calculator",
    data: {
        inputNum:"",
        total:"",
        disabled:true
    },
    methods: {
        one() {
            let num = 1;
            this.inputNum += num
        },
        two() {
            let num = 2;
            this.inputNum += num
        },
        three() {
            let num = 3;
            this.inputNum += num
        },
        four() {
            let num = 4;
            this.inputNum += num
        },
        five() {
            let num = 5;
            this.inputNum += num
        },
        six() {
            let num = 6;
            this.inputNum += num
        },
        seven() {
            let num = 7;
            this.inputNum += num
        },
        eight() {
            let num = 8;
            this.inputNum += num
        },
        nine() {
            let num = 9;
            this.inputNum += num
        },
        zero() {
            let num = 0;
            if (this.inputNum.split("")[0]) {
                this.inputNum += num
            }
        },
        //四則演算
        plus() {
            let plus = this.inputNum.split("+");
            if (this.inputNum != "" && plus.includes("") == false) {
                this.inputNum += "+"
            }
        },
        minus() {
            let minus = this.inputNum.split("-");
            if (this.inputNum != "" && minus.includes("") == false) {
                this.inputNum += "-"
            }
        },
        times() {
            let times = this.inputNum.split("*");
            if (this.inputNum != "" && times.includes("") == false) {
                this.inputNum += "*"
            }
        },
        divide() {
            let divide = this.inputNum.split("/");
            if (this.inputNum != "" && divide.includes("") == false) {
                this.inputNum += "/"
            }
        },
        //計算結果
        result() {
            return this.total = eval(this.inputNum);
        },
        //削除
        deleteBtn() {
            if (this.inputNum != "") {
                this.inputNum = ""
                this.total = 0;
            }
        }
    }
})