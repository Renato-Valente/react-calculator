
import backspace from '../assets/backspace.svg'

interface DeleteBoxType {
    setScreen: (value: React.SetStateAction<string>) => any;
}

const DeleteBox = (props: DeleteBoxType) => {

    const {setScreen} = props;
    const touchStart = () => {
        setScreen((prev) => {
            return prev.slice(0, prev.length - 1);
        })
    }

    return (
        <div onTouchStart={touchStart} className="box delete-box">
            <img src={backspace} style={{width:'50%', fill:'#fff', opacity:0.85}}  alt="" />
        </div>
    )
}

export default DeleteBox;