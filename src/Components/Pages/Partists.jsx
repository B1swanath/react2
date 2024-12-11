import React from 'react'
import { PopularArtists } from '../Data/D-PA'
import Topnav from '../Modules/Topnav'
import Content from '../Modules/Content'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Partists() {
  return (

    <div className='dash' >

      <Topnav />

      <div className='C_main0'>
        <div className='C_main1 container-fluid'>

          <Row>

            <Col md={3}>
              <Content />  
            </Col>

            <Col md={9}>
              <div className='mainC-1 '>

                <div className='MPA0'>
                  <h4>Popular Artists</h4>
                  <Link className='MPA-show0' to='/dashboard'>Back</Link>
                </div>

                <div className='artists2 d-flex justify-content-between flex-wrap'>
                  {
                    PopularArtists.map((a)=>{
                    return(
                      <div>
                        <img src={a.Image} alt="" className='my-3' style={{width:'165px', height:'165px', borderRadius:'50%'}} />
                        <p>
                          {a.Name}
                          <br />
                          {a.Tag}
                        </p>
                      </div>
                    )
                    })
                  }
                </div>
                
              </div>
            </Col>

          </Row>
        </div>
      </div>

    </div>

    
  )
}

export default Partists

