import { useRef } from 'react';
import backspace from '../../assets/backspace.svg'

interface DeleteBoxType {
    setScreen: (value: React.SetStateAction<string>) => any;
}

const DeleteBox = (props: DeleteBoxType) => {

    const isPressed = useRef(false);

    
    const {setScreen} = props;
    const touchStart = (e: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>) => {
        e.currentTarget.style.transform = 'scale(0.7)';
        e.currentTarget.style.transitionDuration = '0.2s';

        if(isPressed.current) return;

        setScreen((prev) => {
            const result = prev.slice(0, prev.length - 1);
            
            return (result.length > 0 && !isNaN(Number(result))) ? result : prev;
        })

        isPressed.current = true;
        setTimeout(() => {
            isPressed.current = false;
        }, 300);
    }
    
    const touchEnd = (e: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.transitionDuration = '0.2s';
    }
    return (
        <div onMouseDown={touchStart} onMouseUp={touchEnd} onMouseLeave={touchEnd}
         onTouchStart={touchStart} onTouchEnd={touchEnd} className="box delete-box">
            <img src={backspace} style={{width:'50%', fill:'#fff', opacity:0.85}}  alt="" />
        </div>
    )
}

export default DeleteBox;