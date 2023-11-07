const ConceptsContainer = (props) => {
    console.log(props)
    return (
        <ul className="concepts">{props.children}</ul>
    )
}

export default ConceptsContainer;