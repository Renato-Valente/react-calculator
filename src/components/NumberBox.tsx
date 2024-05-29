
interface numberBoxType {
    value: string,
    setScreen: (value: React.SetStateAction<string>) => any;
}

const NumberBox = (props: numberBoxType) => {

    const {value, setScreen} = props;
    return(
        <div onTouchStart={() => setScreen((prev) => {return prev + value})} className="box">
            {value}
        </div>
    )
}

export default NumberBox;