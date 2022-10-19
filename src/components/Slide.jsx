
function Slide(props) {
    const picture = props.picture;
    const idkey = props.idkey
    const activeSlide = props.active;
    return(
        <div className={idkey===activeSlide ? 'slide active' : 'slide '} >
            <img className="slideImg" src={picture} alt="" />
        </div>
    );
}

export default Slide;