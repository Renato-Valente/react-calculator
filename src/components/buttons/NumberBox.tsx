
interface numberBoxType {
    value: string,
    setScreen: (value: React.SetStateAction<string>) => any;
}

const NumberBox = (props: numberBoxType) => {

    const {value, setScreen} = props;
    const touchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        console.log(e.touches[0].clientX);
        e.currentTarget.style.transform = 'scale(0.9)';
        e.currentTarget.style.transitionDuration = '0.2s';


        setScreen((prev) => {
            return (prev == '0' && value != '.') ? value : prev + value;
        });
    }

    const touchEnd = (e:React.TouchEvent<HTMLDivElement>) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.transitionDuration = '0.2s';
    }

    return(
        <div onTouchStart={touchStart} onTouchEnd={touchEnd} className="box">
            {value}
        </div>
    )
}

export default NumberBox;