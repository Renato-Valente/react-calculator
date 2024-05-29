
interface ClearBoxType {
    setScreen: (value: React.SetStateAction<string>) => any;
}

const ClearBox = (props: ClearBoxType) => {

    const {setScreen} = props;
    const touchStart = () => {
        setScreen('0');
    }

    return(
        <div style={{gridColumnStart: 1, gridColumnEnd: 3}} onTouchStart={touchStart} className="box clear-box">
            AC
        </div>
    )
}

export default ClearBox;