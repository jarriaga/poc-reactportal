import RxpModal from "./RxpModal/RxpModal";
import './App.css'
import RxpPortalButton from "./RxpPortalButton/RxpPortalButton";
import {useState} from "react";

const VERIFF_TAG_EXAMPLE1 = `
<div>
    <p>First veriff MODAL example1</p>
    <div class="flexButton">
        <button portalButton="doSomething">example1</button>
        <button portalButton="doSomething3">example1</button>
    </div>
</div>
`

const VERIFF_TAG_EXAMPLE2 = `
<div>
    <p> This a reactivation MODAL example2... click the button to continue</p>
    <button portalButton="OtherButtonAction">example2</button>
</div>
`


function App() {

    const [veriffStatus, setVeriffStatus] = useState(1);


    const buttonClick1 = () => {
        //alert('click button1')
        setVeriffStatus(2)
    }

    const buttonClick2 = () => {
        //alert('click button 2')
        setVeriffStatus(1)
    }

    return (
        <div className="App">

            {veriffStatus == 1 &&
                <RxpModal htmlContent={VERIFF_TAG_EXAMPLE1}>
                    <div>
                        <RxpPortalButton portalButton="doSomething" buttonClick={buttonClick1}>
                            Hello Button 1
                        </RxpPortalButton>
                        <RxpPortalButton portalButton="doSomething3" buttonClick={() => {
                            alert('click 1a')
                        }}>
                            Hello Button 1a
                        </RxpPortalButton>
                    </div>
                </RxpModal>
            }

            {veriffStatus == 2 &&
                <RxpModal htmlContent={VERIFF_TAG_EXAMPLE2}>
                    <RxpPortalButton portalButton="OtherButtonAction" buttonClick={buttonClick2}>
                        New Button 2
                    </RxpPortalButton>
                </RxpModal>
            }

        </div>
    )
}

export default App
