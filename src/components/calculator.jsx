import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackspace, faDivide } from '@fortawesome/free-solid-svg-icons'
import Button from './Button/Button';

class Calculator extends React.Component {

    constructor() {
        super();

        this.operation = this.operation.bind(this);
        this.clear = this.clear.bind(this);
        this.operator = this.operator.bind(this);
        this.equal = this.equal.bind(this);
        this.delete = this.delete.bind(this);
        this.operationContent = [];
        this.number = "";
    }

    clear() {
        document.querySelector('.containResult h2').innerHTML = '';
        document.querySelector('.operation p').innerHTML = '';
        this.operationContent = [];
        this.number = "";
    }

    delete(e) {
        let teste = document.querySelector('.operation p').textContent.lastIndexOf(" ");
    }


    operation(e, key) {
        let number = key;

        if (e) {
            number = e.target.textContent
        }

        this.number += parseInt(number);
        document.querySelector('.operation p').textContent = this.number;
    }

    equal(e, key) {
        if (e) {
            this.operator(e);
        } else {
            this.operator(null, key);
        }
    }

    operator(e, key) {
        if (this.number != "") {
            this.operationContent.push(parseInt(this.number));
        }

        let number = key;

        if (e) {
            number = e.target.textContent
        }

        if (this.operationContent[this.operationContent.length - 1] == "=" || this.operationContent[this.operationContent.length - 1] == "Enter") {
            this.operationContent.pop();
        }

        console.log('oi');
        if (!isNaN(this.operationContent[this.operationContent.length - 1])) {
            if (this.operationContent.length == 3) {
                this.operationContent = [eval(this.operationContent.join(' '))];
                document.querySelector('.containResult h2').innerHTML = this.operationContent;
            }

            this.operationContent.push(number);
            this.number = "";
        }

    }

    render() {
        window.addEventListener('keydown', (e) => {
            if (!isNaN(e.key)) {
                this.operation(null, e.key);
            } else if (e.key == '-' || e.key == '*' || e.key == '/' || e.key == '+' || e.key == '%') {
                this.operator(null, e.key);
            } else if (e.key == '=' || e.key == 'Enter') {
                this.equal(null, e.key);
            }
        });

        return <>
            <section className="display">
                <div className="operation">
                    <p></p>
                </div>
                <div className="containResult">
                    <p>=</p>
                    <h2></h2>
                </div>
            </section>
            <section className="painel">
                <div className="column">
                    <Button click={this.clear} class="button blue" value="C" />
                    <Button click={this.operator} class="button blue" value="/" />
                    <Button click={this.operator} class="button blue" value="*" />
                    <Button click={this.delete} class="button blue" value={<FontAwesomeIcon icon={faBackspace} />} />
                </div>
                <div className="column">
                    <Button click={this.operation} class="button" value="7" />
                    <Button click={this.operation} class="button" value="8" />
                    <Button click={this.operation} class="button" value="9" />
                    <Button click={this.operator} class="button blue" value="-" />
                </div>
                <div className="column">
                    <Button click={this.operation} class="button" value="4" />
                    <Button click={this.operation} class="button" value="5" />
                    <Button click={this.operation} class="button" value="6" />
                    <Button click={this.operator} class="button blue" value="+" />
                </div>
                <div className="footerCalc">
                    <div className="footerButtons">
                        <div className="column columnFooter">
                            <Button click={this.operation} class="button buttonfooter" value="1" />
                            <Button click={this.operation} class="button buttonfooter" value="2" />
                            <Button click={this.operation} class="button buttonfooter" value="3" />
                        </div>
                        <div className="column columnFooter">
                            <Button click={this.operator} class="button buttonfooter" value="%" />
                            <Button click={this.operation} class="button buttonfooter" value="0" />
                            <Button click={this.operation} class="button buttonfooter" value="." />
                        </div>
                    </div>
                    <Button click={this.equal} class="button buttonBigger backgroundBlue" value="=" />
                </div>
            </section>
        </>
    }

}

export default Calculator;