function Host (Host){
    let theHost = Host.host;
        return (
            <div className='host'>
                <div className="hostName">
                    {theHost.name}
                </div>
                <div className="hostImg">
                    <img src={theHost.picture} alt='host'/>
                </div>
            </div>
        );
    
};
  
export default Host;