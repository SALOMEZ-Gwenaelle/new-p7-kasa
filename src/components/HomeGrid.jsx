
function HomeGrid(props) {
    const {children} = props;
    console.log(children);
    return(
        <ul className="homeGrid">
            {children}
        </ul>
    );
}

export default HomeGrid;