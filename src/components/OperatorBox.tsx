
interface OperatorBoxType {
    value: string
}

const OperatorBox = (props: OperatorBoxType) => {

    const {value} = props;

    return(
        <div className="box operator-box">
            {value}
        </div>
    )
}


export default OperatorBox;