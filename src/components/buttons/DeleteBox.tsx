import backspace from '../../assets/backspace.svg'

interface DeleteBoxType {
    setScreen: (value: React.SetStateAction<string>) => any;
}

const DeleteBox = (props: DeleteBoxType) => {

    const touchEnd = (e:React.TouchEvent<HTMLDivElement>) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.transitionDuration = '0.2s';
    }

    const {setScreen} = props;
    const touchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        e.currentTarget.style.transform = 'scale(0.9)';
        e.currentTarget.style.transitionDuration = '0.2s';
        setScreen((prev) => {
            const result = prev.slice(0, prev.length - 1);
            
            return (result.length > 0 && !isNaN(Number(result))) ? result : '0';
        })
    }

    return (
        <div onTouchStart={touchStart} onTouchEnd={touchEnd} className="box delete-box">
            <img src={backspace} style={{width:'50%', fill:'#fff', opacity:0.85}}  alt="" />
        </div>
    )
}

export default DeleteBox;