import React from 'react'

export const InicioPerfil = () => {
  return (
    <div className="tab-pane active show" id="profile">
    <div className="row">
        <div className="col-md-6">
            <h6>Acerca de mi</h6>
            <p>
                Web Designer, UI/UX Engineer
            </p>
            <h6>Hobbies</h6>
            <p>
                Indie music, skiing and hiking. I love the great outdoors.
            </p>
        </div>
        <div className="col-md-6">
            <h6>Recent badges</h6>
            <a href="1"className="badge badge-dark badge-pill">html5</a>
            <a href="1" className="badge badge-dark badge-pill">react</a>
            <a href="1"className="badge badge-dark badge-pill">codeply</a>
            <a href="1"className="badge badge-dark badge-pill">angularjs</a>
            <a href="1"className="badge badge-dark badge-pill">css3</a>
            <a href="1"className="badge badge-dark badge-pill">jquery</a>
            <a href="1"className="badge badge-dark badge-pill">bootstrap</a>
            <a href="1"className="badge badge-dark badge-pill">responsive-design</a>
            <hr/>
            <span className="badge badge-primary"><i className="fa fa-user"></i> 900 Followers</span>
            <span className="badge badge-success"><i className="fa fa-cog"></i> 43 Forks</span>
            <span className="badge badge-danger"><i className="fa fa-eye"></i> 245 Views</span>
        </div>
        <div className="col-md-12">
            <h5 className="mt-2 mb-3"><span className="fa fa-clock-o ion-clock float-right"></span> Recent Activity</h5>
            <table className="table table-hover table-striped">
                <tbody>                                    
                    <tr>
                        <td>
                            <strong>Abby</strong> joined ACME Project Team in <strong>`Collaboration`</strong>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Gary</strong> deleted My Board1 in <strong>`Discussions`</strong>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Kensington</strong> deleted MyBoard3 in <strong>`Discussions`</strong>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <strong>John</strong> deleted My Board1 in <strong>`Discussions`</strong>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Skell</strong> deleted his post Look at Why this is.. in <strong>`Discussions`</strong>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
  )
}
