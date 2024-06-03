import { useRef } from "react";

interface EqualsBoxType {
    setScreen: (value: React.SetStateAction<string>) => any;
    setLastValue: (value: React.SetStateAction<string>) => any;
    lastValue: string;
}

const EqualsBox = (props: EqualsBoxType) => {

    const isPressed = useRef(false);
    const {setLastValue, setScreen, lastValue} = props;

    const touchStart = (e: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>) => {
        
        e.currentTarget.style.transform = 'scale(0.7)';
        e.currentTarget.style.transitionDuration = '0.2s';

        if(isPressed.current) return;

        setScreen((prev) => {
            const result = eval(`${lastValue} ${prev}`);
            if(!isFinite(result) || isNaN(result)) return prev;
            setLastValue('');
            return(String(result));
        })

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
             onMouseDown={touchStart} onMouseUp={touchEnd} onMouseLeave={touchEnd} style={{gridColumnStart: 3, gridColumnEnd: 5}} className="box equals-box">
            =
        </div>
    )


}

export default EqualsBox;