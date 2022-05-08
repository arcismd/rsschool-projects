class Calculator {
    constructor(previousOperandEl, currentOperandEl) {
        this.previousOperandEl = previousOperandEl
        this.currentOperandEl = currentOperandEl
    }

    clear() {
        this.currentOperandEl = ""
        this.previousOperandEl = ""
        this.operation = undefined
    }

    delete() {

    }

    appendNum(number) {

    }

    chooseOp(operation) {

    }

    compute() {

    }

    update() {

    }
}

const numBtn = document.querySelectorAll("[data-number]")
const opBtn = document.querySelectorAll("[data-operation]")
const equalsBtn = document.querySelector("[data-equals]")
const deleteBtn = document.querySelector("[data-delete]")
const allClearBtn = document.querySelector("[data-all-clear]")
const previousOperandEl = document.querySelector("[data-previous-operand]")
const currentOperandEl = document.querySelector("[data-current-operand]")

