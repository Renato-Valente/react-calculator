
interface EqualsBoxType {
    setScreen: (value: React.SetStateAction<string>) => any;
    setLastValue: (value: React.SetStateAction<string>) => any;
    lastValue: string;
}

const EqualsBox = (props: EqualsBoxType) => {

    const {setLastValue, setScreen, lastValue} = props;

    const touchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        console.log(e.touches[0].clientX);
        
        setScreen((prev) => {
            const result = eval(`${lastValue} ${prev}`);
            return(String(result));
        })
        setLastValue('');

        e.currentTarget.style.transform = 'scale(0.9)';
        e.currentTarget.style.transitionDuration = '0.2s';
    }

    const touchEnd = (e:React.TouchEvent<HTMLDivElement>) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.transitionDuration = '0.2s';
    }
 
    return(
        <div onTouchStart={touchStart} onTouchEnd={touchEnd} style={{gridColumnStart: 3, gridColumnEnd: 5}} className="box equals-box">
            =
        </div>
    )


}

export default EqualsBox;