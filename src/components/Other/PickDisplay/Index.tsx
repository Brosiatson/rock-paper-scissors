export const PickDisplay: React.FC<{ pick: string }> = ({ pick }) => {
    return(
        <div className={`pick-display pick-display__${pick}`}>
            <div className={`pick-display__img pick-display__img--${pick}`}></div>
        </div>
    )
}