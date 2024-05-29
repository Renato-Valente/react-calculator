
interface EqualsBoxType {
    setScreen: (value: React.SetStateAction<string>) => any;
}

const EqualsBox = (props: EqualsBoxType) => {
 
    return(
        <div style={{gridColumnStart: 3, gridColumnEnd: 5}} className="box equals-box">
            =
        </div>
    )


}

export default EqualsBox;