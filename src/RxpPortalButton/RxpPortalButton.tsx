import './RxpPortalButton.css'
import {useEffect, useState} from "react";
import {createPortal} from "react-dom";


interface ButtonProps {
    buttonClick: any,
    portalButton: string,
    children: string
}


const RxpPortalButton = ({buttonClick, portalButton, children}: ButtonProps) => {

    const [wrapper, setWrapper] = useState<HTMLElement|null>(null);


    useEffect(() => {
       let element = document.querySelector(`button[portalButton="${portalButton}"]`);
       if(element){
           // if(document.querySelector(".rxp-portal")){
           //     return;
           // }
           const span = document.createElement("span");
           span.className="rxp-portal";
           element.replaceWith(span);
           setWrapper(span as HTMLElement);
       }
    }, []);

    if(!wrapper){
        return null;
    }

    return createPortal(
        <div>
            <button className="rxpPortalButton" onClick={buttonClick}>
                {children}
            </button>
        </div>, wrapper
    )

}


export default RxpPortalButton;
