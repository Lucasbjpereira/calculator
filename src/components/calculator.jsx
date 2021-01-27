import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackspace, faDivide } from '@fortawesome/free-solid-svg-icons'
import Button from './Button/Button';

function Calculator() {
    return <>
        <section className="display">
        </section>
        <section className="painel">
            <div className="column">
                <Button class="button blue" value=""/>
                <Button class="button blue" value={<FontAwesomeIcon icon={faDivide}/>}/>
                <Button class="button blue" value="X"/>
                <Button class="button blue" value={<FontAwesomeIcon icon={faBackspace}/>}/>
            </div>
            <div className="column">
                <button className="button">7</button>
                <button className="button">8</button>
                <button className="button">9</button>
                <button className="button blue">-</button>
            </div>
            <div className="column">
                <button className="button">4</button>
                <button className="button">5</button>
                <button className="button">6</button>
                <button className="button blue">+</button>
            </div>
            <div className="footerCalc">
                <div className="footerButtons">
                    <div className="column columnFooter">
                        <button className="button buttonfooter">1</button>
                        <button className="button buttonfooter">2</button>
                        <button className="button buttonfooter">3</button>
                    </div>
                    <div className="column columnFooter">
                        <button className="button buttonfooter">%</button>
                        <button className="button buttonfooter">0</button>
                        <button className="button buttonfooter">.</button>
                    </div>
                </div>
                <button className="button buttonBigger backgroundBlue">=</button>
            </div>
        </section>
    </>
}

export default Calculator;