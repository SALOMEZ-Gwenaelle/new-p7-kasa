import Logo from './../assets/logoFooter.png'

function Footer() {
    return (
        <div className="Footer">
            <img src={Logo} alt="Kasa" className='kasaLogoFooter' />
            <div>© 2020 Kasa. All rights reserved</div>
        </div>
    )
}

export default Footer