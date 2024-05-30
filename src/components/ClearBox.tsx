
interface ClearBoxType {
    setScreen: (value: React.SetStateAction<string>) => any;
}

const ClearBox = (props: ClearBoxType) => {

    const {setScreen} = props;
    const touchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        setScreen('0');
        e.currentTarget.style.transform = 'scale(0.9)';
        e.currentTarget.style.transitionDuration = '0.2s';
    }

    const touchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.transitionDuration = '0.2s';
    }

    return(
        <div onTouchStart={touchStart} onTouchEnd={touchEnd} style={{gridColumnStart: 1, gridColumnEnd: 3}}  className="box clear-box">
            AC
        </div>
    )
}

export default ClearBox;