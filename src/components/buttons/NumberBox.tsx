import { useRef } from "react";

interface numberBoxType {
    value: string,
    setScreen: (value: React.SetStateAction<string>) => any;
}

const NumberBox = (props: numberBoxType) => {

    const isPressed = useRef(false);
    const {value, setScreen} = props;

    const touchStart = (e: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>) => {

        console.log('ispressed:', isPressed.current);
        e.currentTarget.style.transform = 'scale(0.7)';
        e.currentTarget.style.transitionDuration = '0.2s';
        if(isPressed.current) return;
        isPressed.current = true;


        setScreen((prev) => {
            let result = (prev == '0' && value != '.') ? value : prev + value;
            
            result = (value == '.' && prev.includes('.')) ? prev : result;
            
            return (result.length < 10) ? result : prev;
        });

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
             onMouseDown={touchStart} onMouseUp={touchEnd} onMouseLeave={touchEnd}
             className="box number-box">
            {value}
        </div>
    )
}

export default NumberBox;