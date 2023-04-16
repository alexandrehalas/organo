import './Time.css'

export const Time = (props) => {
    return (
        <div className="time" style={ {backgroundColor: props.corSecundaria} }>
            <section>
                <h3 style={ {borderColor: props.corPrimaria} }>{props.nome}</h3>
            </section>
        </div>
    )
}