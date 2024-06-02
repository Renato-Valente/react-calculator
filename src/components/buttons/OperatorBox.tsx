
interface OperatorBoxType {
    value: string,
    screenValue: string,
    setScreenValue: (e: React.SetStateAction<string>) => any;
    setLastValue: (e: React.SetStateAction<string>) => any;
}

const OperatorBox = (props: OperatorBoxType) => {

    const {value, screenValue, setScreenValue, setLastValue} = props;
    const touchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        console.log(e.touches[0].clientX);
        e.currentTarget.style.transform = 'scale(0.9)';
        e.currentTarget.style.transitionDuration = '0.2s';

        setLastValue((prev => {
            return(`${prev} ${screenValue} ${value}`)
        }))

        setScreenValue('0');
        
    }

    const touchEnd = (e:React.TouchEvent<HTMLDivElement>) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.transitionDuration = '0.2s';
    }

    return(
        <div onTouchStart={touchStart} onTouchEnd={touchEnd} className="box operator-box">
            {value}
        </div>
    )
}


export default OperatorBox;