import { useRef } from "react";

interface OperatorBoxType {
    value: string,
    screenValue: string,
    setScreenValue: (e: React.SetStateAction<string>) => any;
    setLastValue: (e: React.SetStateAction<string>) => any;
}

const OperatorBox = (props: OperatorBoxType) => {

    const isPressed = useRef(false);

    const {value, screenValue, setScreenValue, setLastValue} = props;
    const touchStart = (e: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>) => {
        e.currentTarget.style.transform = 'scale(0.7)';
        e.currentTarget.style.transitionDuration = '0.2s';
        if(isPressed.current) return;
        
        setLastValue((prev => {
            const result = (`${prev} ${Number(screenValue)} ${value}`)

            if(result.length > 40) return prev;
            setScreenValue('0');
            return result;
        }))
        
        isPressed.current = true;

        setTimeout(() => {
            isPressed.current = false;
        }, 300);
        
    }

    const touchEnd = (e:React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.transitionDuration = '0.2s';
    }

    return(
        <div onTouchStart={touchStart} onTouchEnd={touchEnd}
             onMouseDown={touchStart} onMouseUp={touchEnd} onMouseLeave={touchEnd} className="box operator-box">
            {value}
        </div>
    )
}


export default OperatorBox;