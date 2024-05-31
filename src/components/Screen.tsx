import './Screen.css'

interface ScreenType {
    lastValue: string,
    currentValue: string
}

const Screen = (props: ScreenType) => {

    const {lastValue, currentValue} = props;

    return (

        <div className="screen">
            <div className="last-value">{lastValue}</div>
            <div className="current-value">{currentValue}</div>
        </div>
/*         <div className="screen">
            {currentValue}
        </div> */
    )
}

export default Screen;