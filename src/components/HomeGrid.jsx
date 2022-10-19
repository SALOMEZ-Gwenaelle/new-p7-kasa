
function HomeGrid(props) {
    const {children} = props;
    return(
        <ul className="homeGrid">
            {children}
        </ul>
    );
}

export default HomeGrid;