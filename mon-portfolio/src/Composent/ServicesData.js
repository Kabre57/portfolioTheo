import React from 'react'

const ServicesData = ( props ) => {
    return (
        <div className="col-lg-4 col-md-6 text-center">
            <div className="Services-selection">
                <div className="Services-icon">
                <i className ={props.icon}></i>
                </div>
                 <div className="Services-description">
                    <p>={props.title}</p>
                    <p>={props.desc}</p>
                 </div>
            </div>
        </div>
    )
}

ServicesData.defaultPropos = {
    icon: 'fa fa-youtube',
    title: 'Title Here',
    desc: 'Desc Here'
}

export default ServicesData