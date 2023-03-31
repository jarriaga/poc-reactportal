import "./RxpModal.css"

interface ModalProps {
    htmlContent: string,
    children: JSX.Element
}

const RxpModal = ({htmlContent, children}: ModalProps) => {
    return (
        <div className={"modal"}>
            <div dangerouslySetInnerHTML={{__html: htmlContent}}/>
            {children}
        </div>
    )
};

export default RxpModal
