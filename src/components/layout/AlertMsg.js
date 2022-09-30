const AlertMsg=({alert})=>{
    return(
      alert!==null && <div className={`alert alert-${alert.type}`}>
          <i className="fas fa-info-circle"></i>&nbsp;
          {alert.msg}
      </div>
    )
}

export default AlertMsg;