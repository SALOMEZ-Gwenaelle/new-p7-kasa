function Host (Host){
    console.log(Host)
    let theHost = Host.host;
        return (
            <span className='host'>
                {theHost.name}
                <img src={theHost.picture} alt='host'/>
            </span>
        );
    
};
  
export default Host;